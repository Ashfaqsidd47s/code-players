import  { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import useIsMobile from "@/hooks/use-is-mobile";
import PrespectiveText from "./PrespectiveText";

const easeCurve = [0.76, 0, 0.24, 1] as const;

const menuVariants: Variants = {
  open: (isMobile: boolean) => ({
    width: isMobile ? "360px" : "430px",
    height: isMobile ? "420px" : "600px",
    top: "-18px",
    right: "-18px",
    transition: {
      duration: 0.7,
      ease: easeCurve,
    },
  }),

  closed: {
    width: 80,
    height: 34,
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.5,
      ease: easeCurve,
    },
  },
};

const linkVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },

  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.7,
      ease: easeCurve,
    },
  }),

  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

const menuList = [
  {
    title: "ABOUT",
    link: "#about",
  },
  {
    title: "EXPERIENCE",
    link: "#experience",
  },
  {
    title: "PROJECTS",
    link: "#projects",
  },
  {
    title: "CONTACT",
    link: "#contact",
  },
];

export default function Menu() {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <div className=" relative">
      {/* Expanding Menu Background */}
      <motion.div
        className="bg-primary absolute rounded-3xl border-2 border-white/10 overflow-hidden"
        variants={menuVariants}
        custom={isMobile}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && (
            <nav className="h-full w-full pt-20 px-8">
              <ul className="flex flex-col gap-4">
                {menuList.map((item, index) => (
                  <motion.li
                    key={item.title}
                    custom={index}
                    variants={linkVariants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <a
                      href={item.link}
                      onClick={closeMenu}
                      className="text-white text-4xl md:text-5xl font-medium hover:pl-3 transition-all duration-300 block"
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="relative h-[34px] w-[80px] overflow-hidden rounded-full bg-indigo-50 cursor-pointer"
      >
        {/* MENU */}
        <div
          className={`bg-primary text-background absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            isActive ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <PrespectiveText label="Menu" />
        </div>

        {/* CLOSE */}
        <div
          className={`bg-foreground text-background absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            isActive ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <PrespectiveText label="Close" />
        </div>
      </button>
    </div>
  );
}