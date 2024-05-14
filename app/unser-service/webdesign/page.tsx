import Footer from "@/components/Footer"
import Concept from "@/components/UnserService/webdesign/Concept"
import Maintenance from "@/components/UnserService/webdesign/Maintenance"
import PortfolioSnippet from "@/components/UnserService/webdesign/PortfolioSnippet"
import PriceDefinition from "@/components/UnserService/webdesign/PriceDefinition"
import PriceSection from "@/components/UnserService/webdesign/PriceSection"
import TitleSection from "@/components/UnserService/webdesign/TitleSection"
import WhatItNeeds from "@/components/UnserService/webdesign/WhatItNeeds"
import WhyUs from "@/components/UnserService/webdesign/WhyUs"
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
        
        <Footer />
    </main>
  )
}

export default page