import React from "react";

const NewsletterSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-16 px-72">
      <h2 className="h2-bold font-radwave">NEWSLETTER</h2>
      <p className="text-center pt-3 text-text-secondary"> 
        Abonnieren Sie unseren Newsletter, um stets über die neuesten Entwicklungen, Angebote und exklusive Einblicke informiert zu bleiben!
      </p>
      <div className="pt-12 flex justify-center items-center">
        <input placeholder="E-Mail" type="text" className="text-text-secondary outline-none rounded-s-md px-10 py-5   bg-secondary border-[2px] border-secondary"/>
        <button className="px-10 py-5 rounded-e-md bg-accent-yellow text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-accent-yellow">
          ANFRAGEN
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;
