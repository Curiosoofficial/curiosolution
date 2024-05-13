import Footer from "@/components/Footer"
import PortfolioSnippet from "@/components/UnserService/webdesign/PortfolioSnippet"
import TitleSection from "@/components/UnserService/webdesign/TitleSection"
import React from 'react'


const page = () => {
  return (
    <main>
        <TitleSection />
        <PortfolioSnippet />
        <Footer />
    </main>
  )
}

export default page