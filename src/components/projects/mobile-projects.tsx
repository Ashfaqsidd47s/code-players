
import { useState } from "react";

import { ArrowRight, ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { projectList } from "@/constants/project-data";

export default function MobileProjects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                        Featured Projects
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                        Discover my latest work—innovative solutions that blend
                        creativity with functionality
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {projectList.map((project, index) => (
                        <Card
                            key={index}
                            className="group relative cursor-pointer overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => window.open(project.url, "_blank")}
                        >
                            <CardContent className="p-0">
                                {/* img Container */}
                                <h3 className="p-3 px-4 text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-700 sm:text-3xl">
                                    {project.title}
                                </h3>
                                <div className="relative m-4 h-64 overflow-hidden rounded-xl sm:h-72 lg:h-80">
                                    <img
                                        src={project.src || "/placeholder.svg"}
                                        alt={project.title}
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Color Overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                                        style={{
                                            backgroundColor: project.color,
                                        }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Project Link Icon */}
                                    <div className="absolute top-4 right-4 translate-x-2 transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                        <div
                                            className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg"
                                            style={{
                                                backgroundColor: project.color,
                                            }}
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8">
                                    <div className="mb-4 flex items-start justify-between">
                                        <div
                                            className="h-12 w-1 rounded-full transition-all duration-500"
                                            style={{
                                                backgroundColor: project.color,
                                                transform:
                                                    hoveredIndex === index
                                                        ? "scaleY(1.5)"
                                                        : "scaleY(1)",
                                            }}
                                        />
                                    </div>

                                    <p className="mb-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                                        {project.description}
                                    </p>

                                    {/* Call to Action */}
                                    <div className="flex">
                                        <span style={{ color: project.color }}>
                                            View Project
                                        </span>
                                        <ArrowRight
                                            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                            style={{ color: project.color }}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="mb-6 text-lg text-gray-600">
                        Interested in working together?
                    </p>
                    <button className="rounded-full bg-gray-900 px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-gray-800 hover:shadow-xl">
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
}
