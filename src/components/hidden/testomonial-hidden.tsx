"use client";

import useMouseStore from "@/store/use-mouseposition-store";

const testimonials = [
    {
        id: 1,
        quote: "Minh is seriously the best and he never complains",
        name: "Michael Glass",
        designation: "Group Design Director",
        company: "Fantasy Interactive",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 2,
        quote: "Working with this team has been an absolute game-changer for our business",
        name: "Sarah Johnson",
        designation: "Creative Director",
        company: "Digital Studios",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 3,
        quote: "The attention to detail and creative vision is unmatched in the industry",
        name: "David Chen",
        designation: "Brand Manager",
        company: "Innovation Labs",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 4,
        quote: "Exceptional work quality and always delivers beyond expectations",
        name: "Emily Rodriguez",
        designation: "Marketing Lead",
        company: "Growth Co",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        id: 5,
        quote: "Professional, reliable, and incredibly talented. Highly recommended",
        name: "Alex Thompson",
        designation: "Product Director",
        company: "Tech Ventures",
        image: "/placeholder.svg?height=80&width=80",
    },
];
export default function TestomonialsHidden() {
    const { setIsHovered } = useMouseStore();
    return (
        <section>
            <div className="flex w-full items-start gap-20">
                <div className="w-full">
                    {testimonials.map((itme) => (
                        <div key={itme.id}>
                            <p
                                className="py-12 text-5xl"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {itme.quote}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="sticky top-0 flex h-screen w-full items-center justify-center">
                    <div className="bg-primary/10 aspect-square w-full max-w-[400px]"></div>
                </div>
            </div>
        </section>
    );
}
