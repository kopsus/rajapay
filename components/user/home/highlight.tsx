import Image from "next/image";

export const Highlight = () => {
  return (
    <div className="container-section">
      <div className="grid grid-cols-3 gap-6 w-11/12 max-w-7xl mx-auto">
        <div className="pt-6 px-6 rounded-[24px] bg-[#F3F5F8] flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-semibold text-3xl text-primary">Harga Murah</p>
            <p className="text-sm text-[#4D5461]">
              Rajapay memberikan harga terbaik untuk Anda sehingga produk yang
              tersedia di aplikasi Rajapay sangat cocok untuk dijual kembali.
            </p>
          </div>
          <div className="w-full max-w-70 mx-auto">
            <Image
              src="/img/highlight-1.png"
              alt="Rajapay Mobile App"
              width={400}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        <div className="pt-6 px-6 rounded-[24px] bg-[#F3F5F8] flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-semibold text-3xl text-primary">Harga Murah</p>
            <p className="text-sm text-[#4D5461]">
              Rajapay memberikan harga terbaik untuk Anda sehingga produk yang
              tersedia di aplikasi Rajapay sangat cocok untuk dijual kembali.
            </p>
          </div>
          <div className="w-full max-w-70 mx-auto">
            <Image
              src="/img/highlight-1.png"
              alt="Rajapay Mobile App"
              width={400}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        <div className="pt-6 px-6 rounded-[24px] bg-[#F3F5F8] flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="font-semibold text-3xl text-primary">Harga Murah</p>
            <p className="text-sm text-[#4D5461]">
              Rajapay memberikan harga terbaik untuk Anda sehingga produk yang
              tersedia di aplikasi Rajapay sangat cocok untuk dijual kembali.
            </p>
          </div>
          <div className="w-full max-w-70 mx-auto">
            <Image
              src="/img/highlight-1.png"
              alt="Rajapay Mobile App"
              width={400}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
