import Link from "next/link"
import { Post, allPosts } from "contentlayer/generated"
import dayjs from "dayjs"

export const Posts = () => {
  return (
    <div className="pt-8 flex flex-col gap-4">
      <h2 className="text-2xl tracking-tight font-semibold">Writing</h2>
      <PostsList />
    </div>
  )
}

export const PostsList = () => {
  return (
    <div className="space-y-4">
      {allPosts
        .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? 0 : 1))
        .map((post) => (
          <Link href={post.url} key={post.title} className="block">
            <p className="font-bold">{post.title}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {dayjs(post.date).format("DD MMM YYYY")}
            </p>
          </Link>
        ))}
    </div>
  )
}
