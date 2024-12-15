import React from "react";
import BackButton from "@/app/components/BackButton";

const ConfirmationPage = () => {
  return (
    <>
      <div className="mx-8 mt-5">
        <BackButton></BackButton>
        <div className="mt-5 w-full flex flex-col gap-2 mb-60">
          <h1 className="text-2xl font-bold">Haiii Conners !!!</h1>
          <p className="text-sm">Thank you sudah daftar yaa...</p>
          <p className="text-sm">
            Selanjutnya bisa langsung <b>konfirmasi pendaftaran</b> ke <br />
            <a
              href="https://wa.me/6285706127776"
              target="_blank"
              rel="noopener noreferrer"
            >
              0857-0612-7776 (Echa)
            </a>
          </p>
          <p className="text-sm">
            Dengan format “Konfirmasi Pendaftaran_Nama Lengkap Peserta_Asal
            Instansi”
          </p>
          <p className="text-sm">
            Dan juga <b>konfirmasi pembayaran</b> ke <br />
            <a
              href="https://wa.me/6281996716532"
              target="_blank"
              rel="noopener noreferrer"
            >
              0819-9671-6532 (Arika)
            </a>
          </p>
          <p className="text-sm">
            Dengan format “Konfirmasi Pendaftaran_Nama Lengkap Peserta_Asal
            Sekolah”
          </p>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
