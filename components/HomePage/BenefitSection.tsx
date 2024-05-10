"use client";
import { benefits } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { BenefitsFadeInAnimation, FadeInFromLeft, FadeInFromRight } from "@/constants/animations";

const BenefitSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Zustand für den aktiven Abschnitt

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Umkehren des Zustands bei Klick
  };

  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <motion.h2
        className="h1-bold font-radwave"
        variants={FadeInFromRight}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        ERFOLG GARANTIERT
      </motion.h2>

      <div className="pt-12 pb-20 flex w-full gap-10 justify-between items-center max-lg:flex-col">
        <div className="flex flex-col justify-center items-center ">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              onClick={() => handleClick(index)}
              className={`cursor-pointer w-[650px] py-7 px-10 ${
                activeIndex === index
                  ? "bg-secondary rounded-xl"
                  : ""
              }`}
              variants={BenefitsFadeInAnimation}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              custom={index}
            >
              <p
                className={`h3-bold flex justify-between items-center gap-2 font-radwave ${
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
                  <p className="text-text-secondary">{benefit.content}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={FadeInFromRight}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <Image
            src="/3dIcons/placeholder.jpg"
            alt="Gold"
            width={940}
            height={827}
            className="rounded-2xl"
          />
        </motion.div>
      </div>
      <Button />
    </section>
  );
};

export default BenefitSection;
