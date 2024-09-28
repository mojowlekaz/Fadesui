import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navmenu = [
  {
    path: "Vaults",
    href: "/vault",
  },
  {
    path: "Blog",
    href: "/blog",
  },
  {
    path: "Launchpad",
    href: "/launchpad",
  },
];

export default function Navbar() {
  return (
    <div className="h-[100px]  bg-[#8d978d] px-10 flex items-center relative">
      <div className=" fixed top-5  bottom-0 z-50 left-0 right-0 h-[56px] w-full bg-white/80 text-black rounded-[20px] flex justify-between items-center px-5 mx-auto container backdrop-blur-lg shadow-md">
        <div className="sm:flex  md:hidden">
          <Image src="/burger.svg" height={30} width={30} alt="burger" />
        </div>
        <div className="text-[30px] text-black md:flex hidden">
          <h1>FADE</h1>
        </div>

        <div className="flex flex-row gap-10 justify-center items-center">
          <div className="text-[20px] text-black md:hidden sm:flex">
            <h1>FADE</h1>
          </div>
          <div className="md:flex md:flex-row space-x-10 hidden">
            {Navmenu.map((item, index) => (
              <Link href={item.href} key={index}>
                <p className="text-[20px] text-black">{item.path}</p>
              </Link>
            ))}
          </div>

          <button className="bg-[#97fce4] w-[138px] h-[38px] rounded-[60px] justify-center items-center">
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
}
