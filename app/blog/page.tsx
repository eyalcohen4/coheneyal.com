import { Posts, PostsList } from "@/components/posts"

const Blog = () => {
  return (
    <div className="w-full mt-8">
      <h1 className="font-bold text-3xl mb-5">My Blog</h1>
      <PostsList />
    </div>
  )
}
export default Blog
