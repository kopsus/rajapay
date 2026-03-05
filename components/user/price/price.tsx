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
    <div className="container-section rounded-t-4xl border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-x-6">
        {/* Sidebar */}
        <Card className="col-span-1 p-4 flex flex-col gap-3">
          {categories.map((cat, i) => (
            <Button
              key={i}
              size="lg"
              variant={i === 0 ? "default" : "outline"}
              className="w-full rounded-full"
            >
              {cat}
            </Button>
          ))}
        </Card>

        {/* Table */}
        <Card className="col-span-2 p-4 overflow-hidden">
          <div className="overflow-y-auto">
            <table className="w-full border-separate border-spacing-y-2">
              {/* Header */}
              <thead className="sticky top-0 bg-white z-10">
                <tr className="grid grid-cols-7 gap-1 pb-2">
                  <th className="col-span-1">
                    <Button size="lg" className="rounded-full w-full">
                      Kode
                    </Button>
                  </th>
                  <th className="col-span-2">
                    <Button size="lg" className="rounded-full w-full">
                      Nama
                    </Button>
                  </th>
                  <th className="col-span-2">
                    <Button size="lg" className="rounded-full w-full">
                      Keterangan
                    </Button>
                  </th>
                  <th className="col-span-1">
                    <Button size="lg" className="rounded-full w-full">
                      Harga
                    </Button>
                  </th>
                  <th className="col-span-1">
                    <Button size="lg" className="rounded-full w-full">
                      Status
                    </Button>
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {priceList.map((item, i) => (
                  <tr key={i} className="grid grid-cols-7 gap-1">
                    <td className="py-2 col-span-1">
                      <div className="rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center">
                        {item.kode}
                      </div>
                    </td>

                    <td className="py-2 col-span-2">
                      <div className="rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center">
                        {item.nama}
                      </div>
                    </td>

                    <td className="py-2 col-span-2">
                      <div className="rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center">
                        {item.keterangan}
                      </div>
                    </td>

                    <td className="py-2 col-span-1">
                      <div className="rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center">
                        {item.harga.toLocaleString("id-ID")}
                      </div>
                    </td>

                    <td className="py-2 col-span-1">
                      <div
                        className={`rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center ${
                          item.status === "Lancar"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
