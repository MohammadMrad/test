import localFont from "next/font/local"

const payda = localFont({
  src: [
    {
      path: "../public/fonts/PeydaWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-payda",
})

const paydaFaNum = localFont({
  src: [
    {
      path: "../public/fonts/PeydaWebFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PeydaWebFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-payda-fanum",
})

export { payda, paydaFaNum }
