import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footmenu = [
  { path: "Vaults", href: "vaults" },
  { path: "Blog", href: "blog" },
  { path: "LaunchPad", href: "launchpad" },
  { path: "Docs", href: "docs" },
  { path: "Guides", href: "guide" },
  { path: "Stats", href: "stat" },
];

const SocialIcon = [
  { name: "twitter.com", img: "/Link-3.svg" },
  { name: "telegram.com", img: "/Link-2.svg" },
  { name: "medium.com", img: "/Link-1.svg" },
  { name: "discord.com", img: "/Link.svg" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071F27] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Footmenu.map((item, index) => (
                <Link href={item.href} key={index} className="block">
                  <p className="text-base md:text-lg text-white hover:text-gray-300 transition-colors">
                    {item.path}
                  </p>
                </Link>
              ))}
            </div>
            <p className="text-base md:text-lg text-white">2024</p>
          </div>
          <div className="space-y-8 md:flex md:flex-col md:items-end">
            <div className="flex flex-wrap gap-4">
              {SocialIcon.map((item, index) => (
                <Link href={item.name} key={index} className="block">
                  <Image
                    src={item.img}
                    alt={item.name}
                    height={40}
                    width={40}
                    className="transition-transform hover:scale-110"
                  />
                </Link>
              ))}
            </div>
            <p className="text-base md:text-lg text-white">Terms of use</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
