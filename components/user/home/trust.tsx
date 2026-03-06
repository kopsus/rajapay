import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Trust = () => {
  return (
    <div className="container-section">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col items-center text-center gap-4 lg:gap-6 max-w-4xl mx-auto">
          <h2 className="text-primary text-3xl lg:text-5xl font-semibold leading-tight lg:leading-16">
            Rajapay telah dipercaya sebagai aplikasi isi pulsa terbaik
          </h2>
          <p className="text-[#4D5461] text-sm lg:text-base max-w-2xl">
            Rajapay hadir memberikan kemudahan dalam transaksi pengisian pulsa,
            paket data, token PLN, dan pembayaran Tagihan PPOB yang sangat mudah
            dari mana saja dan kapan saja!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="w-full h-72 lg:h-100 rounded-3xl lg:rounded-4xl bg-radial from-[#6483A7] from-40% to-[#053771] flex items-center justify-center overflow-hidden">
            <Image
              src={"/img/trust.png"}
              alt="trust"
              width={500}
              height={500}
              sizes="100vw"
              className="object-contain w-10/12 lg:w-9/12 h-auto transition-transform hover:scale-105 duration-500"
            />
          </div>

          <div className="flex flex-col gap-8 items-center lg:items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-5 lg:p-6 rounded-3xl bg-[#F3F5F8] space-y-1 lg:space-y-2 text-center lg:text-left">
                <p className="text-primary font-bold text-2xl lg:text-3xl">
                  50.000+
                </p>
                <p className="text-[#4D5461] text-sm lg:text-base">
                  App Download
                </p>
              </div>
              <div className="p-5 lg:p-6 rounded-3xl bg-[#F3F5F8] space-y-1 lg:space-y-2 text-center lg:text-left">
                <p className="text-primary font-bold text-2xl lg:text-3xl">
                  4.8/5
                </p>
                <p className="text-[#4D5461] text-sm lg:text-base">
                  Rating Pengguna
                </p>
              </div>
              <div className="p-5 lg:p-6 rounded-3xl bg-[#F3F5F8] space-y-1 lg:space-y-2 text-center lg:text-left sm:col-span-2 lg:col-span-1">
                <p className="text-primary font-bold text-2xl lg:text-3xl">
                  24/7
                </p>
                <p className="text-[#4D5461] text-sm lg:text-base">
                  Layanan Bantuan
                </p>
              </div>
            </div>

            <Button
              size={"lg"}
              className="rounded-full w-full lg:w-auto px-10 py-6 h-auto text-lg"
            >
              Download Sekarang
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
