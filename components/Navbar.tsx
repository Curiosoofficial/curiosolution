import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10 px-32 absolute top-0 w-full z-50">
      <div>
        <p className="h3-bold">Curiosolutions<span className="text-accent-yellow">.</span> </p>
      </div>
      <div className="flex gap-10">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.route}>
            <p className=" paragraph-regular">{link.label}</p>
          </Link>
        ))}
      </div>
      <div>
        <Button/>
      </div>
    </nav>
  );
};

export default Navbar;
