import React from "react";

const NewsletterSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-24 px-72">
      <h2 className="h2-bold font-ubuntu">NEWSLETTER</h2>
      <p className="text-center pt-20 text-text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illo nulla
        sequi ad labore maxime ipsum cumque nostrum eius dolor tempore.
      </p>
      <div className="pt-20 flex justify-center items-center">
        <input type="text" className="rounded-s-md px-10 py-5  font-bold text-black bg-secondary border-[2px] border-secondary"/>
        <button className="px-10 py-5 rounded-e-md bg-accent-yellow text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-accent-yellow">
          ANFRAGEN
        </button>
      </div>
    </section>
  );
};

export default NewsletterSection;
