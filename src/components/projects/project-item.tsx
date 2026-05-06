
import { useRef } from "react";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import PrespectiveText from "../menu/PrespectiveText";

// Define the props interface
interface CardProps {
    i: number;
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
}

const ProjectItem = ({
    i,
    title,
    description,
    src,
    url,
    color,
    progress,
    range,
    targetScale,
}: CardProps) => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="sticky top-0 flex h-screen items-center justify-center"
        >
            <motion.div
                style={{
                    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), ${color}`,
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="text-background relative -top-[25%] flex h-[90vh] min-h-[500px] w-full origin-top flex-col rounded-[25px] p-8 md:h-[80vh] md:p-[50px] lg:w-[80%] xl:max-w-[1200px]"
            >
                <h2 className="m-0 text-center text-[28px]">{title}</h2>
                <div className="mt-[50px] flex h-full flex-col-reverse md:flex-row md:gap-[50px]">
                    <div className="relative top-3 w-full md:top-[10%] md:w-[40%]">
                        <p className="text-[16px] [&:first-letter]:font-['Title'] [&:first-letter]:text-[28px]">
                            {description}
                        </p>
                        <div className="flex gap-4 py-6">
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-primary flex w-[150px] flex-none cursor-pointer items-center justify-between rounded-full p-1"
                            >
                                <PrespectiveText label="Live link" />
                            </a>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex w-[150px] flex-none cursor-pointer items-center justify-between rounded-full p-1"
                            >
                                <PrespectiveText label="Github link" />

                                <div className="aspect-square h-full rounded-full p-3">
                                    <FaArrowRight className="duration-200 group-hover:-rotate-45" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[220px] w-full overflow-hidden rounded-[25px] md:w-[60%]">
                        <motion.div
                            className="h-full w-full"
                            style={{ scale: imageScale }}
                        >
                            <img
                                src={`${src}`}
                                alt="image"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectItem;
