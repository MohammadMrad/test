"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import SectionTitle from "./ui/SectionTitle"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import WebCart from "./WebCart"

const sliderItems = [
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
]

const WebPortfolioSection = () => {
  return (
    <div className="mt-16">
      <SectionTitle>جدیدترین نمونه کارهای طراحی سایت</SectionTitle>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={true}
        pagination
        spaceBetween={50}
        slidesPerView={3}
        className="relative !pb-12"
      >
        {sliderItems.map((cart) => (
          <SwiperSlide key={cart.href}>
            <WebCart cart={cart} />
          </SwiperSlide>
        ))}

        <button className="group flex items-center gap-2 py-2.25 px-9 mx-auto mt-9 text-xl font-bold bg-accent-beige hover:bg-primary hover:text-white rounded-xl transition">
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16C6.54545 16 1.88727 12.6827 0 8C1.88727 3.31733 6.54545 0 12 0C17.4545 0 22.1127 3.31733 24 8C22.1127 12.6827 17.4545 16 12 16ZM12 2.66667C8.98909 2.66667 6.54545 5.056 6.54545 8C6.54545 10.944 8.98909 13.3333 12 13.3333C15.0109 13.3333 17.4545 10.944 17.4545 8C17.4545 5.056 15.0109 2.66667 12 2.66667ZM12 11.2C10.1891 11.2 8.72727 9.77067 8.72727 8C8.72727 6.22933 10.1891 4.8 12 4.8C13.8109 4.8 15.2727 6.22933 15.2727 8C15.2727 9.77067 13.8109 11.2 12 11.2Z"
              fill="#4F4F4F"
              className="group-hover:fill-white transition"
            />
          </svg>
          <span>مشاهده همه</span>
        </button>
      </Swiper>
    </div>
  )
}

export default WebPortfolioSection
