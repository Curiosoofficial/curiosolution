import Button from "@/components/ui/Button"
import InfoCard from "@/components/ui/InfoCard"
import { infoCards5 } from "@/constants/infoCards"
import React from 'react'

const WhyUs = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
        <h2 className="h2-bold font-radwave">Warum Wir</h2>
        <p className="text-center text-text-secondary">Wir möchten Ihnen unseren einzigartigen Ansatz zur Website-Entwicklung vorstellen. Wir sind nicht einfach nur ein weiteres Unternehmen, das Websites erstellt - wir sind Partner, die sich um Ihre Bedürfnisse und Ziele kümmern. Hier ist, wie wir uns von anderen abheben:</p>

        <div className="grid grid-cols-3 gap-5 py-12">
        {infoCards5.map((card) => (
          <InfoCard
            key={card.title}
            source={card.source}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>

      <p className="text-center text-text-secondary">Wir sind nicht nur ein Team für die Erstellung von Websites. Wir sind Ihre Partner in der digitalen Welt, bereit, Ihnen zu helfen, Ihre Ziele zu erreichen. Erlauben Sie uns zu zeigen, wie Sorgfalt, Qualität und Individualität zusammenkommen können, um Ihre Website zu etwas mehr als nur gewöhnlichem zu machen.</p>
    
      <div className="pt-12">
        <Button />
      </div>
    </section>
  )
}

export default WhyUs