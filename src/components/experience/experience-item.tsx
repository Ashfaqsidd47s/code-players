"use client";

import { type MotionValue, motion, useTransform } from "framer-motion";

interface Experience {
    id: number;
    company: string;
    position: string;
    duration: string;
    location: string;
    type: string;
    status: string;
    description: string;
    skills: string[];
    logo: string;
}

interface ExperienceItemProps {
    experience: Experience;
    index: number;
    scrollYProgress: MotionValue<number>;
    totalItems: number;
}

export default function ExperienceItem({
    experience,
    index,
    scrollYProgress,
    totalItems,
}: ExperienceItemProps) {
    const isEven = index % 2 === 0;

    // Calculate when this item should reach full opacity
    const itemTriggerPoint = (index + 1) / totalItems - 0.25;
    const itemStartPoint = index / totalItems + 0.2;

    // Transform scroll progress to opacity for this specific item
    const itemOpacity = useTransform(
        scrollYProgress,
        [itemStartPoint, itemTriggerPoint],
        [0.3, 1]
    );
    const dotScale = useTransform(
        scrollYProgress,
        [itemStartPoint, itemTriggerPoint],
        [0, 1]
    );

    return (
        <motion.div className="relative" style={{ opacity: itemOpacity }}>
            {/* Mobile Layout */}
            <div className="flex items-start space-x-6 md:hidden">
                <motion.div
                    className="relative z-10 mt-2 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                >
                    <div
                        className={`bg-primary h-4 w-4 rounded-full border-4 border-white shadow-lg dark:border-slate-900`}
                    ></div>
                </motion.div>
                <motion.div
                    className="flex-1 pb-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-4">
                        <h3 className="mb-1 text-xl font-bold text-slate-900 dark:text-slate-100">
                            {experience.company}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            {experience.duration} | {experience.location}
                        </p>
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">
                        {experience.position} ({experience.type})
                    </h4>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                        {experience.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden h-[50vh] items-center justify-center md:flex">
                {/* Left Section */}
                <motion.div
                    className={`w-5/12 ${isEven ? "pr-8 text-right" : "order-3 pl-8 text-left"}`}
                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {experience.company}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {experience.duration} | {experience.location}
                    </p>
                </motion.div>

                {/* Center Dot */}
                <motion.div
                    style={{ scale: dotScale }}
                    className={`relative z-10 flex items-center justify-center ${isEven ? "" : "order-2"}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                >
                    <div
                        className={`bg-primary h-6 w-6 rounded-full border-4 border-white shadow-lg dark:border-slate-900`}
                    ></div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className={`w-5/12 ${isEven ? "pl-8" : "order-1 pr-8 text-right"}`}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                >
                    <h4 className="mb-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {experience.position} ({experience.type})
                    </h4>
                    <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                        {experience.description}
                    </p>
                    <div className="mt-3 flex flex-wrap justify-end gap-2">
                        {experience.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
