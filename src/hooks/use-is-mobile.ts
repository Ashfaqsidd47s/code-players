import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint: number = 768) {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

        const handler = () => setIsMobile(mediaQuery.matches);

        handler(); // initial check
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, [breakpoint]);

    return isMobile;
}
