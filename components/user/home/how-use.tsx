import { Deposit } from "@/lib/icon/deposit";
import { Download } from "@/lib/icon/download";
import { Regist } from "@/lib/icon/regist";
import { Transaction } from "@/lib/icon/transaction";

export const HowUse = () => {
  return (
    <div id="penggunaan" className="container-section">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col items-center text-center gap-4 lg:gap-6 max-w-3xl mx-auto">
          <h2 className="text-primary text-3xl lg:text-5xl font-semibold leading-tight lg:leading-16">
            Bagaimana Cara Menggunakan Rajapay?
          </h2>
          <p className="text-[#4D5461] text-sm lg:text-base">
            Bergabung bersama Rajapay sangat mudah. Silahkan download
            aplikasinya di Google Play Store, kemudian lakukan pendaftaran.
            Hanya beberapa klik saja Anda sudah berhasil membuat akun di
            aplikasi Rajapay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div className="flex flex-col items-center gap-4 lg:gap-6">
            <div className="w-20 h-20 lg:w-26 lg:h-26 rounded-full bg-[#F3F5F8] flex items-center justify-center text-primary">
              <Download />
            </div>
            <div className="flex flex-col items-center text-center gap-2 lg:gap-4">
              <p className="text-2xl lg:text-3xl font-semibold text-primary">
                Download App
              </p>
              <p className="text-[#4D5461] text-sm lg:text-base px-4 lg:px-0">
                Download Aplikasi Rajapay pada playstore atau appstore
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6 lg:mt-20">
            <div className="w-20 h-20 lg:w-26 lg:h-26 rounded-full bg-[#F3F5F8] flex items-center justify-center text-primary">
              <Regist />
            </div>
            <div className="flex flex-col items-center text-center gap-2 lg:gap-4">
              <p className="text-2xl lg:text-3xl font-semibold text-primary">
                Registrasi Akun
              </p>
              <p className="text-[#4D5461] text-sm lg:text-base px-4 lg:px-0">
                Setelah download aplikasi Rajapay silahkan melakukan pendaftaran
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6 lg:mt-20">
            <div className="w-20 h-20 lg:w-26 lg:h-26 rounded-full bg-[#F3F5F8] flex items-center justify-center text-primary">
              <Deposit className="fill-transparent" />
            </div>
            <div className="flex flex-col items-center text-center gap-2 lg:gap-4">
              <p className="text-2xl lg:text-3xl font-semibold text-primary">
                Top up Deposit
              </p>
              <p className="text-[#4D5461] text-sm lg:text-base px-4 lg:px-0">
                Deposit via transfer bank, Virtual Account, Gerai Retail dan
                Qris
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6">
            <div className="w-20 h-20 lg:w-26 lg:h-26 rounded-full bg-[#F3F5F8] flex items-center justify-center text-primary">
              <Transaction className="fill-transparent" />
            </div>
            <div className="flex flex-col items-center text-center gap-2 lg:gap-4">
              <p className="text-2xl lg:text-3xl font-semibold text-primary">
                Transaksi
              </p>
              <p className="text-[#4D5461] text-sm lg:text-base px-4 lg:px-0">
                Saatnya transaksi dan mulai bisnis dengan aplikasi Rajapay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
