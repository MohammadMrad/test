import type { Metadata } from "next"
import "./globals.css"
import { payda, paydaFaNum } from "./fonts"

export const metadata: Metadata = {
  title: "weba",
  description: "next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${payda.variable} ${paydaFaNum.variable} antialiased`}
    >
      <body className="font-text text-neutral-700">{children}</body>
    </html>
  )
}
