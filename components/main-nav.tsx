"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex w-full md:flex">
      {items?.length ? (
        <nav className="w-full gap-4 md:gap-6 flex md:justify-start">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex flex-col !no-underline text-sm md:text-md",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  <span
                    className={cn(
                      `font-medium ${
                        item.href === pathname ? "underline" : ""
                      } underline-offset-4 hover:underline`
                    )}
                  >
                    {item.title}
                  </span>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
