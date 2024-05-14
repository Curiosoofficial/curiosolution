import React from "react";
import Button from "./Button";
import { FaCheck, FaFighterJet, FaPlane, FaRocket, FaTimes } from "react-icons/fa";

const PriceCard = () => {
  return (
    <div className="flex justify-center items-start pt-12 gap-7">
      <div className="py-10 w-[400px] flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="h2-bold">
            <FaPlane />
          </p>
          <p className="font-radwave h3-bold">Basic</p>
          <p>Schon ab</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <s>79 Chf</s>
          <p className="h3-bold">69Chf</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <div className="flex items-center gap-5">
            <FaCheck /> <p>5 statische Seiten</p>
          </div>
          <div className="flex items-center gap-5">
            <FaCheck /> <p>Responsives Design</p>
          </div>

          <div className="flex items-center gap-5">
            <FaTimes /> <p>CMS System</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Kontaktformular</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Galerie</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>SEO-Optimierung</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Social-Media-Links</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>24/7 Kundensupport</p>
          </div>

          <div className="flex items-center gap-5">
            <FaTimes /> <p>Inklusiv Domain</p>
          </div>

          <div className="flex items-center gap-5">
            <FaTimes /> <p>Zahlungssystem</p>
          </div>
        </div>

        <Button />
      </div>

      <div className="py-10 w-[400px] flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="h2-bold">
            <FaFighterJet />
          </p>
          <p className="font-radwave h3-bold">Plus</p>
          <p>Schon ab</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <s>99 Chf</s>
          <p className="h3-bold">79Chf</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <div className="flex items-center gap-5">
            <FaCheck /> <p>10 statische Seiten</p>
          </div>
          <div className="flex items-center gap-5">
            <FaCheck /> <p>Responsives Design</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>CMS System</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Kontaktformular</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Galerie</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Pro SEO-Optimierung</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Social-Media-Links</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>24/7 Kundensupport</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Inklusiv Domain</p>
          </div>

          <div className="flex items-center gap-5">
            <FaTimes /> <p>Zahlungssystem</p>
          </div>
        </div>

        <Button />
      </div>

      <div className="py-10 w-[400px] flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="h2-bold">
            <FaRocket />
          </p>
          <p className="font-radwave h3-bold">Pro</p>
          <p>Schon ab</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <s>160 Chf</s>
          <p className="h3-bold">119Chf</p>
        </div>

        <div className="flex flex-col justify-center items-start gap-2">
          <div className="flex items-center gap-5">
            <FaCheck /> <p>5 statische Seiten</p>
          </div>
          <div className="flex items-center gap-5">
            <FaCheck /> <p>Responsives Design</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>CMS System</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Kontaktformular</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Galerie</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>SEO-Optimierung</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Social-Media-Links</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>24/7 Kundensupport</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Inklusiv Domain</p>
          </div>

          <div className="flex items-center gap-5">
            <FaCheck /> <p>Zahlungssystem</p>
          </div>
        </div>

        <Button />
      </div>
    </div>
  );
};

export default PriceCard;
