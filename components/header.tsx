"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = [
    { name: "Harga", href: "/harga" },
    { name: "Tentang", href: "#" },
    { name: "Produk", href: "#" },
    { name: "Testimoni", href: "#" },
    { name: "Penggunaan", href: "#" },
    { name: "Artikel", href: "/artikel" },
  ];

  return (
    <div className="w-full py-4 sticky top-0 z-50">
      <div className="p-3 bg-white shadow border rounded-full md:rounded-full w-[95%] lg:w-10/12 mx-auto flex items-center justify-between max-w-7xl relative">
        <div className="flex items-center gap-2 text-primary pl-2">
          <Image src={"/img/logo.webp"} alt="logo" width={40} height={40} />
          <p className="text-2xl lg:text-3xl font-bold">Rajapay</p>
        </div>

        <div className="hidden lg:flex h-10 items-center gap-8">
          {NavLink.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button size={"lg"} className="rounded-full">
            Download Rajapay
          </Button>
        </div>

        <div className="lg:hidden flex items-center pr-2">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border shadow-lg rounded-2xl p-6 flex flex-col gap-4 lg:hidden mx-auto w-full">
            {NavLink.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium border-b pb-2"
              >
                {item.name}
              </Link>
            ))}
            <Button className="rounded-full w-full mt-2">
              Download Rajapay
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
