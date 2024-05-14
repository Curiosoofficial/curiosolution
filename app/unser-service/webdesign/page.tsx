import Footer from "@/components/Footer"
import NewsletterSection from "@/components/HomePage/NewsletterSection"
import Concept from "@/components/UnserService/webdesign/Concept"
import Development from "@/components/UnserService/webdesign/Development"
import Maintenance from "@/components/UnserService/webdesign/Maintenance"
import PortfolioSnippet from "@/components/UnserService/webdesign/PortfolioSnippet"
import PriceDefinition from "@/components/UnserService/webdesign/PriceDefinition"
import PriceSection from "@/components/UnserService/webdesign/PriceSection"
import TitleSection from "@/components/UnserService/webdesign/TitleSection"
import WhatItNeeds from "@/components/UnserService/webdesign/WhatItNeeds"
import WhyUs from "@/components/UnserService/webdesign/WhyUs"
import { News_Cycle } from "next/font/google"
import React from 'react'


const page = () => {
  return (
    <main>
        <TitleSection />
        <PortfolioSnippet />
        <Concept />
        <WhatItNeeds />
        <Maintenance />
        <PriceDefinition />
        <WhyUs/>
        <PriceSection />
        <Development />
        <NewsletterSection />
        <Footer />
    </main>
  )
}

export default page