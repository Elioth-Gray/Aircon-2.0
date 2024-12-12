import React from "react";
import BackButton from "../components/BackButton";
import Image from "next/image";
import { Money, CalendarDots, PhoneCall } from "@phosphor-icons/react/dist/ssr";

const TenantPage = () => {
  return (
    <>
      <div className="mx-10 mt-5">
        <BackButton/>
        <div className='mt-5 relative overflow-hidden'>
            <Image src="/tenant1.svg" width={90} height={90} alt='supporter' className='absolute top-5 left-1'></Image>
            <h1 className='uppercase text-2xl w-full flex flex-row justify-center items-center py-5 bg-[#FDB172] rounded-xl font-bold text-white z-10'>Tenant</h1>
            <Image src="/tenant2.svg" width={90} height={90} alt='supporter' className='absolute top-2 left-60'></Image>
        </div>
        <div className="w-full mt-5 flex flex-col gap-1 text-sm">
            <p className="flex flex-row justify-start items-center gap-2"><Money size={20} className="text-sm"/> Pilihan Paket</p>
            <ul className="list-disc ml-11">
                <li>Paket A (Full Day Basket - 6 Hari Perlombaan) : Rp1.500.000,00</li>
                <li>Paket B (Harian Basket) : Rp250.000,00</li>
                <li>Paket C (Closing) : Rp250.000,00</li>
            </ul>
            <p className="flex flex-row justify-start items-center gap-2"><CalendarDots size={20}  className="text-sm"/> 13 Desember - 7 Januari</p>
            <p className="flex flex-row justify-start items-center gap-2"><PhoneCall size={20} className="text-sm" />CP: +62 812-3456-7891 (Name)</p>
        </div>
        <div className="w-full mt-5">
            <h1 className="text-4xl font-bold">Ketentuan</h1>
            <ol className="list-decimal ml-5 mt-2 flex flex-col gap-1">
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                Tenant DIWAJIBKAN melakukan konfirmasi kepada panitia perihal semua barang yang akan dijual, maksimal satu bulan setelah dianggap menjadi penyewa stand
                </li>
                <li>
                Tenant diwajibkan menjual barang dan/atau makanan dan/atau minuman sesuai syarat dan ketentuan
                </li>
                <li>
                Setiap Tenant hanya boleh memesan maksimal 2 (dua) booth dengan nama dan nomor rekening yang sama
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
            </ol>
        </div>
        <div className="w-full mt-5">
            <h1 className="text-4xl font-bold">Ketentuan</h1>
            <ol className="list-decimal ml-5 mt-2 flex flex-col gap-1">
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                Tenant DIWAJIBKAN melakukan konfirmasi kepada panitia perihal semua barang yang akan dijual, maksimal satu bulan setelah dianggap menjadi penyewa stand
                </li>
                <li>
                Tenant diwajibkan menjual barang dan/atau makanan dan/atau minuman sesuai syarat dan ketentuan
                </li>
                <li>
                Setiap Tenant hanya boleh memesan maksimal 2 (dua) booth dengan nama dan nomor rekening yang sama
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
            </ol>
        </div>
        <div className="w-full mt-5">
            <h1 className="text-4xl font-bold">Ketentuan</h1>
            <ol className="list-decimal ml-5 mt-2 flex flex-col gap-1">
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                Tenant DIWAJIBKAN melakukan konfirmasi kepada panitia perihal semua barang yang akan dijual, maksimal satu bulan setelah dianggap menjadi penyewa stand
                </li>
                <li>
                Tenant diwajibkan menjual barang dan/atau makanan dan/atau minuman sesuai syarat dan ketentuan
                </li>
                <li>
                Setiap Tenant hanya boleh memesan maksimal 2 (dua) booth dengan nama dan nomor rekening yang sama
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
            </ol>
        </div>
        <div className="w-full mt-5">
            <h1 className="text-4xl font-bold">Ketentuan</h1>
            <ol className="list-decimal ml-5 mt-2 flex flex-col gap-1">
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                Tenant DIWAJIBKAN melakukan konfirmasi kepada panitia perihal semua barang yang akan dijual, maksimal satu bulan setelah dianggap menjadi penyewa stand
                </li>
                <li>
                Tenant diwajibkan menjual barang dan/atau makanan dan/atau minuman sesuai syarat dan ketentuan
                </li>
                <li>
                Setiap Tenant hanya boleh memesan maksimal 2 (dua) booth dengan nama dan nomor rekening yang sama
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
                <li>
                    Barang yang dijual dapat berupa makanan, minuman, barang kerajinan tangan, aksesoris, dan fashion
                </li>
            </ol>
        </div>
      </div>
    </>
  );
};

export default TenantPage;
