import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  icon?: ReactNode
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
        {icon}
        {title}
      </h1>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}
