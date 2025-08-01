import React from "react"

type Props = {
  children: string
  className?: string
}

const SectionTitle = ({ children, className }: Props) => {
  return (
    <div className={`flex items-center text-neutral-900 mb-7 ${className || ""}`}>
      <hr className="flex-grow border border-neutral-700/40" />
      <h2 className="px-4 text-4xl font-bold whitespace-nowrap">{children}</h2>
      <hr className="flex-grow border border-neutral-700/40" />
    </div>
  )
}

export default SectionTitle
