import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Trust = () => {
  return (
    <div className="container-section">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <p className="text-primary text-5xl font-semibold leading-16">
            Rajapay telah dipercaya sebagai aplikasi isi pulsa terbaik
          </p>
          <p className="text-[#4D5461]">
            Rajapay hadir memberikan kemudahan dalam transaksi pengisian pulsa,
            paket data, token PLN, dan pembayaran Tagihan PPOB yg sangat mudah
            dari mana saja dan kapan saja!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-14 items-center">
          <div className="w-full h-100 rounded-4xl bg-radial from-[#6483A7] from-40% to-[#053771]">
            <Image
              src={"/img/trust.png"}
              alt="trust"
              width={0}
              height={0}
              sizes="100vw"
              className="block object-cover w-10/12 h-auto mx-auto"
            />
          </div>
          <div className="flex flex-col gap-6 items-start">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="p-5 rounded-3xl bg-[#F3F5F8] space-y-2">
                <p className="text-primary font-bold text-3xl">50000+</p>
                <p className="text-[#4D5461]">App Download</p>
              </div>
              <div className="p-5 rounded-3xl bg-[#F3F5F8] space-y-2">
                <p className="text-primary font-bold text-3xl">50000+</p>
                <p className="text-[#4D5461]">App Download</p>
              </div>
              <div className="p-5 rounded-3xl bg-[#F3F5F8] space-y-2">
                <p className="text-primary font-bold text-3xl">50000+</p>
                <p className="text-[#4D5461]">App Download</p>
              </div>
            </div>
            <Button size={"lg"} className="rounded-full">
              Download Sekarang
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
