"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FadeInFromLeft, FadeInFromRight } from "@/constants/animations";

const HowSection = () => {
  // Zustand für den ausgewählten Abschnitt
  const [selectedSection, setSelectedSection] = useState("WEBDESIGN");

  // Inhalte für jeden Abschnitt
  const sectionContents = {
    WEBDESIGN: {
      title1: "BERATUNG",
      text1:
        "Wir beginnen mit einem ausführlichen Gespräch, um Ihre Ziele und Anforderungen zu verstehen.",
      title2: "KONZEPTION",
      text2:
        "Unsere Designer erstellen ein maßgeschneidertes Konzept, das Ihre Marke online optimal repräsentiert.",
      title3: "ENTWICKLUNG",
      text3:
        "Unser erfahrenes Entwicklungsteam setzt das Design um und sorgt für eine reibungslose Funktion Ihrer Website.",
      cardTitle: "WEBDESIGN",
      image: "/howImages/webdesign.png",
    },
    SEO: {
      title1: "ANALYSE",
      text1:
        "Wir führen eine umfassende Analyse Ihrer Website durch, um Schwachstellen zu identifizieren und Optimierungsmöglichkeiten zu finden.",
      title2: "OPTIMIERUNG",
      text2:
        "Unsere SEO-Experten optimieren Ihre Inhalte und implementieren bewährte Strategien, um Ihre Rankings zu verbessern.",
      title3: "ÜBERWACHUNG",
      text3:
        "Wir überwachen kontinuierlich Ihre Rankings und passen unsere Strategie an, um sicherzustellen, dass Sie langfristig erfolgreich sind.",
      cardTitle: "SEO",
      image: "/howImages/seo.png",
    },
    SOCIALMEDIA: {
      title1: "STRATEGIE",
      text1:
        "Wir entwickeln eine maßgeschneiderte Social-Media-Strategie, die zu Ihrem Unternehmen passt und Ihre Zielgruppe anspricht.",
      title2: "INHALTE",
      text2:
        "Unsere Kreativteams erstellen ansprechende Inhalte, die Ihre Marke auf Plattformen wie Facebook, Instagram und Twitter präsentieren.",
      title3: "INTERAKTION",
      text3:
        "Wir interagieren aktiv mit Ihrer Zielgruppe, um die Markenbekanntheit zu steigern und Ihre Online-Präsenz zu stärken.",
      cardTitle: "SOCIAL MEDIA",
      image: "/howImages/socialmedia.png",
    },
    LOGODESIGN: {
      title1: "KONZEPT",
      text1:
        "Unsere Designer arbeiten eng mit Ihnen zusammen, um Ihre Vorstellungen zu verstehen und ein individuelles Logo-Konzept zu entwickeln.",
      title2: "KREATION",
      text2:
        "Wir setzen Ihre Ideen in kreative und einprägsame Logos um, die Ihre Markenidentität perfekt verkörpern.",
      title3: "VERFEINERUNG",
      text3:
        "Nach Ihrem Feedback verfeinern wir das Design, um sicherzustellen, dass es Ihren Erwartungen entspricht und Ihre Marke optimal repräsentiert.",
      cardTitle: "LOGO DESIGN",
      image: "/howImages/logo.png",
    },
  };

  // Funktion zum Wechseln des ausgewählten Abschnitts
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  // Aktuelle Inhalte basierend auf dem ausgewählten Abschnitt
  const { title1, text1, title2, text2, title3, text3, image, cardTitle } =
    sectionContents[selectedSection];

  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <motion.h2
        className="h1-bold font-radwave"
        variants={FadeInFromLeft}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        WIE ES FUNKTUNIERT
      </motion.h2>
      <div className="flex flex-col items-start justify-start pt-12 flex-grow w-full px-10 max-lg:items-center">
        <motion.div
          className="flex items-center gap-5 justify-start flex-grow w-full border-b-2 pb-4 max-lg:justify-center"
          variants={FadeInFromRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          {/* Navigationsleiste */}
          {Object.keys(sectionContents).map((section) => (
            <p
              key={section}
              className={`h3-bold font-radwave cursor-pointer text-text-secondary ${
                selectedSection === section && "!text-accent-yellow"
              }`}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </p>
          ))}
        </motion.div>

        <div className="flex items-stretch justify-center gap-5 max-lg:flex-col max-sm:items-center pt-10">
          <div className="flex flex-col justify-center items-start w-[600px] gap-5 max-sm:w-[300px] ">
            <motion.div
              className="flex-grow flex flex-col justify-center bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl p-5"
              variants={FadeInFromLeft}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              <h4 className="font-radwave h4-bold text-primary-1">{title1}</h4>
              <p className="text-primary-2 font-spaceGrotesk text-text-secondary">
                {text1}
              </p>
            </motion.div>
            <motion.div
              className="flex-grow flex flex-col justify-center bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl p-5"
              variants={FadeInFromLeft}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              <h4 className="font-radwave h4-bold text-primary-1">{title2}</h4>
              <p className="text-primary-2 font-spaceGrotesk text-text-secondary">
                {text2}
              </p>
            </motion.div>
            <motion.div
              className="flex-grow flex flex-col justify-center bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl p-5"
              variants={FadeInFromLeft}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              <h4 className="font-radwave h4-bold text-primary-1">{title3}</h4>
              <p className="text-primary-2 font-spaceGrotesk text-text-secondary">
                {text3}
              </p>
            </motion.div>
          </div>
          <motion.div 
            className="w-[600px] max-sm:w-[300px] flex flex-col justify-center gap-3 bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl p-5"
            variants={FadeInFromRight}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt={selectedSection}
              width={1920}
              height={1080}
              className="rounded-2xl"
            />
            <h3 className="h3-bold pt-3">{cardTitle}</h3>
            <p className="text-text-secondary">Mehr Lesen</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
