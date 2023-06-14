import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Badge } from "./ui/badge"

export const Work = () => {
  return (
    <div className="pt-8">
      <h2 className="text-xl tracking-tight font-semibold">Experience</h2>
      <div className="pt-4 space-y-8">
        {siteConfig.experience.map((company) => (
          <div key={company.name} className="block underline-offset-4">
            <p className="text-md">{company.title}</p>
            <div className="text-muted-foreground text-sm flex flex-col gap-1 w-auto">
              <Link className="underline" href={company.link || ""}>
                {company.name}
              </Link>
              <span>{company.date}</span>
            </div>
            <div className="max-w-xl">
              {company.tags?.map((tag) => (
                <Tag tag={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function getTechColor(tag: string) {
  const colors = {
    AngularJS: "rgba(204, 43,57, 0.8)",
    "Node.js": "#2f6b1c",
    Express: "#2f6b1c",
    "Next.js": "#fff",
    Apollo: "rgb(49, 28, 135)",
    Graphql: "#e10098",
    Prisma: "rgb(47, 133, 90)",
    React: "rgba(129, 216, 247)",
    "React Native": "rgba(129, 216, 247)",
    Redux: "rgba(85, 64, 132, 0.8)",
    Vue: "rgba(100, 181,135, 0.8)",
    Laravel: "rgba(236, 67, 50, 0.8)",
    MongoDB: "rgba(78, 166, 92, 0.8)",
    Redis: "rgba(203, 70, 55, 0.8)",
    SCSS: "rgb(193, 107, 152)",
    Docker: "rgb(70, 149, 228)",
    Mobx: "rgb(205, 97, 45)",
    MySQL: "rgb(48,115, 140)",
    Python: "rgb(69, 111, 154)",
    Kubernetes: "rgb(48, 106, 223)",
    Postgres: "#30628a",
    MemSQL: "rgb(172, 59, 246)",
    PHP: "rgb(172, 59, 246)",
    AWS: "rgb(218, 108, 45)",
    NestJS: "#E93337",
    Puppeteer: "#60cea1",
    TypeScript: "#4271b9",
    Glue: "#7e22ce",
    SageMaker: "#16a34a",
    NLP: "",
    "Deep Learning": "",
  }

  // @ts-ignore
  return colors[tag] || "#000"
}

const lighterColors = ["rgba(129, 216, 247)", "#fff", "#60cea1"]

function Tag({ tag }: { tag: string }) {
  const color = getTechColor(tag)
  return (
    <Badge
      className="px-2 mr-2 my-1 rounded w-auto text-xs"
      style={{
        backgroundColor: color,
        border: color === "#000" ? `1px solid #fff` : "none",
        color: lighterColors.includes(color) ? "black" : "white",
      }}
    >
      {tag}
    </Badge>
  )
}
