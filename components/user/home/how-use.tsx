import { Deposit } from "@/lib/icon/deposit";
import { Download } from "@/lib/icon/download";
import { Regist } from "@/lib/icon/regist";
import { Transaction } from "@/lib/icon/transaction";

export const HowUse = () => {
  return (
    <div className="container-section">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <p className="text-primary text-5xl font-semibold leading-16">
            Bagaimana Cara Menggunakan Rajapay?
          </p>
          <p className="text-[#4D5461]">
            Bergabung bersama Rajapay sangat mudah. Silahkan download
            aplikasinya di Google Play Store , kemudian lakukan pendaftaran.
            Hanya beberapa klik saja Anda sudah berhasil membuat akun di
            aplikasi Rajapay
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-6">
            <div className="w-26 h-26 rounded-full bg-[#F3F5F8] flex items-center justify-center">
              <Download />
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <p className="text-3xl font-semibold text-primary">
                Download App
              </p>
              <p className="text-[#4D5461]">
                Download Aplikasi Rajapay pada playstore atau appstore
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 mt-20">
            <div className="w-26 h-26 rounded-full bg-[#F3F5F8] flex items-center justify-center">
              <Regist />
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <p className="text-3xl font-semibold text-primary">
                Registrasi Akun
              </p>
              <p className="text-[#4D5461]">
                Setelah download aplikasi Rajapay silahkan melakukan pendaftaran
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 mt-20">
            <div className="w-26 h-26 rounded-full bg-[#F3F5F8] flex items-center justify-center">
              <Deposit className="fill-transparent" />
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <p className="text-3xl font-semibold text-primary">
                Top up Deposit
              </p>
              <p className="text-[#4D5461]">
                Deposit via transfer bank, Virtual Account, Gerai Retail dan
                Qris
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="w-26 h-26 rounded-full bg-[#F3F5F8] flex items-center justify-center">
              <Transaction className="fill-transparent" />
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <p className="text-3xl font-semibold text-primary">Transaksi</p>
              <p className="text-[#4D5461]">
                Saatnya transaksi dan mulai bisnis dengan aplikasi Rajapay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
