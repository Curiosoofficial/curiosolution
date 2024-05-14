import PriceCard from "@/components/ui/PriceCard"
import React from 'react'
import { FaPlane } from "react-icons/fa"


const PriceSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
        <h2 className="h2-bold font-radwave">Preise</h2>
        <p className="text-text-secondary text-center">Egal, ob Sie eine einfache Website für Ihr Startup benötigen oder eine umfassende Online-Präsenz für Ihr etabliertes Unternehmen aufbauen möchten - wir haben das passende Abonnement für Sie. Mit transparenten monatlichen Preisen und einem breiten Spektrum an Funktionen bieten wir Ihnen die Flexibilität und Zuverlässigkeit, die Sie für Ihren digitalen Erfolg benötigen. Wählen Sie einfach das Abonnement, das am besten zu Ihren Anforderungen passt, und lassen Sie uns den Rest erledigen.</p>
        <div className="pt-12">
            <PriceCard 
                icon={<FaPlane/>}
                packageTitle="Basic"
                price="€ 29"
                salePrice="€ 19"
            />
        </div>
    </section>
  )
}

export default PriceSection