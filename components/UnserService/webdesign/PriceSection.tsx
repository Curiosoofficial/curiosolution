import PriceCards from "@/components/ui/PriceCards";
import React from "react";

const PriceSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <h2 className="h2-bold font-radwave">Angebot</h2>
      <p className="text-text-secondary text-center">
        Egal, ob Sie eine{" "}
        <span className="font-bold text-accent-yellow">einfache Website</span>{" "}
        für Ihr Startup benötigen oder eine
        <span className="font-bold text-accent-yellow">
          umfassende Online-Präsenz
        </span>{" "}
        für Ihr etabliertes Unternehmen aufbauen möchten - wir haben das{" "}
        <span className="font-bold text-accent-yellow">
          passende Abonnement
        </span>{" "}
        für Sie. Mit transparenten monatlichen Preisen und einem breiten
        Spektrum an Funktionen bieten wir Ihnen die{" "}
        <span className="font-bold text-accent-yellow">
          Flexibilität und Zuverlässigkeit
        </span>
        , die Sie für Ihren digitalen Erfolg benötigen. Wählen Sie einfach das
        Abonnement, das am besten zu Ihren Anforderungen passt, und lassen Sie
        uns den Rest erledigen.
      </p>

      <PriceCards />
    </section>
  );
};

export default PriceSection;
