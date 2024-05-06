"use client";
import { benefits } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import Button from "../ui/Button";

const BenefitSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Zustand für den aktiven Abschnitt

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Umkehren des Zustands bei Klick
  };

  return (
    <section className="flex flex-col justify-center items-center py-24 px-72">
      <h2 className="h1-bold font-ubuntu">ERFOLG GARANTIERT</h2>

      <div className="pt-36 pb-20 flex w-full gap-10 justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`cursor-pointer w-[650px] ${
                activeIndex === index
                  ? "bg-secondary py-7 px-10 rounded-xl"
                  : ""
              }`}
            >
              <p
                className={`h3-bold flex justify-between items-center gap-2 ${
                  activeIndex === index ? "text-accent-yellow" : ""
                }`}
              >
                {benefit.title}{" "}
                {activeIndex === index ? (
                  <MdArrowOutward className="text-accent-yellow" />
                ) : (
                  <MdArrowForward />
                )}
              </p>
              {activeIndex === index && (
                <div className="mt-5">
                  <p>{benefit.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        
          <Image
            src="/3dIcons/placeholder.jpg"
            alt="Gold"
            width={940}
            height={827}
            />
        
      </div>
      <Button/>
    </section>
  );
};

export default BenefitSection;
