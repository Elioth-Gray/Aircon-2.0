"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import {
  BookOpenText,
  CalendarDots,
  PhoneCall,
  Exam,
} from "@phosphor-icons/react/dist/ssr";

const tryout = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-10 mt-5">
        <BackButton />
        {/* Card */}
        <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#1F519A] p-6 px-8 text-white rounded-xl relative overflow-hidden w-full h-auto mt-8 hover:bg-[#E38F49]">
          <div className="p-3 rounded-full bg-[#D9D9D9]">
            <Exam size={35} className="text-black" />
          </div>
          <Image
            src="/Tryout.svg"
            width={150}
            height={150}
            alt="KTI"
            className="absolute bottom-48 left-48"
          ></Image>
          <h1 className="font-winter mt-5 text-2xl w-3/4 text-wrap">
            Try Out & Tour
          </h1>
          <div className="font-sm text-wrap">
            <p>Biaya Pendaftaran:</p>
            <p>
              Rp70.000,00 /orang (Gelombang 1) <br />
              Rp85.000,00 /orang (Gelombang 2) <br />
              Rp100.000,00 /orang (Gelombang 3)
            </p>
          </div>
        </div>
        {/* Tombol Daftar */}
        <button
          className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
          onClick={() =>
            (window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSeku77Dw3BbT8An7L-ME55Leh_Sg2y8ifRu9Zxlyb9pexPEmQ/viewform?usp=sharing")
          }
        >
          Daftar Sekarang
        </button>
        {/* Sub Title */}
        <div className="w-full mt-5 flex flex-col gap-3">
          <div className="w-full flex flex-row justify-start items-center gap-2 text-sm">
            <CalendarDots size={28} />
            <p>23 Desember 2024 - 8 Februari 2025</p>
          </div>
          <div className="w-full flex flex-row justify-start items-center gap-2 text-sm">
            <PhoneCall size={28} />
            <p>
              <a
                href="https://wa.me/6285755765943"
                target="_blank"
                rel="noopener noreferrer"
              >
                CP: +62 857-5576-5943 (Salsa)
              </a>
            </p>
          </div>
        </div>
        <div className="w-full mt-5">
          <h1 className="text-xl font-winter w-full text-wrap uppercase">
            T&T <br /> (TRYOUT & CAMPUS TOUR) <br />
            AIRLANGGA CONVENTION 2.0
          </h1>
          <div className="w-full flex flex-col gap-1">
            <p className="text-wrap mt-2">Halo, para pejuang kampus!</p>
            <p className="text-wrap mt-1">
              Yuk, siapkan dirimu untuk pengalaman seru dan penuh manfaat di
              <b> Tryout & Campus Tour 2024</b>. Ini kesempatan emas buat kamu
              yang ingin mengasah kemampuan akademik sekaligus menjelajahi
              suasana kampus impian!
            </p>
          </div>
          <div>
            <h1 className="text-wrap mt-2 font-bold mb-2">
              📑 Gelombang Pendaftaran:
            </h1>
            <ol className="list-decimal pl-5">
              <li>
                Gelombang 1 : Rp70.000,00 <br /> (23 Desember 2024 - 8 Januari
                2025)
              </li>
              <li>
                Gelombang 2 : Rp85.000,00 <br /> (9 Januari 2025 - 24 Januari
                2025)
              </li>
              <li>
                Gelombang 3 : Rp100.000,00 <br /> (25 Januari 2025 - 8 Februari
                2025)
              </li>
            </ol>
            <p className="text-wrap mt-2 font-semibold">
              📅 Sabtu, 15 Februari 2025 <br />
              📍 Gedung Kuliah Bersama, Kampus C Universitas Airlangga <br />⏰
              07:00 - Selesai
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-2">
          <h1 className="text-2xl font-winter uppercase">
            Apa yang akan kamu dapatkan?
          </h1>
          <p>
            📘 <b>Tryout Ujian Masuk Perguruan Tinggi</b> – Tes simulasi dengan
            soal-soal berbobot dan suasana ujian sesungguhnya!
          </p>
          <p>
            🏫 <b>Campus Tour</b> – Eksplorasi kampus, dari ruang kelas hingga
            fasilitas favorit mahasiswa!
          </p>
          <p>
            🎉 <b>Sesi Sharing & Talkshow</b> – Temui kakak-kakak inspiratif dan
            dapatkan tips lolos PTN!
          </p>
          <p>
            🧑‍💻 <b>Vendor bimbel resmi!</b>
          </p>
          <p>
            Kami sedang berkolaborasi dengan lembaga bimbel terbaik agar kamu
            bisa mendapatkan soal-soal berkualitas dan pembahasan yang jelas.
            Stay tuned, ya!
          </p>
          <p>
            {" "}
            <b>
              Daftarkan dirimu sekarang dan siapkan dirimu menjadi pejuang
              kampus terbaik!
            </b>
          </p>
        </div>
      </div>
      {/* Click to Download Full Guide Book */}
      {/* <div className="w-full flex flex-row justify-between items-center text-center mt-8 mb-2">
        <div className="w-1/3 py-[0.05rem] bg-black"></div>
        <a
          href="https://drive.google.com/drive/folders/1NqIQwkzro_ga1eRvAiQqKyVlCbKIsZn9?usp=drive_link"
          className="w-1/3 text-sm font-bold"
        >
          Click to Download Full Guide Book
        </a>
        <div className="w-1/3 py-[0.05rem] bg-black"></div>
      </div> */}
    </>
  );
};

export default tryout;
