import React, { ReactNode } from "react"
import Header from "./Header"

interface Props {
  children: ReactNode
  headerVariant?: "default" | "home"
}

const Layout = ({ children, headerVariant = "default" }: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header variant={headerVariant} />
      <main
        className={`container mx-auto flex-grow ${
          headerVariant === "default" && "mt-56"
        }`}
      >
        {children}
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default Layout
