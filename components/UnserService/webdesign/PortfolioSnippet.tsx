import Image from "next/image"
import React from 'react'

const PortfolioSnippet = () => {
  return (
    <section className="grid grid-cols-2 justify-items-center py-16 px-72">
        <Image src="/portfoliosnippet.png" alt="website" width={600} height={400}/>
        <Image src="/portfoliosnippet.png" alt="website" width={600} height={400}/>
        <Image src="/portfoliosnippet.png" alt="website" width={600} height={400}/>
        <Image src="/portfoliosnippet.png" alt="website" width={600} height={400}/>
        <Image src="/portfoliosnippet.png" alt="website" width={600} height={400}/>
        <Image src="/portfoliosnippet.png" alt="website" width={600} height={400}/>
    </section>
  )
}

export default PortfolioSnippet