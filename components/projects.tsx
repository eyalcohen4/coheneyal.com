import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Section, SectionContent, SectionList, SectionTitle } from "./section"

export const Projects = () => {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <SectionContent>
        <SectionList>
          {siteConfig.projects.map((project) => (
            <Link href={project.href} key={project.title} className="block">
              <p className="font-bold text-sm md:text-md">{project.title}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {project.description}
              </p>
            </Link>
          ))}
        </SectionList>
      </SectionContent>
    </Section>
  )
}
