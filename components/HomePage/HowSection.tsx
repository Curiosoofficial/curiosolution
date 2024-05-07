"use client";
import Image from "next/image";
import React, { useState } from "react";

const HowSection = () => {
  // Zustand für den ausgewählten Abschnitt
  const [selectedSection, setSelectedSection] = useState("WEBDESIGN");

  // Inhalte für jeden Abschnitt
  const sectionContents = {
    WEBDESIGN: {
      title1: "Title1",
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/3dIcons/placeholder.jpg",
    },
    SEO: {
      title1: "Title2",
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/3dIcons/placeholder.jpg",
    },
    SOCIALMEDIA: {
      title1: "Title3",
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/3dIcons/placeholder.jpg",
    },
    LOGODESIGN: {
      title1: "Title4",
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/3dIcons/placeholder.jpg",
    },
  };

  // Funktion zum Wechseln des ausgewählten Abschnitts
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  // Aktuelle Inhalte basierend auf dem ausgewählten Abschnitt
  const { title1, text1, image } = sectionContents[selectedSection];

  return (
    <section className="flex flex-col justify-center items-center py-24 px-72">
      <h2 className="h1-bold font-ubuntu">HOW IT WORKS</h2>
      <div className="flex flex-col items-start justify-start py-36 flex-grow w-full px-10 ">
        <div className="flex items-center gap-5 justify-start flex-grow w-full border-b-2 pb-4">
          {/* Navigationsleiste */}
          {Object.keys(sectionContents).map((section) => (
            <p
              key={section}
              className={`h3-bold font-ubuntu cursor-pointer ${
                selectedSection === section && "text-accent-yellow"
              }`}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 max-lg:flex-col max-sm:items-center pt-10">
          <div className="flex flex-col justify-center items-center w-[600px] gap-2 max-sm:w-[300px]">
            <h3 className="h3-bold text-primary-1 text-center">{title1}</h3>
            <p className="text-primary-2 font-spaceGrotesk text-center">{text1}</p>
          </div>
          <div className="w-[600px] max-sm:w-[300px] flex flex-col gap-3 bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl p-5">
            <Image src={image} alt={selectedSection} width={940} height={827} className="rounded-2xl" />
            <h3 className="h3-bold pt-2">WEBDESIGN</h3>
            <p>Mehr Lesen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
