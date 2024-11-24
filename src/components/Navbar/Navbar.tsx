"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/components/Navbar/Navlink";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  openNav: () => void;
};

function Navbar({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-white shadow-lg" : "fixed"
      } w-full h-[10vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-full mx-auto px-5 xl:px-8 ">
        <h1 className="text-xl bg-gradient-to-r from-green-500 to-sky-400 md:text-2xl font-bold inline-block text-transparent bg-clip-text">
          Leaf
        </h1>
        <div className="hidden md:flex lg:flex items-center space-x-14">
          {navLinks.map((el) => {
            return (
              <Link href={el.url} key={el.id}>
                <p className="nav-link">{el.label}</p>
              </Link>
            );
          })}
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hidden md:block lg:block">
            Join us
          </button>
          <Bars3Icon
            onClick={openNav}
            className="w-8 h-8 md:hidden lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
