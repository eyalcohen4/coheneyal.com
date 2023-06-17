import Link from "next/link"
import { Balancer } from "react-wrap-balancer"

import { ProfilePicture } from "./profile-picture"
import { Subscribe } from "./subscribe"

export const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-normal">
      <div className="flex gap-4 w-full md:w-24 h-24 items-center justify-start md:justify-center">
        <Link href="/" className="items-center space-x-2 flex gap-2">
          <div className="rounded-full relative">
            <ProfilePicture />
          </div>
        </Link>
      </div>
      <div className="flex flex-col text-center md:text-left w-full">
        <h2 className="mb-0 text-xl md:text-2xl font-semibold tracking-tight transition-colors text-left">
          Hey, I&apos;m Eyal 👋
        </h2>

        <p className="md:block mb-4 text-sm md:text-lg text-muted-foreground text-left w-full">
          <Balancer>Building software and writing about it.</Balancer>
        </p>
        <div className="max-w-md">
          <Subscribe />
        </div>
      </div>
    </div>
  )
}
