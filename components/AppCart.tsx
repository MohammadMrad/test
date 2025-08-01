import Image from "next/image"

interface Props {
  cart: {
    title: string
    href: string
    image: string
  }
}

const AppCart = ({ cart: { title, href, image } }: Props) => {
  return (
    <div className="group">
      <div className="p-5 space-y-4 group-bg-accent-beige/50 group-hover:bg-secondary/50 border border-transparent group-hover:border-primary transition rounded-2xl">
        <div className="relative aspect-[2/3.5]">
          <Image
            src={image}
            fill
            alt={title}
            className="object-cover rounded-2xl"
          />
        </div>
        <h3 className="text-center text-xl font-bold group-hover:text-primary transition">
          {title}
        </h3>
      </div>

      <div className="px-5">
        <button className="w-full flex items-center justify-center gap-2 py-2.25 mt-3.5 text-xl font-bold text-center bg-accent-beige group-hover:bg-primary group-hover:text-white rounded-xl transition">
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
          <span>مشاهده</span>
        </button>
      </div>
    </div>
  )
}

export default AppCart
