import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10 px-32 absolute top-0 w-full z-50">
      <div>
        <p className="h3-bold">Curiosolutions.</p>
      </div>
      <div className="flex">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.route}>
            <p className="pl-10 paragraph-regular">{link.label}</p>
          </Link>
        ))}
      </div>
      <div>
        <button className="px-5 py-2 rounded-md bg-accent-yellow text-black font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-accent-yellow">
          ANFRAGEN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
