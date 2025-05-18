"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export interface LensProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  size?: number;
  borderRadius?: number;
  offset?: number;
  zoomLevel?: number;
}

export function Lens({
  className,
  children,
  size = 200,
  borderRadius = 100,
  offset = 0,
  zoomLevel = 1.5,
  ...props
}: LensProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {children}
      <div
        className={cn(
          "pointer-events-none absolute z-10 overflow-hidden rounded-full border border-black/10 dark:border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-100",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        style={{
          width: size,
          height: size,
          borderRadius: borderRadius,
          transform: `translate(${position.x - size / 2}px, ${
            position.y - size / 2
          }px)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${zoomLevel}) translate(${
              -position.x + size / (2 * zoomLevel) + offset
            }px, ${-position.y + size / (2 * zoomLevel) + offset}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
} 