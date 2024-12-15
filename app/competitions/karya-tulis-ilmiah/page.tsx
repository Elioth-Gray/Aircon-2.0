"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import {
  BookOpenText,
  CalendarDots,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";

const karyatulisilmiah = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-10 mt-5">
        <BackButton />
        {/*  */}
        {/* Card */}
        <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#1F519A] p-6 px-8  text-white rounded-xl relative overflow-hidden w-full h-auto mt-8">
          <div className="p-3 rounded-full bg-[#D9D9D9]">
            <BookOpenText size={35} className="text-black" />
          </div>
          <Image
            src="/KTI.svg"
            width={200}
            height={200}
            alt="KTI"
            className="absolute bottom-28 left-56"
          ></Image>
          <h1 className="font-winter mt-5 text-2xl w-3/4 text-wrap">
            Karya Tulis Ilmiah
          </h1>
          <div>
            <p>Biaya Pendaftaran:</p>
            <p>GRATIS (Tahap Awal)</p>
          </div>
        </div>
        {/*  */}
        {/* Tombol Daftar */}
        <button
          className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
          onClick={() =>
            router.push("/competitions/karya-tulis-ilmiah/pendaftaran")
          }
        >
          Daftar Sekarang
        </button>{" "}
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
              CP: +62 819-9671-6532 (Fajri)
            </p>
          </div>
        </div>
        {/*  */}
        {/* Tema */}
        <div className="w-full mt-5">
          <h1 className="text-2xl font-winter w-full text-wrap uppercase">
            Tema:
          </h1>
          <p className="text-wrap">
            “Sinergi Generasi Post-Millenial dan Teknologi dalam Menjawab
            Tantangan Menuju Indonesia Emas 2045”
          </p>
        </div>
        {/*  */}
        {/* Sub Tema */}
        <div className="w-full flex flex-row justify-between mt-5 ">
          <div className="w-1/2 m-1">
            <h1 className="text-2xl font-winter w-full text-wrap uppercase">
              Sub Tema:
            </h1>
            <p className="text-wrap">Lingkup Sains & Teknologi:</p>
            <p className="text-wrap">1. Lingkungan</p>
            <p className="text-wrap">2. Kesehatan</p>
            <p className="text-wrap">3. Teknologi</p>
          </div>
          <div className="w-1/2 m-1">
            <h1 className="text-2xl font-winter w-full text-wrap uppercase">
              <br />
            </h1>
            <p className="text-wrap">Lingkup Sosial & Humaniora:</p>
            <p className="text-wrap">1. Ekonomi</p>
            <p className="text-wrap">2. Sosial Budaya</p>
            <p className="text-wrap">3. Pendidikan</p>
          </div>
        </div>
        {/*  */}
        {/* Ketentuan Peserta */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">Ketentuan Peserta:</h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-alpha pl-5 flex flex-col gap-1"
              style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Peserta merupakan siswa/i SMA atau SMK sederajat dari kelas X,
                XI, dan XII se-Jawa Timur, yang masih <b>AKTIF</b> dengan
                dibuktikan dengan scan Kartu Pelajar atau Surat Keterangan
                Pelajar dari Kepala Sekolah yang bersangkutan
              </li>
              <li className="text-wrap">
                Satu tim terdiri dari maksimal 3 orang pelajar SMA/SMK/MA
                sederajat se-Jawa Timur yang berasal dari sekolah yang sama
              </li>
              <li className="text-wrap">
                Setiap sekolah diperbolehkan untuk mengirim lebih dari 1
                kelompok
              </li>
              <li className="text-wrap">
                Setiap peserta hanya boleh terdaftar pada tepat 1 (satu) tim
                pada cabang kompetisi yang sama
              </li>
              <li className="text-wrap">
                Selama kompetisi berlangsung, peserta dilarang untuk mengubah
                komposisi tim
              </li>
              <li className="text-wrap">
                Peserta yang mendaftar berarti bersedia mengikuti seluruh
                rangkaian kegiatan
              </li>
              <li className="text-wrap">
                Ketika mengajukan pengunduran diri, uang pendaftaran pada tahap
                pendaftaran ulang tidak dapat ditarik kembali
              </li>
            </ol>
          </div>
        </div>
        {/*  */}
        {/* Ketentuan Pendaftaran Tahap Awal (Abstrak) */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Ketentuan Pendaftaran TAHAP AWAL (Abstrak):
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Setiap tim diwajibkan mengirim berkas pendaftaran sebagai
                berikut:{" "}
              </li>
              <ul className="list-disc pl-4">
                <li>Abstrak</li>
                <li>
                  Surat Pernyataan Pendaftaran yang dapat diakses melalui link
                  berikut:
                </li>
              </ul>
              <div className="flex flex-col justify-center items-start w-[85%] gap-2">
                <button
                  className="px-5 py-2 border border-black bg-white rounded-full"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/document/d/1FJWrUerRRN2iHgJcsy20xSbkw75FQ5go4EUwtyvMzVA/edit?tab=t.0",
                      "_blank"
                    )
                  }
                >
                  Surat Pernyataan Pendaftaran
                </button>{" "}
                {/* <button className="px-5 py-2 bg-white rounded-full border border-black">
                  Surat Pernyataan Orisinalitas
                </button> */}
              </div>
              <ul className="list-disc pl-4">
                <li>
                  Scan Kartu Pelajar setiap peserta atau Surat Keterangan dari
                  Kepala Sekolah apabila calon peserta kompetisi tidak dapat
                  mengirimkan Kartu Pelajar
                </li>
              </ul>
              <li className="text-wrap">
                Berkas sebagaimana dimaksud dalam poin 1 dikirimkan dalam format
                PDF melalui formulir Pendaftaran AIRCON yang dapat dilakukan
                melalui Website
              </li>
              <li className="text-wrap">
                Setelah mengirim berkas pendaftaran, ketua tim wajib melakukan
                konfirmasi kepada CP: 081394358165 (Fajri) maksimal H+1 setelah
                melakukan pendaftaran dengan format “Konfirmasi Pendaftaran_Nama
                Sekolah_Nama Tim (tokoh Pahlawan)_Nama Ketua Tim” paling lambat
                pada tanggal 3 Januari 2025 pukul 21.00 WIB. Contoh: Konfirmasi
                Pendaftaran_Soemitro Djojohadikoesoemo_SMA Trimurti_Amira
                Dinniah
              </li>
              <li className="text-wrap">
                Apabila terdapat tim yang telah melakukan pendaftaran tetapi
                tidak melakukan konfirmasi pendaftaran, maka dianggap{" "}
                <b>TIDAK MENDAFTARKAN DIRI</b>
              </li>
            </ol>
          </div>
        </div>
        {/*  */}
        {/* Ketentuan Pendaftaran Tahap Lanjut (Full Paper) */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Ketentuan Pendaftaran TAHAP LANJUTAN <br /> (FULL PAPER)
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol
              className="list-decimal pl-5 flex flex-col gap-1"
              style={{ listStyleType: "lower-alpha" }}
            >
              <li className="text-wrap">
                Tim yang lolos seleksi abstrak dapat mengembangkan karya tulis
                ilmiah penuh sesuai dengan panduan yang diberikan oleh panitia,
                dilanjutkan pengumpulan karya (paper) beserta surat pernyataan
                orisinalitas. Surat Pernyataan Orisinalitas dapat diunduh
                melalui link berikut:
              </li>
              <ul className="list-disc pl-4">
                <li>
                  Surat Pernyataan Pendaftaran yang dapat diakses melalui link
                  berikut:
                </li>
              </ul>
              <div className="flex flex-col justify-center items-start w-[85%] gap-2">
                <button
                  className="px-5 py-2 border border-black bg-white rounded-full"
                  onClick={() =>
                    window.open(
                      "https://bit.ly/SuratPernyataanKeaslianKaryaLKTIAircon2024",
                      "_blank"
                    )
                  }
                >
                  Surat Keaslian Karya
                </button>{" "}
                <button
                  className="px-5 py-2 bg-white rounded-full border border-black"
                  onClick={() =>
                    window.open(
                      "https://bit.ly/LembarPengesahanLKTIAircon2024",
                      "_blank"
                    )
                  }
                >
                  Lembar Pengesahan
                </button>
              </div>
              <li className="text-wrap">
                Setiap tim diperkenankan membayar biaya pendaftaran sebesar:
              </li>
              <ol className="list-disc pl-4">
                <li>Rp100.000,- untuk Gelombang 1 (9 - 15 Januari 2025)</li>
                <li>Rp125.000,- untuk Gelombang 2 (16 - 22 Januari 2025)</li>
                <li>Rp150.000,- untuk Gelombang 3 (23 - 29 Januari 2025)</li>
                <li>
                  Untuk mengikuti tahap berikutnya. Biaya dapat dikirim melalui
                  : MANDIRI: 1420021866396 A.N. ARIKA TRI WULANDARI Apabila
                  terjadi ekstensi, tanggal dan biaya pendaftaran akan
                  diinformasikan berikutnya pada laman media sosial Airlangga
                  Convention. Bukti transfer dengan format “Nama Sekolah_Nama
                  Tim (tokoh Pahlawan)_Nama Ketua Tim”
                </li>
              </ol>
              <li className="text-wrap">
                Semua berkas sebagaimana dimaksud dalam poin 1 dikirimkan dalam
                format PDF
              </li>
              <li>
                Dari tim yang mengirimkan full paper, 10 tim terbaik akan
                dipilih sebagai finalis
              </li>
              <li>
                Apabila peserta telah melakukan pembayaran dan pendaftaran ulang
                pada tahap full paper, maka pembayaran tidak dapat ditarik
                kembali
              </li>
              <li>
                Apabila terdapat tim yang telah melakukan pendaftaran tetapi
                tidak melakukan konfirmasi pendaftaran, maka dianggap{" "}
                <b>TIDAK MENDAFTARKAN DIRI</b>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/*  */}
      {/* Click to Download Full Guide Book */}
      <div className="w-full flex flex-row justify-between items-center text-center mt-8 mb-2">
        <div className="w-1/3 py-[0.05rem] bg-black"></div>
        <a
          href="https://drive.google.com/drive/folders/1NjYSYYtaygay5H9q7jCGSjE0XBSU--Av?usp=drive_link"
          className="w-1/3 text-sm font-bold"
        >
          Click to Download Full Guide Book
        </a>
        <div className="w-1/3 py-[0.05rem] bg-black"></div>
      </div>
      {/*  */}
      {/* Pengumuman Lolos Tahap Abstrak */}
      <div className="mx-10 mt-8 mb-2">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1 className="font-winter text-xl w-3/4 text-wrap text-center">
            Pengumuman Lolos Tahap Abstrak
          </h1>
          <button className="py-2 px-4 rounded-lg text-sm bg-white shadow-lg">
            Cek Di Sini
          </button>
        </div>
      </div>
    </>
  );
};

export default karyatulisilmiah;
