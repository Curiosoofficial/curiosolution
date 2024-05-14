import Button from "@/components/ui/Button";
import InfoCardVertical from "@/components/ui/infoCardVertical";
import { infoCards4 } from "@/constants/infoCards";
import React from "react";

const PriceDefinition = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <h2 className="h2-bold font-radwave">Preis Bestimmung</h2>
      <p className="text-center text-text-secondary">
        Wenn Sie sich entscheiden, eine Website zu erstellen, ist eine der
        ersten Fragen, die sich stellt: &quot;Wie viel wird das kosten?&quot;
        <span className="font-bold text-accent-yellow">Die Kosten für die Erstellung einer Website können erheblich variieren</span>
        und hängen von vielen Faktoren ab. Dieses Thema ist sowohl für
        Unternehmen, die eine Online-Präsenz erwägen, als auch für
        Einzelpersonen, die ihre Ideen oder ihr Portfolio im Internet teilen
        möchten, von wesentlicher Bedeutung. Um besser zu verstehen, wie der
        Preis für die Erstellung einer Website bestimmt wird, müssen Sie
        verschiedene Komponenten und Faktoren berücksichtigen, die diese
        Gleichung beeinflussen. Im Folgenden werden wir die <span className="font-bold text-accent-yellow">wichtigsten Elemente
        untersuchen, die bei der Festlegung des Preises</span> für die Erstellung einer
        Website berücksichtigt werden, und Ihnen einen besseren Einblick in
        diesen wichtigen Aspekt der digitalen Präsenz geben. Die Kosten für die
        Erstellung einer Website <span className="font-bold text-accent-yellow">hängen von vielen Faktoren ab</span> und können
        erheblich variieren. Hier sind einige der wichtigsten Faktoren, die den
        Preis für die Erstellung einer Website beeinflussen:
      </p>

      <div className="grid grid-cols-3 gap-7 justify-items-center pt-12">
        {infoCards4.map((card) => (
          <InfoCardVertical
            key={card.title}
            source={card.source}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
      <div className="pt-12">
        <Button />
      </div>
    </section>
  );
};

export default PriceDefinition;
