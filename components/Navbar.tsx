"use client"
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { NavbarLogoFadeInAnimation, NavbarLinksFadeInAnimation, NavbarButtonFadeInAnimation } from "@/constants/animations";



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10 px-32 absolute top-0 w-full z-50">
      <motion.div
        variants={NavbarLogoFadeInAnimation}
        initial="initial"
        animate="animate"
      >
        <Link href="/">
        <p className="h3-bold">Curiosolutions<span className="text-accent-yellow">.</span> </p>
        </Link>
      </motion.div>
      <div className="flex gap-10">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.route}>
            <motion.p 
              className=" paragraph-regular"
              variants={NavbarLinksFadeInAnimation}
              initial="initial"
              animate="animate"
              custom={index}
            >{link.label}</motion.p>
          </Link>
        ))}
      </div>
      <motion.div
        variants={NavbarButtonFadeInAnimation}
        initial="initial"
        animate="animate"
      >
        <Link href="/kontakt">
          <Button/>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;