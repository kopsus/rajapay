import { BadgeCheck } from "lucide-react";
import Image from "next/image";

export const Why = () => {
  const whyList = [
    { name: "Pendaftaran mudah dan gratis" },
    { name: "Transaksi cepat dan anti ribet" },
    { name: "Tersedia fitur cetak struk" },
    { name: "Terdapat fitur affiliasi" },
    { name: "Metode Top up lengkap" },
    { name: "Kirim saldo ke sesama user Rajapay" },
    { name: "Setting harga jual ke pelanggan Anda" },
    { name: "Tersedia fitur kasir" },
  ];

  return (
    <div className="container-section">
      <div className="flex flex-col gap-8 lg:gap-14 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 lg:gap-6 max-w-3xl mx-auto">
          <h2 className="text-primary text-3xl lg:text-5xl font-semibold">
            Mengapa Rajapay?
          </h2>
          <p className="text-[#4D5461] text-sm lg:text-base">
            Rajapay merupakan aplikasi Unggulan yang menyediakan beragam produk
            pilihan. Mau isi pulsa, paket data, Token PLN dan pembayaran tagihan
            atau PPOB? tentu saja Rajapay Rajanya!
          </p>
        </div>

        <div className="relative p-6 lg:p-14 rounded-[24px] bg-[#F9FAFB] h-auto lg:h-128 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-9/12 bg-[url(/img/bg-abstrack.png)] bg-cover bg-center bg-no-repeat opacity-60" />
          <div className="pointer-events-none absolute -left-20 md:-left-40 top-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#053771]/10 to-[#0A69D7]/10 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
          <div className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#EF8659]/10 to-[#894D33]/10 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center h-full w-full">
            <div className="relative w-full max-w-3xl aspect-video lg:aspect-4/3 rounded-[24px] lg:rounded-[32px] overflow-hidden bg-gray-100 shadow-sm">
              <Image
                src="/img/why.png"
                alt="why"
                fill
                className="object-cover"
              />

              <div className="absolute top-3 left-3 lg:top-4 lg:left-4 bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-md">
                <Image
                  src="/img/logo.webp"
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-contain lg:w-15 lg:h-15"
                />
              </div>

              <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 bg-white/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-md">
                <Image
                  src="/img/why1.png"
                  alt="icon"
                  width={35}
                  height={35}
                  className="object-contain lg:w-12.5 lg:h-12.5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
              {whyList.map((item, index) => (
                <div
                  key={index}
                  className="p-2 lg:p-2.5 flex items-center gap-3 lg:gap-4 rounded-full bg-white border shadow-sm"
                >
                  <div className="min-w-8 h-8 lg:min-w-10 lg:h-10 rounded-full bg-[#ECF8EF] flex items-center justify-center">
                    <BadgeCheck className="text-[#43B75D] w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <p className="text-xs lg:text-sm font-medium pr-4">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
