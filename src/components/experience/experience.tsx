"use client";

import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import ExperienceItem from "./experience-item";

const worklist = [
    {
        id: 1,
        company: "WhatsByte",
        position: "FrontEnd Developer",
        duration: "2025 - Present",
        location: "San Francisco, CA",
        type: "Internship",
        status: "Current",
        description:
            "Led development of responsive web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality user experiences.",
        skills: ["React", "Next.js", "TypeScript"],
        logo: "WB",
    },
    {
        id: 2,
        company: "Unfluke",
        position: "Full Stack Developer",
        duration: "2022 - 2023",
        location: "Delhi",
        type: "Internship",
        status: "Completed",
        description:
            "Developed and maintained client websites and web applications. Improved site performance by 40% through optimization techniques.",
        skills: ["React", "Node.js", "MongoDB", "SCSS"],
        logo: "Uf",
    },
];

export default function Experience() {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Transform scroll progress to control the orange line growth
    const orangePathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            id="experience"
            className="bg-slate-50 px-6 py-24 dark:bg-slate-800"
        >
            <div className="container mx-auto max-w-5xl" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-16 text-center text-5xl font-bold text-slate-900 md:text-6xl dark:text-slate-100">
                        Experience
                    </h2>
                    <div className="relative">
                        {/* Timeline Line - Desktop (SVG) */}
                        <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 md:block">
                            <svg
                                className="h-full w-full"
                                viewBox="0 0 2 100"
                                preserveAspectRatio="none"
                            >
                                {/* Static gray dashed line */}
                                <path
                                    d="M1 0 V100"
                                    stroke="#94a3b8"
                                    strokeWidth="2"
                                    strokeDasharray="3 1"
                                    fill="none"
                                    opacity="0.5"
                                />
                                {/* Animated orange line that grows with scroll */}
                                <motion.path
                                    d="M1 0 V100"
                                    stroke="#f97316"
                                    strokeWidth="3"
                                    fill="none"
                                    style={{
                                        pathLength: orangePathLength,
                                    }}
                                    initial={{ pathLength: 0 }}
                                />
                            </svg>
                        </div>

                        {/* Timeline Line - Mobile */}
                        <div className="absolute top-0 bottom-0 left-8 w-0.5 md:hidden">
                            {/* Static gray line */}
                            <div className="absolute inset-0 bg-slate-300 opacity-50 dark:bg-slate-600"></div>
                            {/* Animated orange line */}
                            <motion.div
                                className="w-full bg-orange-500"
                                style={{
                                    height: useTransform(
                                        scrollYProgress,
                                        [0, 1],
                                        ["0%", "100%"]
                                    ),
                                }}
                                initial={{ height: "0%" }}
                            />
                        </div>

                        <div className="space-y-12 md:space-y-16">
                            {worklist.map((experience, index) => (
                                <ExperienceItem
                                    key={experience.id}
                                    experience={experience}
                                    index={index}
                                    scrollYProgress={scrollYProgress}
                                    totalItems={worklist.length}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
