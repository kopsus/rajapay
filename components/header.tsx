"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  const navLink = useMemo(
    () => [
      { name: "Harga", href: "/harga" },
      { name: "Tentang", href: "/#tentang" },
      { name: "Produk", href: "/#produk" },
      { name: "Testimoni", href: "/#testimoni" },
      { name: "Penggunaan", href: "/#penggunaan" },
      { name: "Artikel", href: "/artikel" },
    ],
    [],
  );

  useEffect(() => {
    if (pathname !== "/") return;

    const observers: IntersectionObserver[] = [];

    const sectionLinks = navLink.filter((link) => link.href.includes("#"));

    sectionLinks.forEach((link) => {
      const hash = link.href.split("#")[1];
      const section = document.getElementById(hash);

      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(`#${hash}`);
            }
          });
        },
        {
          rootMargin: "-20% 0px -70% 0px",
          threshold: 0,
        },
      );

      observer.observe(section);
      observers.push(observer);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActive("#home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, navLink]);

  const checkActive = (itemUrl: string) => {
    const isHashLink = itemUrl.includes("#");

    if (isHashLink) {
      const hash = itemUrl.split("#")[1];
      return pathname === "/" && active === `#${hash}`;
    }

    if (itemUrl === "/") {
      return pathname === "/" && active === "#home";
    }

    return pathname === itemUrl;
  };

  return (
    <div className="w-full py-4 sticky top-0 z-50 bg-transparent">
      <div className="p-3 bg-white shadow border rounded-full md:rounded-full w-[95%] lg:w-10/12 mx-auto flex items-center justify-between max-w-7xl relative">
        <div className="flex items-center gap-2 text-primary pl-2">
          <Image src={"/img/logo.webp"} alt="logo" width={40} height={40} />
          <p className="text-2xl lg:text-3xl font-bold">Rajapay</p>
        </div>

        <div className="hidden lg:flex h-10 items-center gap-8">
          {navLink.map((item, index) => {
            const isActive = checkActive(item.href);

            return (
              <Link
                key={index}
                href={item.href}
                className={`transition-colors ${
                  isActive
                    ? "text-secondary font-semibold"
                    : "hover:text-secondary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
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
          <div className="absolute top-20 left-0 right-0 bg-white border shadow-lg rounded-2xl p-6 flex flex-col gap-4 lg:hidden mx-auto w-full z-50">
            {navLink.map((item, index) => {
              const isActive = checkActive(item.href);

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-lg font-medium border-b pb-2 ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Button className="rounded-full w-full mt-2">
              Download Rajapay
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
