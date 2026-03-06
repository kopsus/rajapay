import Image from "next/image";

export const Fitur = () => {
  const fiturList = [
    {
      imgUrl: "/img/fitur-1.png",
      title: "Voucher Data",
      desc: "Telkomsel, Indosat, Tri, XL, Axis, Smartfren.",
    },
    {
      imgUrl: "/img/fitur-2.png",
      title: "Voucher Game",
      desc: "Mobile Legend, Free Fire dan lainnya.",
    },
    {
      imgUrl: "/img/fitur-3.png",
      title: "Uang Elektronik",
      desc: "Ovo, LinkAja, Dana, M-Tix, ShopeePay.",
    },
    {
      imgUrl: "/img/fitur-4.png",
      title: "Transfer Bank",
      desc: "Bank BRI, Bank Mandiri, Bank BNI, Bank BCA, dan lainnya.",
    },
    {
      imgUrl: "/img/fitur-5.png",
      title: "Transfer Pulsa",
      desc: "Telkomsel, Indosat, Tri, XL, Axis, Smartfren.",
    },
    {
      imgUrl: "/img/fitur-6.png",
      title: "Lainnya",
      desc: "Paket Data, Paket SMS dan Telepon, Token PLN, dan lainnya",
    },
  ];

  return (
    <div className="container-section bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col items-center text-center gap-4 lg:gap-6 max-w-3xl mx-auto">
          <h2 className="text-primary text-3xl lg:text-5xl font-semibold leading-tight lg:leading-16">
            Beragam Fitur pilihan
          </h2>
          <p className="text-[#4D5461] text-sm lg:text-base">
            Di Rajapay, Anda dapat melakukan pembelian voucher data, game,
            transfer pulsa dan lainnya dengan mudah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {fiturList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 lg:gap-6 group"
            >
              <div className="w-full max-w-70 lg:max-w-none overflow-hidden rounded-3xl lg:rounded-4xl shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 lg:gap-3 items-center w-full max-w-70 text-center px-2">
                <p className="font-semibold text-xl lg:text-2xl text-primary">
                  {item.title}
                </p>
                <p className="text-[#4D5461] text-xs lg:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
