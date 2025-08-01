import AppCart from "@/components/AppCart"
import Layout from "@/components/layout/Layout"
import WebCart from "@/components/WebCart"
import { notFound } from "next/navigation"
import React from "react"

const data = {
  app: [
    {
      title: "اپلیکیشن کدیاد",
      href: "/",
      image: "/images/app-project.png",
    },
    {
      title: "اپلیکیشن کدیاد",
      href: "/",
      image: "/images/app-project.png",
    },
    {
      title: "اپلیکیشن کدیاد",
      href: "/",
      image: "/images/app-project.png",
    },
    {
      title: "اپلیکیشن کدیاد",
      href: "/",
      image: "/images/app-project.png",
    },
    {
      title: "اپلیکیشن کدیاد",
      href: "/",
      image: "/images/app-project.png",
    },
    {
      title: "اپلیکیشن کدیاد",
      href: "/",
      image: "/images/app-project.png",
    },
    {
      title: "اپلیکیشن کدیاد",
      href: "/",
      image: "/images/app-project.png",
    },
  ],
  web: [
    {
      title: "طراحی سایت کدیاد",
      href: "/",
      image: "/images/web-project.png",
    },
    {
      title: "طراحی سایت کدیاد",
      href: "/",
      image: "/images/web-project.png",
    },
    {
      title: "طراحی سایت کدیاد",
      href: "/",
      image: "/images/web-project.png",
    },
    {
      title: "طراحی سایت کدیاد",
      href: "/",
      image: "/images/web-project.png",
    },
    {
      title: "طراحی سایت کدیاد",
      href: "/",
      image: "/images/web-project.png",
    },
  ],
}

interface Props {
  params: { type: string }
}

const PortfolioTypePage = ({ params }: Props) => {
  const { type } = params

  if (type !== "web" && type !== "app") {
    notFound()
  }

  return (
    <Layout>
      {type === "web" ? (
        <div className="grid grid-cols-2 gap-12">
          {data["web"].map((item) => (
            <WebCart cart={item} key={item.href} />
          ))}
        </div>
      ) : type === "app" ? (
        <div className="grid grid-cols-4 gap-20">
          {data["app"].map((item) => (
            <AppCart cart={item} key={item.href} />
          ))}
        </div>
      ) : (
        ""
      )}
    </Layout>
  )
}

export default PortfolioTypePage
