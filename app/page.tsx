import Link from "next/link"
import { Bell, Mail } from "lucide-react"
import { Balancer } from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Posts } from "@/components/posts"
import { ProfilePicture } from "@/components/profile-picture"
import { Projects } from "@/components/projects"
import { Subscribe } from "@/components/subscribe"
import { Work } from "@/components/work"

export default function IndexPage() {
  return (
    <section className="px-8 md:px-0 pb-8 pt-6 space-y-4">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-normal">
        <div className="flex gap-4 w-full md:w-24 h-24 items-center justify-start md:justify-center">
          <Link href="/" className="items-center space-x-2 flex gap-2">
            <div className="rounded-full relative">
              <ProfilePicture />
            </div>
          </Link>
        </div>
        <div className="flex flex-col text-center md:text-left w-full">
          <h2 className="mb-0 text-2xl font-semibold tracking-tight transition-colors text-left">
            Hey, I&apos;m Eyal 👋
          </h2>
          <p className="block md:hidden mb-4 text-lg text-muted-foreground text-left w-full">
            <Balancer>Building and writing.</Balancer>
          </p>
          <p className="hidden md:block mb-4 text-lg text-muted-foreground text-left w-full">
            <Balancer className="hidden md:block">
              Building software and writing about it.
            </Balancer>
          </p>
          <Subscribe />
        </div>
      </div>
      <Posts />
      <Projects />
      <Work />
    </section>
  )
}
