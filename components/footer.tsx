import { Building, Facebook, Instagram, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  const usefull = [
    {
      name: "Harga",
      href: "#",
    },
    {
      name: "Tentang",
      href: "#",
    },
    {
      name: "Produk",
      href: "#",
    },
    {
      name: "Testimoni",
      href: "#",
    },
    {
      name: "Penggunaan",
      href: "#",
    },
    {
      name: "Artikel",
      href: "#",
    },
  ];
  return (
    <div className="relative bg-[#F3F5F8] rounded-t-4xl w-full pt-28.5 pb-6 px-14">
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 h-29 flex items-center justify-between px-5 py-4 bg-primary rounded-full w-4xl max-w-4xl">
        <div className="flex items-center">
          <div className="min-w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <Youtube className="size-10 text-white" />
          </div>
          <div className="text-white px-3">
            <p className="font-semibold text-2xl text-nowrap">Contact Us</p>
            <p>06188803257</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="min-w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <Mail className="size-10 text-white" />
          </div>
          <div className="text-white px-3">
            <p className="font-semibold text-2xl text-nowrap">Email Address</p>
            <p>hello@rajapay.co.id</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="min-w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <Building className="size-10 text-white" />
          </div>
          <div className="text-white px-3">
            <p className="font-semibold text-2xl text-nowrap">
              Office Location
            </p>
            <p>Jl Flamboyan Raya No. 22 Medan</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-5 gap-14">
        <div className="col-span-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Image src={"/img/logo.webp"} alt="logo" width={40} height={40} />
              <p className="font-bold text-primary text-3xl">Rajapay</p>
            </div>
            <p className="text-primary">
              Rajapay hadir memberikan kemudahan dalam transaksi pengisian
              pulsa, paket data, token PLN, dan pembayaran Tagihan PPOB yg
              sangat mudah dari mana saja dan kapan saja!
            </p>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary">
                <Facebook className="text-white" />
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary">
                <Instagram className="text-white" />
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary">
                <Youtube className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-4">
            <p className="uppercase font-semibold text-primary text-lg">
              usefull link
            </p>
            <div className="flex items-start flex-col gap-2">
              {usefull.map((item, index) => (
                <Link key={index} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            <p className="uppercase font-semibold text-primary text-lg">
              Newsletter
            </p>
            <p className="text-[#4D5461]">
              Jangan lewatkan informasi lainnya. <br />
              Kami akan memberikan penawaran terbaik tiap minggunya. Bukanlah
              spam.
            </p>
            <div className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Email Anda"
                className="border-primary rounded-full h-12"
              />
              <Button size={"lg"} className="rounded-full h-12">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-t-2">
          <div className="flex items-center justify-between h-12 text-sm text-primary">
            <p>Copyright 2026 © All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <p>Terms of Services</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
