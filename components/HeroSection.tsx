import Image from "next/image"
import React from "react"

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between bg-accent-beige pt-44 py-8 px-8 rounded-b-4xl">
      <div className="p-12">
        <p className="text-4xl">نقطه شروع کسب و کار شما</p>
        <h1 className="text-4xl font-bold mt-4">
          خدمات طراحی <span className="text-primary">اسم سایت</span>
        </h1>
        <p className="text-3xl mt-7">
          از ایده تا اجرا اونم با بهترین کیفیت روی ما حساب کن :)
        </p>

        <button className="py-6 px-12 mt-6 text-4xl font-bold bg-primary text-neutral-50 rounded-b-4xl rounded-tl-4xl rounded-sm">
          درخواست مشاوره
        </button>
      </div>
      <div className="relative size-[500px] m-12">
        <Image src="/images/hero.svg" fill alt="" className="object-cover" />
      </div>
    </section>
  )
}

export default HeroSection
