import Link from "next/link"

import { siteConfig } from "@/config/site"

export const Talks = () => {
  return (
    <div className="pt-8">
      <h2 className="text-2xl tracking-tight font-semibold">Talks</h2>
      <div className="pt-4 space-y-4">
        {siteConfig.talks.map((talk) => (
          <Link href={talk.href} key={talk.title} className="block">
            <p className="font-bold">{talk.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
