export interface IProduct {
  id: string;
  nama: string;
  category_id: string;
  kode: string;
  keterangan: string;
  harga: number;
  status: "Lancar" | "Gangguan" | "Nonaktif";
  createdAt: Date;
  updatedAt: Date;
}
