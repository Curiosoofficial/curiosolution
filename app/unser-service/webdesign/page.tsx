import Footer from "@/components/Footer"
import Concept from "@/components/UnserService/webdesign/Concept"
import Maintenance from "@/components/UnserService/webdesign/Maintenance"
import PortfolioSnippet from "@/components/UnserService/webdesign/PortfolioSnippet"
import TitleSection from "@/components/UnserService/webdesign/TitleSection"
import WhatItNeeds from "@/components/UnserService/webdesign/WhatItNeeds"
import React from 'react'


const page = () => {
  return (
    <main>
        <TitleSection />
        <PortfolioSnippet />
        <Concept />
        <WhatItNeeds />
        <Maintenance />
        
        <Footer />
    </main>
  )
}

export default page