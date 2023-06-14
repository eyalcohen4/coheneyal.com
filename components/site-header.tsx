import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

import { ProfilePicture } from "./profile-picture"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background px-8 md:px-0">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <Socials />
      </div>
    </header>
  )
}

function Socials() {
  return (
    <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-1">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Icons.twitter className="h-5 w-5 fill-current" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Icons.linkedin className="h-5 w-5 fill-current" />
            <span className="sr-only">LinkedIn</span>
          </div>
        </Link>
        <Link
          href={siteConfig.links.stackoverflow}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Stackoverflow />
            <span className="sr-only">Stackoverflow</span>
          </div>
        </Link>
      </nav>
    </div>
  )
}

function Stackoverflow() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 427 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="stack-overflow" fill="#FFFFFF" fill-rule="nonzero">
          <g id="Group" transform="translate(89.333333, 167.333333)">
            <polygon
              id="Path"
              points="5.472 149.232 226.016 196.08 235.253333 151.514667 14.7093333 104.325333"
            ></polygon>
            <polygon
              id="Path"
              points="0.586666667 207.514667 225.994667 207.514667 225.994667 252.890667 0.586666667 252.890667"
            ></polygon>
            <polygon
              id="Path"
              points="34.4 42.3946667 238.602667 138.949333 257.525333 97.4773333 53.216 0.666666667"
            ></polygon>
            <polygon
              id="Path"
              points="238.624 138.970667 238.602667 138.949333 238.581333 138.970667"
            ></polygon>
          </g>
          <polygon
            id="Path"
            points="0 329.152 0 512 405.162667 512 405.162667 329.152 360.085333 329.152 360.085333 466.282667 45.0773333 466.282667 45.0773333 329.152"
          ></polygon>
          <polygon
            id="Path"
            points="180.330667 108.010667 353.322667 254.634667 382.037333 219.434667 209.045333 72.8106667"
          ></polygon>
          <polygon
            id="Path"
            points="426.666667 183.189333 292.224 0 256.149333 27.4346667 390.592 210.624"
          ></polygon>
        </g>
      </g>
    </svg>
  )
}
