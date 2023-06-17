import { ReactNode } from "react"

export const Section = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-8">{children}</div>
}

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-xl md:text-3xl tracking-tight font-semibold">
      {" "}
      {children}
    </h2>
  )
}

export const SectionContent = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>
}

export const SectionList = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>
}
