import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative py-10 lg:py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-9/12 bg-[url(/img/bg-star.png)] bg-cover bg-center bg-no-repeat opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-9/12 bg-[url(/img/bg-abstrack.png)] bg-cover bg-center bg-no-repeat opacity-60" />

      <div className="pointer-events-none absolute -left-20 md:-left-40 top-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#053771]/40 to-[#0A69D7]/40 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
      <div className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#EF8659]/40 to-[#894D33]/40 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />

      <div className="relative flex flex-col items-center gap-10 lg:gap-14 px-6">
        <div className="flex flex-col items-center gap-6 w-full max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight lg:leading-16">
              Aplikasi isi Pulsa & <br className="hidden md:block" /> PPOB{" "}
              <span className="text-secondary">TERMUDAH</span>
            </h1>
            <p className="text-[#4D5461] text-sm md:text-base lg:text-lg max-w-xl">
              Rajapay hadir memberikan kemudahan dalam transaksi pengisian
              pulsa, paket data, token PLN, dan pembayaran Tagihan PPOB yang
              sangat mudah dari mana saja dan kapan saja!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              className="rounded-full px-5 py-4 h-auto text-sm lg:text-base"
              size={"lg"}
            >
              Download Rajapay
            </Button>
            <Button
              className="rounded-full px-5 py-4 h-auto text-sm lg:text-base"
              size={"lg"}
              variant={"outline"}
            >
              Daftar Harga <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="w-full max-w-70 md:max-w-xs lg:max-w-md">
          <Image
            src="/img/rajapay-mobile_1.webp"
            alt="Rajapay Mobile App"
            width={400}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};
