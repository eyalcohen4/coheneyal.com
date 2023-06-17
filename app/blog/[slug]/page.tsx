import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Mdx } from "components/mdx"
import { allPosts } from "contentlayer/generated"
import dayjs from "dayjs"
import Balancer from "react-wrap-balancer"

import { Subscribe } from "@/components/subscribe"

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => {
    const slug = post._raw.flattenedPath
    return slug === params.slug
  })
  if (!post) {
    return
  }

  const { title, date, description, image } = post
  const slug = post._raw.flattenedPath
  const ogImage = image
    ? `https://coheneyal.com/images/${image}`
    : `https://coheneyal.com/api/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `https://coheneyal.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="pt-8 md:py-8 md:px-0 w-full prose dark:prose-invert">
      <div>
        <h1 className="font-bold text-3xl">
          <Balancer>{post.title}</Balancer>
        </h1>
        <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 text-muted-foreground">
          {dayjs(post.date).format("MMM DD, YYYY")}
        </div>
        <Image
          width={1600}
          height={840}
          alt={`A picture describing the ${post.title}`}
          className="rounded-lg"
          src={`/images/${post.image}`}
        />
      </div>
      <Mdx code={post.body.code} />
      <div className="mt-16">
        <br />
        <Subscribe />
      </div>
    </section>
  )
}
