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
      <div className="mx-10 mt-5 lg:mx-28">
        <BackButton />
        {/* Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 lg:mt-3">
          <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#1F519A] p-6 px-8 text-white rounded-xl relative overflow-clip w-full h-full mt-8 lg:col-span-1">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <BookOpenText size={35} className="text-black" />
            </div>
            <Image
              src="/KTI.svg"
              width={200}
              height={200}
              alt="KTI"
              className="absolute bottom-32 left-80"
            ></Image>
            <h1 className="font-winter mt-5 text-2xl w-3/4 text-wrap">
              Infografis
            </h1>
            <div>
              <p>Biaya Pendaftaran:</p>
              <p>GRATIS (Tahap Awal)</p>
            </div>
          </div>
          {/*  */}
          <div className="lg:w-full items-center lg:col-span-2">
            <h1 className="font-winter text-6 w-full text-4xl lg:mt-4">
              Infografis
            </h1>
            {/*  */}
            {/* Sub Title */}
            <div className="w-full mt-5 flex flex-col gap-3">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <CalendarDots size={28} />
                <p className="text-sm font-semibold">
                  16 Desember 2024 - 22 Januari 2025
                </p>
              </div>
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <PhoneCall size={28} />
                <p className="text-sm font-semibold">
                  <a
                    href="https://wa.me/6281996716532"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CP: +62 819-9671-6532 (Fajri)
                  </a>
                </p>
              </div>
            </div>
            {/*  */}
            {/* Tombol Daftar */}
            <button
              className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push(
                  "/competitions/karya-tulis-ilmiah/pendaftaran-tahap-awal"
                )
              }
            >
              Daftar Tahap Awal
            </button>{" "}
            <br />
            <button
              className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
              onClick={() =>
                router.push(
                  "/competitions/karya-tulis-ilmiah/pendaftaran-tahap-lanjut"
                )
              }
            >
              Daftar Tahap Selanjutnya
            </button>{" "}
          </div>
        </div>

        {/*  */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:mt-10 mt-5 lg:gap-5">
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
                  Gelombang 3 : Rp100.000,00 <br /> (25 Januari 2025 - 8
                  Februari 2025)
                </li>
              </ol>
              <p className="text-wrap mt-2 font-semibold">
                📅 Sabtu, 15 Februari 2025 <br />
                📍 Gedung Kuliah Bersama, Kampus C Universitas Airlangga <br />
                ⏰ 07:00 - Selesai
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col mt-5 gap-2">
            <h1 className="text-2xl font-winter uppercase">
              Apa yang akan kamu dapatkan?
            </h1>
            <p>
              📘 <b>Tryout Ujian Masuk Perguruan Tinggi</b> – Tes simulasi
              dengan soal-soal berbobot dan suasana ujian sesungguhnya!
            </p>
            <p>
              🏫 <b>Campus Tour</b> – Eksplorasi kampus, dari ruang kelas hingga
              fasilitas favorit mahasiswa!
            </p>
            <p>
              🎉 <b>Sesi Sharing & Talkshow</b> – Temui kakak-kakak inspiratif
              dan dapatkan tips lolos PTN!
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
