"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { cardInfo } from "@/constants";
import Image from "next/image";
import Button from "../ui/Button";

const CardSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <h2 className="h1-bold font-ubuntu">VIELFÄLTIGKEIT IMMER</h2>

      <div className="flex py-36">
        {cardInfo.map((item) => (
          <PinContainer
            title={item.title}
            href="/webdesign"
            key={item.title}
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
        ))}
      </div>

      <Button/>
    </section>
  );
};

export default CardSection;
