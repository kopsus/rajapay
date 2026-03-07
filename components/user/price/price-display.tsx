"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IProduct } from "@/types/product";
import { IProductCategory } from "@/types/category";

interface PriceDisplayProps {
  initialProducts: IProduct[];
  categories: IProductCategory[];
}

export const PriceDisplay = ({
  initialProducts,
  categories,
}: PriceDisplayProps) => {
  const [selectedCatId, setSelectedCatId] = useState<string | null>(
    categories?.length > 0 ? categories[0].id : null,
  );

  const filteredProducts = initialProducts.filter(
    (product) => product.category_id === selectedCatId,
  );

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-1 lg:h-fit sticky top-24 z-20 bg-white lg:bg-transparent -mx-4 px-4 lg:mx-0 lg:px-0">
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              size="lg"
              variant={selectedCatId === cat.id ? "default" : "outline"}
              className="rounded-full whitespace-nowrap lg:whitespace-normal min-w-fit lg:w-full lg:justify-start"
              onClick={() => setSelectedCatId(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
        {filteredProducts.length === 0 ? (
          <div className="p-10 text-center text-gray-400">
            Belum ada produk untuk kategori ini.
          </div>
        ) : (
          <>
            <div className="lg:hidden flex flex-col gap-4">
              {filteredProducts.map((item) => (
                <Card
                  key={item.id}
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
                      Ket: {item.keterangan || "-"}
                    </p>
                    <p className="text-lg font-bold text-secondary">
                      Rp {Number(item.harga).toLocaleString("id-ID")}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="hidden lg:block overflow-hidden">
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
                  {filteredProducts.map((item) => (
                    <tr key={item.id} className="grid grid-cols-7 gap-1">
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
                          {item.keterangan || "-"}
                        </div>
                      </td>
                      <td className="py-2 col-span-1">
                        <div className="rounded-full bg-[#F3F5F8] h-full py-3 px-5 flex items-center justify-center text-sm font-semibold">
                          {Number(item.harga).toLocaleString("id-ID")}
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
          </>
        )}
      </div>
    </div>
  );
};
