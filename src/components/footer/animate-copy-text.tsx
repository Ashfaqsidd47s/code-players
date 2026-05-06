"use client";

import type React from "react";
import { useState } from "react";

import type { LucideIcon } from "lucide-react";
import { Check, Copy } from "lucide-react";

interface AnimatedCopyTextProps {
    text: string;
    icon: LucideIcon;
    className?: string;
}

export function AnimatedCopyText({
    text,
    icon: Icon,
    className = "",
}: AnimatedCopyTextProps) {
    const [isCopied, setIsCopied] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleCopy = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div
            className={`group text-muted-foreground hover:text-primary relative flex cursor-pointer items-center gap-3 transition-colors duration-200 ${className}`}
        >
            <Icon className="h-4 w-4" />

            {/* Animated text container */}
            <div className="relative h-5 flex-1 overflow-hidden">
                <span className="absolute inset-0 flex items-center transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {text}
                </span>
                <span className="absolute inset-0 flex translate-y-full items-center transition-transform duration-300 ease-out group-hover:translate-y-0">
                    {text}
                </span>
            </div>

            {/* Copy button that slides in from right */}
            <div className="relative">
                <button
                    onClick={handleCopy}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className={`bg-background hover:bg-muted hover:border-muted-foreground/20 absolute top-1/2 right-0 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md border transition-all duration-300 ease-out ${isCopied ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"} `}
                >
                    {isCopied ? (
                        <Check className="h-3 w-3 text-green-600" />
                    ) : (
                        <Copy className="h-3 w-3" />
                    )}
                </button>

                {/* Copy tooltip */}
                <div
                    className={`bg-popover text-popover-foreground absolute right-0 bottom-full z-10 mb-2 rounded-md border px-2 py-1 text-xs whitespace-nowrap shadow-md transition-all duration-200 ${showTooltip && !isCopied ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"} `}
                >
                    Copy to clipboard
                    <div className="border-t-popover absolute top-full right-2 h-0 w-0 border-t-2 border-r-2 border-l-2 border-transparent"></div>
                </div>

                {/* Copied feedback tooltip */}
                <div
                    className={`absolute right-0 bottom-full z-10 mb-2 rounded-md border border-green-200 bg-green-100 px-2 py-1 text-xs whitespace-nowrap text-green-800 shadow-md transition-all duration-200 ${isCopied ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"} `}
                >
                    Copied!
                    <div className="absolute top-full right-2 h-0 w-0 border-t-2 border-r-2 border-l-2 border-transparent border-t-green-200"></div>
                </div>
            </div>
        </div>
    );
}
