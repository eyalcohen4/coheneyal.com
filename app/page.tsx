import { Intro } from "@/components/intro"
import { Posts } from "@/components/posts"
import { Projects } from "@/components/projects"
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
