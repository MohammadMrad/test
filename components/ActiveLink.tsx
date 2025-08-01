"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

interface Props {
  children: string
  href: string
}

const ActiveLink = ({ children, href }: Props) => {
  const pathName = usePathname()

  console.log(pathName)

  const isActive = pathName.startsWith(href)

  return (
    <Link
      href={href}
      className={`text-3xl font-bold hover:text-primary transition ${
        isActive && "text-primary"
      }`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
