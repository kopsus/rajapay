import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Price = () => {
  const categories = [
    "Paket Data Axis Data",
    "Paket Data by.U",
    "Paket Data IM3 Ooredoo",
    "Paket Data Smartfren Data",
    "Paket Data Telkomsel Data",
    "Paket Data Tri Data",
  ];

  const priceList = [
    {
      kode: "AB1",
      nama: "Axis AIGO 3GB + Kuota Dikota-Mu, 28hr",
      keterangan: "-",
      harga: 20535,
      status: "Lancar",
    },
    {
      kode: "AB2",
      nama: "Axis AIGO 5GB + Kuota Dikota-Mu, 28hr",
      keterangan: "-",
      harga: 25500,
      status: "Lancar",
    },
    {
      kode: "AB3",
      nama: "Axis AIGO 8GB + Kuota Dikota-Mu, 28hr",
      keterangan: "-",
      harga: 32000,
      status: "Lancar",
    },
    {
      kode: "AB4",
      nama: "Axis AIGO 10GB + Kuota Dikota-Mu, 28hr",
      keterangan: "-",
      harga: 39500,
      status: "Lancar",
    },
    {
      kode: "AB5",
      nama: "Axis AIGO 15GB + Kuota Dikota-Mu, 28hr",
      keterangan: "-",
      harga: 48000,
      status: "Lancar",
    },
    {
      kode: "AB6",
      nama: "Axis AIGO 25GB + Kuota Dikota-Mu, 28hr",
      keterangan: "-",
      harga: 65000,
      status: "Gangguan",
    },
  ];

  return (
    <div className="container-section rounded-t-[40px] border-t px-4 lg:px-0 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar Kategori - Menjadi Horizontal Scroll di Mobile */}
        <div className="col-span-1 lg:h-fit sticky top-24 z-20 bg-white lg:bg-transparent -mx-4 px-4 lg:mx-0 lg:px-0">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 no-scrollbar">
            {categories.map((cat, i) => (
              <Button
                key={i}
                size="lg"
                variant={i === 0 ? "default" : "outline"}
                className="rounded-full whitespace-nowrap lg:whitespace-normal min-w-fit lg:w-full lg:justify-start"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* List Harga */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
          {/* TAMPILAN MOBILE: Card Style (Hanya muncul di bawah LG) */}
          <div className="lg:hidden flex flex-col gap-4">
            {priceList.map((item, i) => (
              <Card
                key={i}
                className="p-4 flex flex-col gap-3 border-l-4 border-l-primary shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                    {item.kode}
                  </span>
                  <span
                    className={`text-xs font-bold ${item.status === "Lancar" ? "text-green-500" : "text-red-500"}`}
                  >
                    ● {item.status}
                  </span>
                </div>
                <p className="font-semibold text-primary leading-tight">
                  {item.nama}
                </p>
                <div className="flex justify-between items-center border-t pt-3">
                  <p className="text-sm text-gray-500 italic">
                    Ket: {item.keterangan}
                  </p>
                  <p className="text-lg font-bold text-secondary">
                    Rp {item.harga.toLocaleString("id-ID")}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* TAMPILAN DESKTOP: Original Table (Hanya muncul di LG ke atas) */}
          <div className="hidden lg:block overflow-hidden border-none shadow-none">
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-2">
                <thead className="sticky top-0 bg-white z-10">
                  <tr className="grid grid-cols-7 gap-1 pb-2">
                    <th className="col-span-1">
                      <Button
                        size="lg"
                        className="rounded-full w-full pointer-events-none"
                      >
                        Kode
                      </Button>
                    </th>
                    <th className="col-span-2">
                      <Button
                        size="lg"
                        className="rounded-full w-full pointer-events-none"
                      >
                        Nama
                      </Button>
                    </th>
                    <th className="col-span-2">
                      <Button
                        size="lg"
                        className="rounded-full w-full pointer-events-none"
                      >
                        Keterangan
                      </Button>
                    </th>
                    <th className="col-span-1">
                      <Button
                        size="lg"
                        className="rounded-full w-full pointer-events-none"
                      >
                        Harga
                      </Button>
                    </th>
                    <th className="col-span-1">
                      <Button
                        size="lg"
                        className="rounded-full w-full pointer-events-none"
                      >
                        Status
                      </Button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceList.map((item, i) => (
                    <tr key={i} className="grid grid-cols-7 gap-1">
                      <td className="py-2 col-span-1">
                        <div className="rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center text-sm">
                          {item.kode}
                        </div>
                      </td>
                      <td className="py-2 col-span-2">
                        <div className="rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center text-sm text-center">
                          {item.nama}
                        </div>
                      </td>
                      <td className="py-2 col-span-2">
                        <div className="rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center text-sm">
                          {item.keterangan}
                        </div>
                      </td>
                      <td className="py-2 col-span-1">
                        <div className="rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center text-sm font-semibold">
                          {item.harga.toLocaleString("id-ID")}
                        </div>
                      </td>
                      <td className="py-2 col-span-1">
                        <div
                          className={`rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center text-sm font-bold ${item.status === "Lancar" ? "text-green-500" : "text-red-500"}`}
                        >
                          {item.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
