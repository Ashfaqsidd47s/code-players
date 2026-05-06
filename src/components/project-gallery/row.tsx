

import { MotionValue, motion } from "framer-motion";

type RowProp = {
    images: string[];
    y: MotionValue<number>;
    className?: string;
};

export default function Row({ images, y, className = "" }: RowProp) {
    return (
        <motion.div
            style={{ y: y }}
            className={` ${className} flex flex-col items-center gap-6`}
        >
            {images.map((img, ind) => (
                <div
                    key={ind}
                    className="relative max-h-[300px] min-h-[280px] w-1/4 min-w-[450px] flex-none overflow-hidden rounded-2xl bg-amber-50 brightness-75 grayscale-10 filter transition-all duration-500 ease-in-out"
                >
                    <motion.div
                        initial={{
                            filter: "grayscale(50%) brightness(75%) ",
                        }}
                        whileHover={{
                            filter: " grayscale(10%) brightness(100%) ",
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative h-full w-full"
                    >
                        <img
                            src={img}
                            alt={`Gallery image ${ind + 1}`}
                            className="transition-all object-cover duration-300 ease-in-out"
                        />
                    </motion.div>
                </div>
            ))}
        </motion.div>
    );
}
