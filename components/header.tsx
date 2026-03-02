import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  const NavLink = [
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
    <div className="w-full py-4 sticky top-0 z-50">
      <div className="p-3 bg-white shadow border rounded-full left-0 right-0 w-10/12 mx-auto flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2 text-primary">
          <Image src={"/img/logo.webp"} alt="logo" width={40} height={40} />
          <p className="text-3xl font-bold">Rajapay</p>
        </div>
        <div className="h-10 flex items-center gap-8">
          {NavLink.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        <Button size={"lg"} className="rounded-full">
          Download Rajapay
        </Button>
      </div>
    </div>
  );
};
