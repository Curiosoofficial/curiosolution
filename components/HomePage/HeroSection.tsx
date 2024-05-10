"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { HeroFadeInFromRight, HeroFadeInFromLeft } from "@/constants/animations";

const HeroSection = () => {
  return (
    <section className="hero-background flex flex-col justify-center items-center py-24">
      <div className="flex flex-col items-center">
        <motion.h1 
          className="hero-bold font-radwave pb-10"
          variants={HeroFadeInFromLeft}
          initial="initial"
          animate="animate"
        >FIND YOUR HOME</motion.h1>
        <motion.div 
          style={{ position: "relative" }}
          variants={HeroFadeInFromRight}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/hero.png"
            alt="hero image"
            width={1410}
            height={915}
            className="rounded-3xl"
          />

          <div
            className="bg-accent-yellow w-[400px] h-[80px] rounded-2xl absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{ marginTop: "-40px" }}
          ></div>
        </motion.div>
      </div>

      <motion.div
        className="flex gap-[90px] items-center pt-20"
        variants={HeroFadeInFromLeft}
        initial="initial"
        animate="animate"
      >
        <h3 className="h3-bold">WebdevbyLuka</h3>
        <h3 className="h3-bold">TodorovicPartner</h3>
        <h3 className="h3-bold">ArztPraxis Dr. Ilic</h3>
        <h3 className="h3-bold">Fahrschule Gordana</h3>
        <h3 className="h3-bold">Daetzis</h3>
      </motion.div>
    </section>
  );
};

export default HeroSection;
