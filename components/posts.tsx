import Link from "next/link"
import { Post, allPosts } from "contentlayer/generated"
import dayjs from "dayjs"

import { Section, SectionContent, SectionList, SectionTitle } from "./section"

export const Posts = () => {
  return (
    <Section>
      <SectionTitle>Writing</SectionTitle>
      <SectionContent>
        <SectionList>
          <PostsList />
        </SectionList>
      </SectionContent>
    </Section>
  )
}

export const PostsList = () => {
  const sorted = allPosts.sort((a, b) =>
    b.date < a.date ? -1 : b.date > a.date ? 1 : 0
  )
  return (
    <div className="space-y-4">
      {sorted.map((post) => (
        <Link href={post.url} key={post.title} className="block">
          <p className="font-bold text-sm md:text-md">{post.title}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {dayjs(post.date).format("DD MMM YYYY")}
          </p>
        </Link>
      ))}
    </div>
  )
}
