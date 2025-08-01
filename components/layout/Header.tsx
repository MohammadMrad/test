import Link from "next/link"
import ActiveLink from "../ActiveLink"

interface Props {
  variant: "default" | "home"
}

const Header = ({ variant }: Props) => {
  return (
    <header
      className={`absolute w-full text-neutral-900 ${
        variant === "default"
          ? "w-full top-0 bg-accent-beige rounded-b-4xl"
          : "container top-10"
      }`}
    >
      <div
        className={`p-6 mx-auto ${
          variant === "default"
            ? "container mx-auto w-full"
            : "max-w-[97%] bg-white rounded-4xl"
        }`}
      >
        <nav className="flex items-center">
          <Link href="/">
            <div className="flex items-center gap-6">
              <div className="size-24 flex items-center justify-center text-3xl bg-[#D9D9D9] rounded-2xl">
                Logo
              </div>
              <div className="space-y-1">
                <h1 className="text-4xl font-bold">نام وبسایت</h1>
                <h2 className="text-2xl tracking-[0.08em] text-accent-orange">
                  name website
                </h2>
              </div>
            </div>
          </Link>

          <div className="h-24 w-0.5 bg-neutral-700/24 ml-16 mr-8"></div>

          <ul className="flex items-center justify-between gap-44">
            <li>
              <ActiveLink href="/services">خدمات ما </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/portfolio">نمونه کارها</ActiveLink>
            </li>

            <li>
              <ActiveLink href="/contact">تماس با ما</ActiveLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
