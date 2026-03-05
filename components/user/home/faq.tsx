import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "1. Apa itu Rajapay?",
    content:
      "Rajapay merupakan platform dengan berbagai jenis layanan seperti pengisian pulsa, paket data, isi token listrik, sampai dengan pembayaran tagihan PPOB. Dengan harga grosir, kamu bisa jadi mitra Rajapay untuk jadi agen kecil dan jualan pulsa di mana saja!",
  },
  {
    value: "item-2",
    trigger: "2. Berapa modal awal untuk bisnis pulsa?",
    content:
      "Mulai dari Rp50 ribu doang, kamu sudah bisa memulai bisnis jadi agen pulsa!",
  },
  {
    value: "item-3",
    trigger: "3. Apakah ada biaya pendaftaran kalau pakai Rajapay?",
    content:
      "Sudah pasti tidak perlu biaya pendaftaran karena memang penggunaan, unduh, sampai pendaftarannya sepenuhnya gratis!",
  },
  {
    value: "item-4",
    trigger: "4. Apakah Rajapay bisa digunakan setiap hari selama 24 jam?",
    content:
      "Benar, seluruh layanan pembayaran di Rajapay bisa kamu akses dan pakai selama 24/7. Termasuk juga dukungan dari kami untuk mengatasi berbagai masalah ketika kamu pakai aplikasi.",
  },
];

export const Faq = () => {
  return (
    <div className="container-section">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <p className="text-primary text-5xl font-semibold leading-16 max-w-3xl mx-auto text-center">
          Pertanyaan yang Sering Ditanyakan
        </p>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full max-w-5xl mx-auto"
        >
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
