import Footer from "@/components/Footer"
import Concept from "@/components/UnserService/webdesign/Concept"
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
        
        <Footer />
    </main>
  )
}

export default page