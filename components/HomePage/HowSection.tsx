"use client";
import Image from "next/image";
import React, { useState } from "react";

const HowSection = () => {
  // Zustand für den ausgewählten Abschnitt
  const [selectedSection, setSelectedSection] = useState("WEBDESIGN");

  // Inhalte für jeden Abschnitt
  const sectionContents = {
    WEBDESIGN: {
      title1: "Webdesign",
      text1: "Unsere Webdesign-Services bieten maßgeschneiderte Lösungen, die Ihr Unternehmen online präsentieren. Von responsiven Layouts bis hin zu benutzerfreundlichen Schnittstellen - wir machen Ihre Website zum Aushängeschild Ihrer Marke. Mit einer erfahrenen Design- und Entwicklungsteam arbeiten wir eng mit Ihnen zusammen, um Ihre Vision zum Leben zu erwecken. Egal, ob Sie eine einfache Informationswebsite, einen Online-Shop oder eine komplexe Webanwendung benötigen, wir haben die Fähigkeiten und das Know-how, um Ihre Ziele zu erreichen.",
      image: "/3dIcons/placeholder.jpg",
      cardTitle: "WEBDESIGN"
    },
    SEO: {
      title1: "SEO",
      text1: "Unsere SEO-Services verbessern die Sichtbarkeit Ihrer Website in Suchmaschinen, um mehr organischen Traffic zu generieren. Wir analysieren Ihre Keywords, optimieren Ihre Inhalte und setzen bewährte Strategien ein, um Ihre Rankings zu steigern. Mit einem ganzheitlichen Ansatz identifizieren wir die Stärken und Schwächen Ihrer aktuellen SEO-Strategie und entwickeln dann einen maßgeschneiderten Plan, um Ihre Ziele zu erreichen. Durch kontinuierliches Monitoring und Anpassungen sorgen wir dafür, dass Ihre Website in den Suchergebnissen ganz oben bleibt.",
      image: "/3dIcons/placeholder.jpg",
      cardTitle: "SEO"
    },
    SOCIALMEDIA: {
      title1: "Social Media",
      text1: "Mit unseren Social-Media-Services können Sie Ihre Präsenz auf Plattformen wie Facebook, Instagram und Twitter ausbauen. Wir erstellen ansprechende Inhalte, interagieren mit Ihrer Zielgruppe und fördern die Markenbekanntheit Ihres Unternehmens. Unsere Social-Media-Experten verfolgen die neuesten Trends und entwickeln maßgeschneiderte Strategien, die zu Ihrem Unternehmen passen. Von der Erstellung von Posts und Anzeigen bis hin zur Community-Management bieten wir ein Rundum-Service, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
      image: "/3dIcons/placeholder.jpg",
      cardTitle: "SOCIAL MEDIA"
    },
    LOGODESIGN: {
      title1: "Logo Design",
      text1: "Unser Logo-Design-Service kreiert individuelle Logos, die das Wesen Ihrer Marke einfangen. Vom Konzept bis zur Umsetzung - wir erstellen einprägsame Markenidentitäten, die Ihre Zielgruppe ansprechen und einen bleibenden Eindruck hinterlassen. Unsere talentierten Designer arbeiten eng mit Ihnen zusammen, um Ihre Vorstellungen zu verstehen und ein Logo zu entwickeln, das Ihre Werte und Botschaften verkörpert. Mit einem Fokus auf Kreativität, Originalität und Qualität liefern wir Ergebnisse, die Ihre Erwartungen übertreffen.",
      image: "/3dIcons/placeholder.jpg",
      cardTitle: "LOGO DESIGN"
    }
  };
  

  // Funktion zum Wechseln des ausgewählten Abschnitts
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  // Aktuelle Inhalte basierend auf dem ausgewählten Abschnitt
  const { title1, text1, image, cardTitle } = sectionContents[selectedSection];

  return (
    <section className="flex flex-col justify-center items-center py-24 px-72">
      <h2 className="h1-bold font-ubuntu">HOW IT WORKS</h2>
      <div className="flex flex-col items-start justify-start py-36 flex-grow w-full px-10 ">
        <div className="flex items-center gap-5 justify-start flex-grow w-full border-b-2 pb-4">
          {/* Navigationsleiste */}
          {Object.keys(sectionContents).map((section) => (
            <p
              key={section}
              className={`h3-bold font-ubuntu cursor-pointer text-text-secondary ${
                selectedSection === section && "!text-accent-yellow"
              }`}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 max-lg:flex-col max-sm:items-center pt-10">
          <div className="flex flex-col justify-center items-start w-[600px] gap-2 max-sm:w-[300px]">
            <h3 className="h3-bold text-primary-1">{title1}</h3>
            <p className="text-primary-2 font-spaceGrotesk  text-text-secondary">{text1}</p>
          </div>
          <div className="w-[600px] max-sm:w-[300px] flex flex-col gap-3 bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl p-5">
            <Image src={image} alt={selectedSection} width={940} height={827} className="rounded-2xl" />
            <h3 className="h3-bold pt-3">{cardTitle}</h3>
            <p className="text-text-secondary">Mehr Lesen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
