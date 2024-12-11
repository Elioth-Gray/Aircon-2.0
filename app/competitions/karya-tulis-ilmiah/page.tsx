import Navbar from "@/app/components/Navbar";
import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import {
  BookOpenText,
  CalendarDots,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";

const karyatulisilmiah = () => {
  return (
    <>
      <div className="mx-10 mt-5">
        <BackButton />
        <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#1F519A] p-6 px-8  text-white rounded-xl relative overflow-hidden w-full h-60 mt-5">
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
          <h1 className="font-bold text-2xl w-3/4 text-wrap">
            Karya Tulis Ilmiah
          </h1>
          <div>
            <p>Biaya Pendaftaran:</p>
            <p>GRATIS (Tahap Awal)</p>
          </div>
        </div>
        <div className="w-full mt-5 flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Infografis</h1>
          <div className="w-full flex flex-row justify-start items-center gap-2">
            <CalendarDots size={28} />
            <p className="text-sm">22 November - 13 Januari</p>
          </div>
          <div className="w-full flex flex-row justify-start items-center gap-2">
            <PhoneCall size={28} />
            <p className="text-sm">CP: +62 858-5026-1694 (Tsalsa)</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between mt-8 ">
          <div className="w-1/2">
            <h1 className="text-2xl font-bold w-full text-wrap uppercase">
              Tema
            </h1>
            <p className="text-wrap">
              "The Optimization of Gen Z's Role in Human Resource Development in
              Society 5.0"
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold w-full text-wrap uppercase">
              Sub Tema
            </h1>
            <p className="text-wrap">1. Kesehatan</p>
            <p className="text-wrap">2. Teknologi</p>
            <p className="text-wrap">3. Lingkungan</p>
            <p className="text-wrap">4. Sosial Budaya</p>
            <p className="text-wrap">5. Ekonomi</p>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-bold uppercase">Ketentuan Peserta</h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Peserta merupakan siswa/i SMA atau Sekolah Menengah Kejuruan
                (SMK) sederajat dari kelas X, XI, dan XII se-Indonesia, yang
                masih AKTIF dengan dibuktikan dengan scan Kartu Pelajar atau
                Surat Keterangan dari Kepala Sekolah yang bersangkutan
              </li>
              <li className="text-wrap">
                Satu tim terdiri dari maksimal 3 orang pelajar SMA/SMK sederajat
                yang berasal dari sekolah yang sama
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
                Biaya pendaftaran tahap awal (ABSTRAK) GRATIS
              </li>
              <li className="text-wrap">
                Setiap delegasi membayar biaya registrasi ulang jika dinyatakan
                lolos ke tahap berikutnya
              </li>
              <li className="text-wrap">
                Mendaftar berarti bersedia mengikuti seluruh rangkaian kegiatan
              </li>
              <li className="text-wrap">
                Ketika mengajukan pengunduran diri, uang pendaftaran pada tahap
                pendaftaran ulang tidak dapat ditarik kembali
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-bold uppercase">
            Ketentuan Pendaftaran TAHAP AWAL (ABSTRAK)
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Setiap tim diwajibkan mengirim berkas pendaftaran sebagai
                berikut:{" "}
              </li>
              <ul className="list-disc pl-4">
                <li>
                  Surat Pernyataan Pendaftaran yang dapat diakses melalui link
                  berikut:
                </li>
              </ul>
              <div className="flex flex-col justify-center items-start w-[85%] gap-2">
                <button className="px-5 py-2 border border-black bg-white rounded-full">
                  Surat Pernyataan Pendaftaran
                </button>{" "}
                <button className="px-5 py-2 bg-white rounded-full border border-black">
                  Surat Pernyataan Orisinalitas
                </button>
              </div>
              <ul className="list-disc pl-4">
                <li>
                  Scan Kartu Pelajar setiap peserta atau Surat Keterangan dari
                  Kepala Sekolah apabila calon peserta kompetisi tidak dapat
                  mengirimkan Kartu Pelajar
                </li>
              </ul>
              <li className="text-wrap">
                Semua berkas pendaftaran sebagaimana dimaksud dalam poin 1
                dikirimkan dalam format PDF
              </li>
              <li className="text-wrap">
                Setiap peserta hanya boleh terdaftar pada tepat 1 (satu) tim
                pada cabang kompetisi yang samaSetelah mengirim berkas
                pendaftaran, ketua tim wajib melakukan konfirmasi kepada CP
                tertera dengan format “Konfirmasi Pendaftaran_Nama Sekolah_Nama
                Tim (tokoh Pahlawan)_Nama Ketua Tim”
              </li>
              <li className="text-wrap">
                Contoh: Konfirmasi Pendaftaran_Soemitro Djojohadikoesoemo_SMA
                Trimurti_Amira Dinniah
              </li>
              <li className="text-wrap">
                Apabila terdapat tim yang telah melakukan pendaftaran tetapi
                tidak melakukan konfirmasi pendaftaran, maka dianggap TIDAK
                MENDAFTARKAN DIRI
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full flex flex-col mt-5 gap-1">
          <h1 className="text-2xl font-bold uppercase">
            Ketentuan Pendaftaran TAHAP LANJUT (FULL PAPER)
          </h1>
          <div className="flex flex-col w-full gap-1">
            <ol className="list-decimal pl-5 flex flex-col gap-1">
              <li className="text-wrap">
                Tim yang lolos seleksi abstrak dapat mengembangkan karya tulis
                ilmiah penuh sesuai dengan panduan yang diberikan oleh panitia
                beserta surat pernyataan orisinalitas
              </li>
              <ul className="list-disc pl-4">
                <li>
                  Surat Pernyataan Pendaftaran yang dapat diakses melalui link
                  berikut:
                </li>
              </ul>
              <div className="flex flex-col justify-center items-start w-[85%] gap-2">
                <button className="px-5 py-2 border border-black bg-white rounded-full">
                  Surat Pernyataan Pendaftaran
                </button>{" "}
                <button className="px-5 py-2 bg-white rounded-full border border-black">
                  Surat Pernyataan Orisinalitas
                </button>
              </div>
              <ul className="list-disc pl-4">
                <li>
                  Setiap tim diperkenankan membayar biaya pendaftaran pada
                  tanggal ... sebesar Rp130.000,00 pada tahap I dan tahap II
                  sebesar Rp150.000,00 untuk mengikuti tahap berikutnya
                </li>
                <li>
                  Apabila terjadi ekstensi, tanggal dan biaya pendaftaran akan
                  diinformasikan berikutnya pada laman media sosial Airlangga
                  Convention
                </li>
                <li>
                  Apabila terdapat tim yang telah melakukan pendaftaran tetapi
                  tidak melakukan konfirmasi pendaftaran, maka dianggap TIDAK
                  MENDAFTARKAN DIRI
                </li>
              </ul>
              <li className="text-wrap">
               Full paper yang sudah selesai dapat diunggah ke platform pendaftaran sesuai dengan batas waktu yang ditentukan oleh panitia
              </li>
              <li className="text-wrap">
              Full paper akan dinilai oleh para juri berdasarkan kriteria tertentu, seperti kualitas penelitian, kesesuaian dengan subtema, dan ketepatan pemformatan
              </li>
              <li className="text-wrap">
              Dari tim yang mengirimkan full paper, 15 tim terbaik akan dipilih sebagai finalis
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center text-center mt-8 mb-2">
        <div className="w-1/3 py-[0.05rem] bg-black"></div>
        <a href="#" className="w-1/3 text-sm font-bold">Click to Download Full Guide Book</a>
        <div className="w-1/3 py-[0.05rem] bg-black"></div>
      </div>
      <div className="mx-10 mt-8 mb-2">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1 className="font-bold text-xl w-3/4 text-wrap text-center">Pengumuman Lolos Tahap Abstrak</h1>
          <button className="py-2 px-4 rounded-lg text-sm bg-white shadow-lg">Cek Di Sini</button>
        </div>
      </div>
    </>
  );
};

export default karyatulisilmiah;
