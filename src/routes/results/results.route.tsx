import type { ReactNode } from "react";

type ResultsProps = {
  children?: ReactNode,
}

export default function Results({ children }: ResultsProps) {
  return (
    <>{ children }</>
  )
}