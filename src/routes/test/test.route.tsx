import type { ReactNode } from "react"

type TestProps = {
  children?: ReactNode,
}

export default function Test({ children }: TestProps) {
  return (
    <>{ children }</>
  )
}