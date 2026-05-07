"use client";

import { useEffect, useRef } from "react";

import { cancelFrame, frame, useScroll, useTransform } from "framer-motion";
import ReactLenis, { type LenisRef } from "lenis/react";
import img1 from "@/assets/images/dashboard.png";
import img2 from "@/assets/images/food-details.png";
import img3 from "@/assets/images/food-details.png";
import img4 from "@/assets/images/image.png";
import img5 from "@/assets/images/orders-home-page.png";
import img6 from "@/assets/images/select-order.png";
import img7 from "@/assets/images/website-home.png";


import Row from "./row";

const imageArr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
];
const imageArr2 = [
    img2,
    img1,
    img3,
    img4,
    img7,
    img6,
    img5,
];


export default function ProjectGallery() {
    // Ref for Lenis instance
    const lenisRef = useRef<LenisRef | null>(null);
    // Ref for the DOM element to track scroll
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -400]);

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp;
            lenisRef.current?.lenis?.raf(time);
        }

        frame.update(update, true);

        return () => cancelFrame(update);
    }, []);

    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                syncTouch: true, // Enable touch smoothing
                touchMultiplier: 1.5, // Makes mobile scroll faster (experiment)
                duration: 1.2, // A bit slower but smoother
            }}
            ref={lenisRef}
        >
            <div
                ref={containerRef}
                className=" flex h-[180vh] w-full justify-center gap-6 overflow-hidden"
            >
                <Row images={imageArr} y={y4} />
                <Row images={imageArr2} y={y} />
                <Row images={imageArr} y={y2} />
                <Row images={imageArr2} y={y3} />
            </div>
        </ReactLenis>
    );
}
