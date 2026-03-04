import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Quote } from "@/lib/icon/quote";

export const Testimoni = () => {
  const testimoniList = [
    {
      ulasan:
        "Sempat ragu download aplikasi ini. Tapi akhirnya nekad juga. Eh ternyata bagus banget looohhh. Transaksi aman, lancar. Fitur banyak, sangat oke. Rekomend bgt dah buat usaha PPOB",
      nama: "Sani Alfiah",
      jabatan: "Member Rajapay",
    },
    {
      ulasan:
        "Sempat ragu download aplikasi ini. Tapi akhirnya nekad juga. Eh ternyata bagus banget looohhh. Transaksi aman, lancar. Fitur banyak, sangat oke. Rekomend bgt dah buat usaha PPOB",
      nama: "Sani Alfiah",
      jabatan: "Member Rajapay",
    },
    {
      ulasan:
        "Sempat ragu download aplikasi ini. Tapi akhirnya nekad juga. Eh ternyata bagus banget looohhh. Transaksi aman, lancar. Fitur banyak, sangat oke. Rekomend bgt dah buat usaha PPOB",
      nama: "Sani Alfiah",
      jabatan: "Member Rajapay",
    },
    {
      ulasan:
        "Sempat ragu download aplikasi ini. Tapi akhirnya nekad juga. Eh ternyata bagus banget looohhh. Transaksi aman, lancar. Fitur banyak, sangat oke. Rekomend bgt dah buat usaha PPOB",
      nama: "Sani Alfiah",
      jabatan: "Member Rajapay",
    },
    {
      ulasan:
        "Sempat ragu download aplikasi ini. Tapi akhirnya nekad juga. Eh ternyata bagus banget looohhh. Transaksi aman, lancar. Fitur banyak, sangat oke. Rekomend bgt dah buat usaha PPOB",
      nama: "Sani Alfiah",
      jabatan: "Member Rajapay",
    },
    {
      ulasan:
        "Sempat ragu download aplikasi ini. Tapi akhirnya nekad juga. Eh ternyata bagus banget looohhh. Transaksi aman, lancar. Fitur banyak, sangat oke. Rekomend bgt dah buat usaha PPOB",
      nama: "Sani Alfiah",
      jabatan: "Member Rajapay",
    },
  ];

  return (
    <div className="container-section">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="relative flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <p className="text-primary text-5xl font-semibold leading-16">
            Ribuan Klien Puas
          </p>
          <p className="text-[#4D5461]">
            Rajapay telah memiliki ribuan ulasan positif dari user Rajapay
          </p>
          <Quote className="fill-[#88A8CD] text-[#88A8CD] rotate-12 size-11 absolute top-1/2 -translate-y-1/2 -right-28" />
          <Quote className="fill-[#FBC8A2] text-[#FBC8A2] rotate-12 size-11 absolute top-1/2 -translate-y-1/2 -left-28" />
        </div>
        <div className="w-full flex items-center gap-2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="gap-4 pl-4">
              {testimoniList.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="p-6 rounded-[10px] bg-[#F3F5F8] shadow border flex flex-col gap-4 md:basis-1/2 xl:basis-1/4"
                >
                  <Quote className="fill-[#F29D79] text-[#F29D79]" />
                  <p className="text-center text-lg text-[#4D5461]">
                    {item.ulasan}
                  </p>
                  <div>
                    <p className="text-[#67646A]">{item.nama}</p>
                    <p className="text-xs text-[#413D45]">{item.jabatan}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
