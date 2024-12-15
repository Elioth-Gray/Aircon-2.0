"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import {
  BookOpenText,
  CalendarDots,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";
import { Basketball } from "@phosphor-icons/react";

const karyatulisilmiah = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-10 mt-5">
        <BackButton />
        {/* Card */}
        <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#1F519A] p-6 px-8 text-white rounded-xl relative overflow-hidden w-full h-auto mt-8 hover:bg-[#E38F49]">
          <div className="p-3 rounded-full bg-[#D9D9D9]">
            <Basketball size={35} className="text-black" />
          </div>
          <Image
            src="/Cerdascermat.svg"
            width={200}
            height={200}
            alt="Basket"
            className="absolute bottom-32 left-48"
          ></Image>
          <h1 className="font-winter mt-5 text-2xl w-full text-wrap">Basket</h1>
          <div className="text-sm gap-1">
            <p>Biaya Pendaftaran:</p>
            <p>
              Rp450.000,00 /tim (Putra) <br /> Rp400.000,00 /tim (Putri)
            </p>
          </div>
        </div>
        {/* Tombol Daftar */}
        <button
          className="px-5 py-2 border border-white bg-black rounded-lg shadow-lg text-white mt-5 font-bold"
          onClick={() => router.push("/competitions/basket/pendaftaran")}
        >
          Daftar Sekarang
        </button>{" "}
        <div className="w-full mt-5 flex flex-col gap-3">
          <div className="w-full flex flex-row justify-start items-center gap-2">
            <CalendarDots size={28} />
            <p className="text-sm">10 Desember 2024 - 5 Januari 2025</p>
          </div>
          <div className="w-full flex flex-row justify-start items-center gap-2">
            <PhoneCall size={28} />
            <p className="text-sm">
              <a
                href="https://wa.me/6287818043080"
                target="_blank"
                rel="noopener noreferrer"
              >
                CP: +62 878-1804-3080 (Delaila)
              </a>
            </p>
          </div>
        </div>
        {/* Persyaratan Pendaftaran */}
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-winter uppercase">
            Persyaratan Pendaftaran:
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Setiap peserta tim merupakan siswa SMA/SMK/MA sederajat aktif
                yang berada di wilayah Surabaya
              </li>
              <li className="text-wrap">
                Pemain yang mengikuti AirCon Competition merupakan peserta legal
                yang telah terdaftar dan telah memenuhi syarat serta ketentuan
                berlaku
              </li>
              <li className="text-wrap">
                Pemain dengan ketentuan kelahiran 2006-2009 (dibuktikan dengan
                KTP/Akta Kelahiran/atau kartu identitas lainnya yang
                mencantumkan tanggal kelahiran)
              </li>
              <li className="text-wrap">
                Setiap tim BASKET PUTRA dikenakan biaya pendaftaran sebesar
                Rp450.000,-
              </li>
              <li className="text-wrap">
                Setiap tim BASKET PUTRI dikenakan biaya pendaftaran sebesar
                Rp400.000,-
              </li>
              <li className="text-wrap">
                Pendaftaran dilakukan pada tanggal 15 Desember 2023 - 10 Januari
                2024 dengan menyertakan syarat-syarat sebagai berikut dikirim
                melalui google form:
              </li>
              <ol
                className="list-decimal pl-5 flex flex-col gap-1"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>Mengisi formulir pendaftaran</li>
                <li>
                  Setiap tim membayar uang pendaftaran sesuai dengan cabang
                  olahraga
                </li>
                <li>
                  Menyertakan Surat Pernyataan yang diisi, ditandatangani serta
                  dicap basah diatas materai Rp 10.000,- (dengan ketentuan serta
                  peraturan yang dapat diakses di website Aircon 2.0
                </li>
                <li className="text-wrap">
                  Menyerahkan surat pernyataan pada waktu Technical Meeting:
                  <div className="flex flex-col justify-center items-start w-[85%] gap-2 m-2">
                    <button
                      className="px-5 py-2 border border-black bg-white rounded-full"
                      onClick={() =>
                        window.open(
                          "https://bit.ly/SuratPernyataanLombaBasketAIRCON",
                          "_blank"
                        )
                      }
                    >
                      Surat Pernyataan
                    </button>{" "}
                  </div>
                </li>
                <li>Menyertakan fotokopi bukti pembayaran sebanyak 2 lembar</li>
                <li>
                  Menyertakan fotokopi Kartu Tanda Pelajar sebanyak 2 lembar
                  bagi seluruh pemain
                </li>
                <li>
                  Menyertakan foto terbaru berwarna 3:4 sebanyak 3 lembar bagi
                  seluruh pemain dan Official
                </li>
              </ol>
              <li>
                Penyerahan berkas lengkap dapat dilakukan pada Technical Meeting
              </li>
              <li>
                Jumlah peserta yang diperbolehkan terdaftar adalah sebagai
                berikut:
              </li>
              <ol
                className="list-decimal pl-5 flex flex-col gap-1"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>
                  Basket : minimal 7 pemain, maksimal 12 pemain. (Masing-masing
                  team maksimal mendaftarkan 3 Official yang terdiri dari Coach,
                  Manager, dan Official)
                </li>
              </ol>
              <li>
                Pemain wajib membawa co-card yang diberikan panitia di setiap
                pertandingan
              </li>
              <li>Official, Manager dan Coach</li>
              <ol
                className="list-decimal pl-5 flex flex-col gap-1"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>
                  Wajib mengenakan pakaian rapi dan berkerah, celana panjang
                  bahan tidak jeans, dan sepatu
                </li>
                <li>
                  Official, Manager dan Coach yang berada di lapangan maksimal
                  hanya 3 (tiga) orang
                </li>
                <li>
                  Official, Manager dan Coach wajib menggunakan co-card, membawa
                  KTP, dan tidak boleh berganti orang di setiap pertandingan
                </li>
              </ol>
              <li>
                Penyimpangan dari ketentuan diatas maka Official, Manager dan
                Coach tidak berhak mendampingi timnya selama pertandingan
              </li>
              <li>
                Setiap tim tiap cabang diwajibkan mengirimkan perwakilan untuk
                Technical Meeting sebagai berikut:
              </li>
              <ol
                className="list-decimal pl-5 flex flex-col gap-1"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>
                  1 orang pelatih (jika berhalangan dapat digantikan oleh
                  asisten pelatih)
                </li>
                <li>
                  1 orang manajer (jika berhalangan dapat digantikan oleh
                  asisten manager)
                </li>
                <li>
                  1 orang kapten tim (jika berhalangan dapat digantikan oleh
                  anggota tim lainnya)
                </li>
              </ol>
              <li>
                Untuk menghadiri Technical Meeting yang diadakan pada tanggal 13
                Januari 2025 di GKB Kampus C Universitas Airlangga. Jika tidak
                adanya perwakilan dari setiap tim, maka tim yang bersangkutan
                dianggap menyetujui dan harus melaksanakan semua keputusan dan
                kesepakatan yang dihasilkan pada saat Technical Meeting
              </li>
              <li>
                Ketika sudah melakukan pendaftaran, tidak ada refund
                (pengembalian uang)
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Click to Download Full Guide Book */}
      <div className="w-full flex flex-row justify-between items-center text-center mt-8 mb-2">
        <div className="w-1/3 py-[0.05rem] bg-black"></div>
        <a
          href="https://drive.google.com/drive/folders/1NwIrSHTdvjrQsZ7FzdGxF65ZtVPuwW6C?usp=drive_link"
          className="w-1/3 text-sm font-bold"
        >
          Click to Download Full Guide Book
        </a>
        <div className="w-1/3 py-[0.05rem] bg-black"></div>
      </div>
    </>
  );
};

export default karyatulisilmiah;
