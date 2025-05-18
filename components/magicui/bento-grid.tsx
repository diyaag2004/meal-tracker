import { cn } from "@/lib/utils";
import React from "react";

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function BentoGrid({
  className,
  children,
  ...props
}: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface BentoGridItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  children,
  colSpan = 1,
  rowSpan = 1,
  ...props
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "row-span-1 col-span-1 group/bento flex flex-col justify-between space-y-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-black/20 p-6 shadow-sm transition duration-200 hover:shadow-lg hover:shadow-black/[0.1] dark:hover:shadow-white/[0.05]",
        className,
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "md:col-span-3",
        rowSpan === 2 && "md:row-span-2",
        rowSpan === 3 && "md:row-span-3"
      )}
      {...props}
    >
      {header && <div className="w-full">{header}</div>}
      <div className="space-y-2">
        {icon && <div className="p-2">{icon}</div>}
        {title && (
          <h3 className="text-xl font-bold tracking-tighter group-hover/bento:text-primary">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
} 