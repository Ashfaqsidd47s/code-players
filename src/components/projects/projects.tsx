"use client";

import { useRef } from "react";

import { useScroll } from "framer-motion";

import { projectList } from "@/constants/project-data";

import ProjectItem from "./project-item";

export default function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });
    return (
        <section id="projects" ref={container}>
            <div className="flex items-center justify-center">
                <h2 className="border-b-primary mt-8 w-[80%] max-w-[870px] border-b py-3 text-3xl font-bold md:w-full">
                    Projects
                </h2>
            </div>
            {projectList.map((project, i) => {
                const targetScale = 1 - (projectList.length - i) * 0.05;
                return (
                    <ProjectItem
                        key={`p_${i}`}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
}
