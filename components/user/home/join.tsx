import Image from "next/image";

export const Join = () => {
  return (
    <div className="container-section">
      <div className="relative max-w-7xl mx-auto h-112.5 w-full rounded-[24px] bg-linear-to-r from-[#355D8C] via-[#053771] to-[#355D8C] p-14 overflow-hidden">
        <div className="max-w-72 absolute left-10 -bottom-10">
          <Image
            src="/img/rajapay-mobile_1.webp"
            alt="Rajapay Mobile App"
            width={400}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="max-w-72 absolute right-10 -top-10">
          <Image
            src="/img/rajapay-mobile_1.webp"
            alt="Rajapay Mobile App"
            width={400}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="relative max-w-xl mx-auto p-6 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-3 text-white text-center">
            <p className="text-3xl font-semibold">Siap untuk bergabung?</p>
            <p className="text-5xl font-semibold">Download Rajapay</p>
            <p>
              Dengan Rajapay, Anda dapat melakukan transaksi pengisian pulsa,
              paket data, token PLN, dan pembayaran tagihan PPOB secara
              sederhana, tanpa ribet, dari berbagai lokasi dan kapan pun Anda
              inginkan!
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/img/play-store.png"}
              alt="play store"
              width={0}
              height={0}
              sizes="100vw"
              className="h-16 w-auto"
            />
            <Image
              src={"/img/app-store.png"}
              alt="app store"
              width={0}
              height={0}
              sizes="100vw"
              className="h-16 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
