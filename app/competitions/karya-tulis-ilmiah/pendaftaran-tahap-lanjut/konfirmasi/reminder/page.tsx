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
              href="https://wa.me/6281996716532"
              target="_blank"
              rel="noopener noreferrer"
            >
              0819-9671-6532 (Fajri)
            </a>
          </p>
          <p className="text-sm">
            Dengan format “Konfirmasi Pendaftaran_Nama Sekolah_Nama Tim (Tokoh
            Pahlawan)_Nama Ketua Tim”
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
            Dengan format “Nama Sekolah_Nama Tim (tokoh Pahlawan)_Nama Ketua
            Tim”
          </p>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
