import Link from "next/link"
import { Bell, Mail } from "lucide-react"
import { Balancer } from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Intro } from "@/components/intro"
import { Posts } from "@/components/posts"
import { ProfilePicture } from "@/components/profile-picture"
import { Projects } from "@/components/projects"
import { Subscribe } from "@/components/subscribe"
import { Talks } from "@/components/talks"
import { Work } from "@/components/work"

export default function IndexPage() {
  return (
    <section className="md:px-0 pb-8 pt-6 space-y-12">
      <Intro />
      <div className="flex flex-col gap-14">
        <Posts />
        <Projects />
        <Talks />
        <Work />
      </div>
    </section>
  )
}
