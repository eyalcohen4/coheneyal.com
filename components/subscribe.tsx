import Link from "next/link"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Subscribe() {
  return (
    <Button
      asChild
      size="sm"
      type="button"
      className="h-8 flex gap-2 items-center justify-center w-auto"
    >
      <Link
        href="https://twitter.com/eyalyoli"
        target="_blank"
        rel="noopener noreferrer"
        className="h-8 flex gap-2 items-center justify-center w-auto decoration-none"
        style={{
          textDecoration: "none",
        }}
      >
        <Mail className="h-4 w-4" />
        Subscribe to My Newsletter
      </Link>
    </Button>
  )
}
