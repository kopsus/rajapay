import { BadgeCheck, CheckCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const Why = () => {
  const whyList = [
    {
      name: "Pendaftaran mudah dan gratis",
    },
    {
      name: "Transaksi cepat dan anti ribet",
    },
    {
      name: "Tersedia fitur cetak struk",
    },
    {
      name: "Terdapat fitur affiliasi",
    },
    {
      name: "Metode Top up lengkap",
    },
    {
      name: "Kirim saldo ke sesama user Rajapay",
    },
    {
      name: "Setting harga jual ke pelanggan Anda",
    },
    {
      name: "Tersedia fitur kasir",
    },
  ];

  return (
    <div className="container-section">
      <div className="flex flex-col gap-14 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <p className="text-primary text-5xl font-semibold">
            Mengapa Rajapay?
          </p>
          <p className="text-[#4D5461]">
            Rajapay merupakan aplikasi Unggulan yang menyediakan beragam produk
            pilihan. Mau isi pulsa, paket data, Token PLN dan pembayaran tagihan
            atau PPOB? tentu saja Rajapay Rajanya !.
          </p>
        </div>
        <div className="relative p-14 rounded-[24px] bg-[#F9FAFB] h-128 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-9/12 bg-[url(/img/bg-abstrack.png)] bg-cover bg-center bg-no-repeat opacity-60" />
          <div className="pointer-events-none absolute -left-20 md:-left-40 top-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#053771]/10 to-[#0A69D7]/10 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
          <div className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-r from-[#EF8659]/10 to-[#894D33]/10 rounded-full blur-3xl opacity-20 md:opacity-30 z-0" />
          <div className="relative grid grid-cols-2 gap-14 items-center h-full w-full">
            <div className="relative w-full max-w-3xl aspect-4/3 rounded-[32px] overflow-hidden bg-gray-100">
              {/* Main Image */}
              <Image
                src="/img/why.png"
                alt="why"
                fill
                className="object-cover"
              />

              {/* Logo Kiri Atas */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md">
                <Image
                  src="/img/logo.webp"
                  alt="logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Icon Kanan Bawah */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md">
                <Image
                  src="/img/why1.png"
                  alt="icon"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyList.map((item, index) => (
                <div
                  key={index}
                  className="p-2 flex items-center gap-4 rounded-full bg-white border"
                >
                  <div className="min-w-10 h-10 rounded-full bg-[#ECF8EF] flex items-center justify-center">
                    <BadgeCheck className="text-[#43B75D]" />
                  </div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
