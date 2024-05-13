import Image from "next/image";
import React from 'react';

type InfoCardProps = {
  source: string;
  title: string;
  desc: string;
}

const InfoCard = ({ source, title, desc }: InfoCardProps) => {
  return (
    <div className="flex items-center justify-center gap-5 bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl p-7">
      
        <Image 
          src={source}
          alt="image"
          width={70}
          height={70}
        />
      

      <div className="flex flex-col gap-2">
        <h4 className="h4-bold font-radwave">{title}</h4>
        <p className="text-text-secondary">{desc}</p>
      </div>
    </div>
  );
}

export default InfoCard;