import { Building, Facebook, Instagram, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  const usefull = [
    { name: "Harga", href: "#" },
    { name: "Tentang", href: "#" },
    { name: "Produk", href: "#" },
    { name: "Testimoni", href: "#" },
    { name: "Penggunaan", href: "#" },
    { name: "Artikel", href: "#" },
  ];

  return (
    <div className="relative bg-[#F3F5F8] rounded-t-[40px] w-full pt-40 lg:pt-28.5 pb-6 px-6 lg:px-14 mt-20">
      <div className="absolute -top-16 lg:-top-14 left-1/2 -translate-x-1/2 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 p-6 lg:px-5 lg:py-4 bg-primary rounded-[32px] lg:rounded-full w-[90%] lg:w-4xl max-w-4xl shadow-xl">
        <div className="flex items-center w-full lg:w-auto">
          <div className="min-w-12 h-12 lg:min-w-20 lg:h-20 rounded-full bg-white/10 flex items-center justify-center">
            <Youtube className="size-6 lg:size-10 text-white" />
          </div>
          <div className="text-white px-3">
            <p className="font-semibold text-sm lg:text-2xl text-nowrap">
              Contact Us
            </p>
            <p className="text-xs lg:text-base opacity-90">06188803257</p>
          </div>
        </div>

        <div className="flex items-center w-full lg:w-auto">
          <div className="min-w-12 h-12 lg:min-w-20 lg:h-20 rounded-full bg-white/10 flex items-center justify-center">
            <Mail className="size-6 lg:size-10 text-white" />
          </div>
          <div className="text-white px-3">
            <p className="font-semibold text-sm lg:text-2xl text-nowrap">
              Email Address
            </p>
            <p className="text-xs lg:text-base opacity-90">
              hello@rajapay.co.id
            </p>
          </div>
        </div>

        <div className="flex items-center w-full lg:w-auto">
          <div className="min-w-12 h-12 lg:min-w-20 lg:h-20 rounded-full bg-white/10 flex items-center justify-center">
            <Building className="size-6 lg:size-10 text-white" />
          </div>
          <div className="text-white px-3">
            <p className="font-semibold text-sm lg:text-2xl text-nowrap">
              Office Location
            </p>
            <p className="text-xs lg:text-base opacity-90">
              Jl Flamboyan Raya No. 22 Medan
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 lg:mt-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image src={"/img/logo.webp"} alt="logo" width={40} height={40} />
              <p className="font-bold text-primary text-3xl">Rajapay</p>
            </div>
            <p className="text-primary text-sm lg:text-base leading-relaxed">
              Rajapay hadir memberikan kemudahan dalam transaksi pengisian
              pulsa, paket data, token PLN, dan pembayaran Tagihan PPOB yang
              sangat mudah dari mana saja dan kapan saja!
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-primary hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  <Icon size={20} className="text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col gap-4">
            <p className="uppercase font-bold text-primary text-sm tracking-wider">
              Useful Links
            </p>
            <div className="flex flex-col gap-2 text-primary/80">
              {usefull.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-primary transition-colors text-sm lg:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex flex-col gap-4">
            <p className="uppercase font-bold text-primary text-sm tracking-wider">
              Newsletter
            </p>
            <p className="text-[#4D5461] text-sm">
              Jangan lewatkan informasi lainnya. Kami akan memberikan penawaran
              terbaik tiap minggunya.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-2">
              <Input
                type="email"
                placeholder="Email Anda"
                className="border-primary rounded-full h-12 w-full"
              />
              <Button
                size={"lg"}
                className="rounded-full h-12 w-full sm:w-auto px-8"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-5 border-t border-primary/10 mt-6 lg:mt-0">
          <div className="flex flex-col lg:flex-row items-center justify-between py-6 gap-4 text-xs lg:text-sm text-primary/70">
            <p className="order-2 lg:order-1">
              Copyright 2026 © All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 order-1 lg:order-2">
              <Link href="#" className="hover:underline">
                Terms of Services
              </Link>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
