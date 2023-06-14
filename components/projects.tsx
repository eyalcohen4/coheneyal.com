import Link from "next/link"

import { siteConfig } from "@/config/site"

export const Projects = () => {
  return (
    <div className="pt-8">
      <h2 className="text-2xl tracking-tight font-semibold">Building</h2>
      <div className="pt-4 space-y-4">
        {siteConfig.projects.map((project) => (
          <Link href={project.href} key={project.title} className="block">
            <p className="font-bold">{project.title}</p>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
