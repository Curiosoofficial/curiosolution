import Image from "next/image";
import React from "react";

const Concept = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <h2 className="h2-bold font-radwave">Grundlagen 2024</h2>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="h3-bold font-radwave">
            Schlüssel zur erfolgreichen Website
          </h3>
          <p className="text-text-secondary ">
            <span className="text-accent-yellow font-bold">Die Erstellung einer Website</span> ist entscheidend für den <span className="text-accent-yellow font-semibold">Erfolg Ihres
            Geschäfts</span> im Internet, da sie neue Kunden gewinnt und bestehende
            bindet. Ziele und Zielgruppe sollten zuerst bedacht werden, um
            Design, Struktur und Funktionen entsprechend anzupassen. Das Design
            sollte <span className="text-accent-yellow font-bold">ansprechend und benutzerfreundlich</span> sein, die Struktur klar
            und logisch. <span className="text-accent-yellow font-bold">Kontaktmöglichkeiten, Suche und E-Commerce</span> sind
            wichtige Funktionen für die Kundeninteraktion.
            <span className="text-accent-yellow font-bold"> Suchmaschinenoptimierung (SEO)</span> ist unerlässlich, um in den
            Suchergebnissen sichtbar zu sein. Zusammenfassend erfordert die
            <span className="text-accent-yellow font-bold"> Website-Erstellung sorgfältiges Nachdenken</span> über Ziele, Design,
            Struktur, Funktionen und SEO, um erfolgreich zu sein und neue Kunden
            anzuziehen.
          </p>
        </div>

        <Image
          src="/portfoliosnippet.png"
          alt="image"
          width={600}
          height={400}
        />
      </div>

      <div className="flex flex-row-reverse items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-2">
          <h3 className="h3-bold font-radwave">
            Websites mit Stil und Effizienz
          </h3>
          <p className="text-text-secondary ">
            Träumen Sie davon, die digitale Welt zu erobern? <span className="text-accent-yellow font-bold">Wir können Ihnen
            dabei helfen</span>, diesen Traum zu verwirklichen. In einer Welt, in der
            der erste Eindruck online entsteht, <span className="text-accent-yellow font-bold">ist Ihre Website Ihre virtuelle
            Visitenkarte</span>, und wir erstellen sie mit Stil und Effizienz. Unser
            Team von Experten für die Entwicklung von Websites kombiniert
            Kreativität mit technischem Know-how, um einzigartige digitale
            Plattformen zu schaffen, die <span className="text-accent-yellow font-bold">Aufmerksamkeit erregen</span> und einen
            <span className="text-accent-yellow font-bold">starken Eindruck</span> hinterlassen. Egal, ob Sie ein kleines Unternehmen,
            ein Unternehmer oder ein großes Unternehmen sind, unsere Websites
            sind auf Ihre Bedürfnisse zugeschnitten.
          </p>
        </div>

        <Image
          src="/portfoliosnippet.png"
          alt="image"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default Concept;
