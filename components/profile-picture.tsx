"use client"

import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar"

export const ProfilePicture = () => {
  return (
    <Avatar>
      <AvatarImage src="/me.png" alt="Eyal Cohen" />
      <AvatarFallback>EC</AvatarFallback>
    </Avatar>
  )
}
