"use client";


import type { IconType } from "react-icons/lib";
import { MdArrowOutward } from "react-icons/md";

interface AnimatedTextLinkProps {
    href: string;
    icon: IconType;
    primaryText: string;
    secondaryText: string;
    className?: string;
}

export function AnimatedTextLink({
    href,
    icon: Icon,
    primaryText,
    secondaryText,
    className = "",
}: AnimatedTextLinkProps) {
    return (
        <a
            href={href}
            className={`group text-muted-foreground hover:text-primary flex w-full items-center gap-3 rounded-sm transition-colors duration-200 ${className}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon className="h-4 w-4" />
            <div className="relative h-5 flex-1 overflow-hidden">
                <span className="absolute inset-0 flex items-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {primaryText}
                </span>
                <span className="absolute inset-0 flex translate-y-full items-center transition-transform duration-300 ease-out group-hover:translate-y-0">
                    {secondaryText}
                </span>
            </div>
            <MdArrowOutward className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        </a>
    );
}
