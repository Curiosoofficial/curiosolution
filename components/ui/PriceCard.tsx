import React from "react";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";

interface PriceCardProps {
  icon: React.ReactNode;
  packageTitle: string;
  price: string;
  salePrice: string;
}

const PriceCard = ({
  icon,
  packageTitle,
  price,
  salePrice,
}: PriceCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl p-7">
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="h2-bold">{icon}</p>
        <p className="font-radwave h3-bold">{packageTitle}</p>
        <p>Schon ab</p>
      </div>

      <div className="flex items-center justify-center">
        <s>{price}</s>
        <p>{salePrice}</p>
      </div>

      <div className="grid grid-cols-2 justify-items-center items-center">
        <FaCheck /> <p>1</p>
        <FaCheck /> <p>2</p>
        <FaCheck /> <p>3</p>
        <FaCheck /> <p>4</p>
        <FaCheck /> <p>5</p>
        <FaCheck /> <p>6</p>
        <FaCheck /> <p>7</p>
        <FaCheck /> <p>8</p>
        <FaCheck /> <p>7</p>
      </div>

      <Button />
    </div>
  );
};

export default PriceCard;
