import Image from "next/image";
import React from "react";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center gap-12 py-16">
      <div className="flex w-full justify-between items-center px-24">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex items-center justify-center">
            <Image src="/logo/icon.png" alt="logo" width={40} height={40} />
            <p className="h3-bold">
              Curiosolutions<span className="text-accent-yellow">.</span>{" "}
            </p>
          </div>
          <Button />
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-radwave h3-bold pb-2">COMPANY</h4>
          <p>How Curiosolutions Works</p>
          <p>Exchange Rates</p>
          <p>What you cannot ship</p>
          <p>Your privacy Rights</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-radwave h3-bold pb-2">ABOUT CURIOSOLUTIONS</h4>
          <p>Curiosolutions Reviews</p>
          <p>News & Press</p>
          <p>Partner with  Curiosolutions</p>
          <p>Career</p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-radwave h3-bold pb-2">SOCIAL MEDIA</h4>
          <p>Facebook.com</p>
          <p>Instagram.com</p>
          <p>Linkedin.com</p>
          <p>hello@curiosolution.com</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-24 ">
        <p className="text-text-secondary">
          Curiosolutions<span className="text-accent-yellow">.</span> © 2024 WebAgentur Zürich
        </p>
      </div>
    </footer>
  );
};

export default Footer;
