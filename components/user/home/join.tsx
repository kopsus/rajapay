import Image from "next/image";

export const Join = () => {
  return (
    <div className="container-section">
      <div className="relative max-w-7xl mx-auto h-auto lg:h-112.5 w-full rounded-[24px] bg-linear-to-r from-[#355D8C] via-[#053771] to-[#355D8C] p-8 lg:p-14 overflow-hidden">
        <div className="hidden lg:block max-w-60 absolute left-10 -bottom-10 opacity-40 lg:opacity-100">
          <Image
            src="/img/rajapay-mobile_1.webp"
            alt="Rajapay Mobile App"
            width={400}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="hidden lg:block max-w-60 absolute right-10 -top-10 opacity-40 lg:opacity-100">
          <Image
            src="/img/rajapay-mobile_1.webp"
            alt="Rajapay Mobile App"
            width={400}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center justify-center gap-6 lg:gap-8 h-full">
          <div className="flex flex-col items-center gap-3 lg:gap-4 text-white text-center">
            <p className="text-xl lg:text-3xl font-semibold opacity-90">
              Siap untuk bergabung?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Download Rajapay
            </h2>
            <p className="text-sm lg:text-base opacity-80 leading-relaxed">
              Dengan Rajapay, Anda dapat melakukan transaksi pengisian pulsa,
              paket data, token PLN, dan pembayaran tagihan PPOB secara
              sederhana, tanpa ribet, dari berbagai lokasi dan kapan pun Anda
              inginkan!
            </p>
          </div>

          {/* Download Badges */}
          <div className="flex flex-row items-center justify-center gap-3 w-full">
            <a href="#" className="transition-transform hover:scale-105">
              <Image
                src={"/img/play-store.png"}
                alt="play store"
                width={160}
                height={48}
                className="h-10 lg:h-16 w-auto object-contain"
              />
            </a>
            <a href="#" className="transition-transform hover:scale-105">
              <Image
                src={"/img/app-store.png"}
                alt="app store"
                width={160}
                height={48}
                className="h-10 lg:h-16 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
