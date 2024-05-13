import Button from "@/components/ui/Button"
import InfoCard from "@/components/ui/InfoCard"
import { infoCards3 } from "@/constants/infoCards"

import React from 'react'

const Maintenance = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <h2 className="h2-bold font-radwave">Webwartung</h2>
      <p className="text-center text-text-secondary">
      Websites sind zu einem vitalen Bestandteil von Geschäftsstrategien, Kommunikation und Informationsaustausch geworden. Oft wird jedoch übersehen, dass die Erstellung einer Website nur der erste Schritt im Prozess der digitalen Präsenz ist. Die regelmäßige Wartung einer Website bleibt häufig im Schatten der Herausforderungen, die mit ihrer Erstellung verbunden sind. Dennoch ist es wichtig zu verstehen, dass die Wartung einer Website nicht nur eine Verpflichtung ist, sondern auch ein entscheidender Faktor für ihre langfristige Effektivität und ihren Erfolg. In diesem Text werden wir untersuchen, warum die Wartung einer Website von entscheidender Bedeutung ist und wie sie sich nachhaltig auf Ihre Online-Präsenz und Ihr Geschäft auswirken kann.
      </p>

      <div className="grid grid-cols-2 gap-5 py-12">
        {infoCards3.map((card) => (
        <InfoCard
          key={card.title}
          source={card.source}
          title={card.title}
          desc={card.desc}
        />
      ))}
        </div>

        <Button/>
    </section>
  )
}

export default Maintenance