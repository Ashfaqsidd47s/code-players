
import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    id: "01",
    title: "Discover",
    description: "Understanding your goals, users, and challenges through research and strategy.",
  },
  {
    id: "02",
    title: "Design",
    description: "Transforming insights into intuitive, beautiful, and functional product experiences.",
  },
  {
    id: "03",
    title: "Deliver",
    description: "Testing, refining, and launching the final product with clarity and precision.",
  },
];

const StepProcess = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    }),
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { 
        delay: i * 1.2 + 0.8, // Wait for cards to appear
        duration: 1.5, 
        ease: "easeInOut" 
      },
    }),
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-6">
      <div className="text-center mb-20">
        <p className="italic text-muted-foreground text-lg mb-2 font-serif">/ Our Projects Explained</p>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 transition-all">
          Here&apos;s how it works
        </h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        {/* Animated SVG Connector Layer */}
        <svg
          className="absolute top-0 left-0 w-full h-full hidden md:block pointer-events-none overflow-visible z-20"
          viewBox="0 0 1000 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Path 1: High Arc from 01 entering "into" 02 */}
          <motion.path
            d="M260,140 C 300,-20 380,20 400,100"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="8 6"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          />
          
          {/* Path 2: Looping from 02 to 03 */}
          <motion.path
            d="M600,240 C 660,340 720,340 730,280 C 740,220 680,210 740,250"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="8 6"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          />

          {/* Pulse Dots at entry points */}
          <motion.circle 
            cx="400" cy="100" r="4" fill="var(--primary)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5 }}
          />
        </svg>

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className={`relative ${index === 1 ? "md:mt-24" : "z-10"}`}
          >
            <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white/90 backdrop-blur-xl rounded-[2.5rem] group hover:translate-y-[-4px] transition-all duration-500">
              <CardContent className="p-10 pt-16 space-y-12">
                <span className="text-7xl font-extralight text-slate-100 block group-hover:text-primary/10 transition-colors">
                  {step.id}
                </span>
                <div className="space-y-4">
                  <h3 className="text-3xl font-semibold text-slate-800">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepProcess;