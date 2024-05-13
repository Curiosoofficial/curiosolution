"use client"
import React from 'react'
import { PinContainer } from "@/components/ui/3d-pin";
import { cardInfo } from "@/constants";
import { CardsFadeInAnimation, FadeInFromBottom, FadeInFromTop } from "@/constants/animations";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const CardSection = () => {
  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
        <motion.h2
        className="h1-bold font-radwave pt-16"
        variants={FadeInFromTop}
        initial="initial"
        animate="animate"
      >
        VIELFÄLTIGKEIT IMMER
      </motion.h2>

      <div className="flex pt-24 pb-40 max-lg:flex-col max-lg:gap-44">
        {cardInfo.map((item, index) => (
          <motion.div 
            key={index}
            variants={CardsFadeInAnimation}
            initial="initial"
            animate="animate"
            custom={index}
            onClick={() => handleCardClick(item.link)}
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
              <p className="text-accent-yellow">Mehr erfahren</p>
            </PinContainer>
          </motion.div>
        ))}
      </div>
      
    </section>
  )
}

export default CardSection