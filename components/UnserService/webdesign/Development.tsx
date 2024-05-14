import Button from "@/components/ui/Button"
import InfoCard from "@/components/ui/InfoCard"
import { infoCards6 } from "@/constants/infoCards"
import React from 'react'

const Development = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
        <h2 className="h2-bold font-radwave">Erstellungsprozess</h2>

        <div className="grid grid-cols-3 gap-7 py-12">
        {infoCards6.map((card) => (
          <InfoCard
            key={card.title}
            source={card.source}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>

      <div>
        <Button />
      </div>
    </section>
  )
}

export default Development