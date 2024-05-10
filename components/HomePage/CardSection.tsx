"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { cardInfo } from "@/constants";
import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { CardsFadeInAnimation, FadeInFromLeft, FadeInFromRight } from "@/constants/animations";

const CardSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <motion.h2
        className="h1-bold font-radwave"
        variants={FadeInFromRight}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        VIELFÄLTIGKEIT IMMER
      </motion.h2>

      <div className="flex pt-24 pb-40 max-lg:flex-col max-lg:gap-44">
        {cardInfo.map((item, index) => (
          <motion.div 
            key={index}
            variants={CardsFadeInAnimation}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            custom={index}
            
          >
            <PinContainer
              title={item.title}
              href="/webdesign"
              className="w-[300px] h-[400px] px-4 py-10"
            >
              <Image
                src={item.source}
                alt={item.title}
                width={100}
                height={100}
              />
              <h3 className="h3-bold">{item.title}</h3>
              <p className="text-center text-text-secondary">{item.describe}</p>
            </PinContainer>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={FadeInFromLeft}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <Button />
      </motion.div>
    </section>
  );
};

export default CardSection;
