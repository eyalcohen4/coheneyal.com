import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import { Balancer } from "react-wrap-balancer"

import { siteConfig } from "@/config/site"

import { Section, SectionContent, SectionList, SectionTitle } from "./section"

export const Talks = () => {
  return (
    <Section>
      <SectionTitle>Talks</SectionTitle>
      <SectionContent>
        <SectionList>
          {siteConfig.talks.map((talk) => (
            <Link
              href={talk.href}
              key={talk.title}
              className="flex gap-4 flex-col w-full"
            >
              <div>
                <p className="font-bold">{talk.title}</p>
                <p className="text-sm text-muted-foreground">
                  <Balancer>{talk.description}</Balancer>
                </p>
              </div>
              <div className="w-48 relative flex items-center justify-center">
                <div
                  className="absolute top-1/2 left-1/2 pl-1 text-black bg-white h-10 w-10 rounded-full flex items-center justify-center"
                  style={{
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Play />
                </div>
                <Image
                  src={talk.image}
                  alt={talk.title}
                  className="rounded-md opacity-50"
                  width={1600}
                  height={840}
                />
              </div>
            </Link>
          ))}
        </SectionList>
      </SectionContent>
    </Section>
  )
}
