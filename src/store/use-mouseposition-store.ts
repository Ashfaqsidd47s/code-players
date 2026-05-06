import { create } from "zustand";

// Flag to ensure event listener is added only once
let isListenerInitialized = false;

interface MouseState {
    x: number | null;
    y: number | null;
    isHovered: boolean;
    setIsHovered: (hovered: boolean) => void;
    initialize: () => void;
    cleanup: () => void;
}

const useMouseStore = create<MouseState>((set) => {
    const updateMousePosition = (e: MouseEvent) => {
        set({ x: e.clientX, y: e.clientY });
    };

    return {
        x: null,
        y: null,
        isHovered: false,
        setIsHovered: (hovered: boolean) => set({ isHovered: hovered }),
        initialize: () => {
            if (!isListenerInitialized) {
                window.addEventListener("mousemove", updateMousePosition);
                isListenerInitialized = true;
            }
        },
        cleanup: () => {
            if (isListenerInitialized) {
                window.removeEventListener("mousemove", updateMousePosition);
                isListenerInitialized = false;
            }
        },
    };
});

export default useMouseStore;
