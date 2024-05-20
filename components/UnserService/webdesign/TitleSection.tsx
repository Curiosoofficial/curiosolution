import Button from "@/components/ui/Button"
import InfoCard from "@/components/ui/InfoCard"
import { infoCards } from "@/constants/infoCards"

import React from 'react'

const TitleSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
        <h2 className="h2-bold font-radwave pt-16 z-10">WEBDESIGN</h2>
        <div className="grid grid-cols-2 gap-7 pt-12 z-10">
        {infoCards.map((card) => (
        <InfoCard
          key={card.title}
          source={card.source}
          title={card.title}
          desc={card.desc}
        />
      ))}
        </div>
        <p className="py-16 z-10">Fordern Sie eine kostenlose Projektbewertung an und erhalten Sie einen Monat kostenlos</p>
        <Button />

        <div className="circle1 absolute top-[0px] left-[200px] transform w-[800px] h-[800px] z-0 rounded-full"></div>
        
        
    </section>
  )
}

export default TitleSection