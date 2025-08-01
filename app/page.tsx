import AppPortfolioSection from "@/components/AppPortfolioSection"
import HeroSection from "@/components/HeroSection"
import Layout from "@/components/layout/Layout"
import WebPortfolioSection from "@/components/WebPortfolioSection"

import "swiper/css"

const HomePage = () => {
  return (
    <>
      <Layout headerVariant="home">
        <HeroSection />

        <WebPortfolioSection />

        <AppPortfolioSection />
      </Layout>
    </>
  )
}

export default HomePage
