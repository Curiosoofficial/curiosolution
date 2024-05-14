import React from "react";

type InfoCardProps = {
  source: React.ReactNode;
  title: string;
  desc: string;
};

const InfoCardVertical = ({ source, title, desc }: InfoCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-[350px] h-[420px] gap-5 bg-gradient-to-br from-neutral-950 via-black to-black border border-white/[0.1] rounded-2xl p-7">
      <p className="px-12 bg-accent-yellow rounded-2xl">{source}</p>
      <h4 className="h4-bold font-radwave text-center">{title}</h4>
      <p className="text-text-secondary text-center">{desc}</p>
    </div>
  );
};

export default InfoCardVertical;
