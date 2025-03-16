"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

type FadeInProps = {
  children: ReactNode; // 子要素を受け取る
  direction?: "left" | "right" | "up" | "bottom"; // アニメーション方向
};

const FadeIn: React.FC<FadeInProps> = ({ children, direction = "left" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (ref.current) {
            const elemPos = ref.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elemPos < windowHeight - 150) {
            setIsVisible(true);
            }
        }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={ref} className={`fadein fadein-${direction} ${isVisible ? "scrollin" : ""}`}>
        {children}
        </div>
    );
};

export default FadeIn;
