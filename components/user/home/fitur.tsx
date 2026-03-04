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
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <p className="text-primary text-5xl font-semibold leading-16">
            Beragam Fitur pilihan
          </p>
          <p className="text-[#4D5461]">
            Di Rajapay, Anda dapat melakukan pembelian voucher data, game,
            transfer pulsa dan lainnya dengan mudah.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {fiturList.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-6">
              <Image
                src={item.imgUrl}
                alt="fitur"
                width={0}
                height={0}
                sizes="100vw"
                className="w-70 h-auto rounded-4xl"
              />
              <div className="flex flex-col gap-3 items-center w-70 text-center">
                <p className="font-semibold text-2xl text-primary">
                  {item.title}
                </p>
                <p className="text-[#4D5461] text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
