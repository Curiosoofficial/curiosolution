import Button from "@/components/ui/Button";
import InfoCard from "@/components/ui/InfoCard";
import { infoCards2 } from "@/constants";
import React from "react";

const WhatItNeeds = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <h2 className="h2-bold font-radwave">Was braucht es?</h2>
      <p className="text-center text-text-secondary">
        Eine großartige Website sollte über ein gutes Design, relevanten
        hochwertigen Inhalt, Funktionalität, Suchmaschinenoptimierung, mobile
        Optimierung und Sicherheit verfügen. In der heutigen digitalen Ära sind
        Websites zu einem entscheidenden Element für die erfolgreiche
        Präsentation von Geschäften, persönlichen Projekten und Ideen auf der
        ganzen Welt geworden. Eine qualitativ hochwertige Website kann Ihre
        Visitenkarte im Internet sein, aber auch ein leistungsstarkes Werkzeug
        zur Gewinnung von Besuchern, Steigerung des Umsatzes und Ausweitung des
        Einflusses. Um eine Website zu erstellen, die herausragt und einen
        starken Eindruck bei Besuchern hinterlässt, ist es wichtig, sorgfältig
        über eine Reihe von Schlüsselelementen nachzudenken, einschließlich
        Design, Inhalt, technische Leistung und Benutzererfahrung. In den
        folgenden Absätzen werden wir die grundlegenden Schritte und wichtigsten
        Komponenten erkunden, die erforderlich sind, um eine großartige Website
        zu erstellen, die Ihnen dabei hilft, Ihre Ziele im Internet zu
        erreichen.
      </p>

      <div className="grid grid-cols-3 gap-5 py-12">
        {infoCards2.map((card) => (
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
  );
};

export default WhatItNeeds;
