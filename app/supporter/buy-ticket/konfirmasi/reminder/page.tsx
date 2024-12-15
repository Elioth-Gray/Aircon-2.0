import React from "react";
import BackButton from "@/app/components/BackButton";

const ConfirmationPage = () => {
  return (
    <>
      <div className="mx-8 mt-5">
        <BackButton></BackButton>
        <div className="mt-5 w-full flex flex-col gap-2 mb-60">
          <h1 className="text-2xl font-bold">See You on Tribun !!!</h1>
          <p className="text-sm">
            Selanjutnya bisa konfirmasi pembayaran DP ke <br />
            {""}
            <a
              href="https://wa.me/6287818043080"
              target="_blank"
              rel="noopener noreferrer"
            >
              0878-1804-3080 (Delaila)
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
