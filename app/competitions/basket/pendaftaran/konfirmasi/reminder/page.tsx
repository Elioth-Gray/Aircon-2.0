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
            Selanjutnya bisa langsung konfirmasi pendaftaran dan menyertakan
            bukti pembayaran ke {""}
            <a
              href="https://wa.me/6285236141552"
              target="_blank"
              rel="noopener noreferrer"
            >
              0852-3614-1552 (Jea)
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
