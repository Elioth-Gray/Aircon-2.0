import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import Image from "next/image";
import { BookOpenText } from "@phosphor-icons/react/dist/ssr";
import { Newspaper } from "@phosphor-icons/react/dist/ssr";

const Competition = () => {
  return (
    <>
      <Navbar />
      <div className="px-10 mt-5">
        <BackButton></BackButton>
        <div className="w-full mt-5">
          <p className="text-4xl uppercase font-bold">Our</p>
          <p className="text-4xl uppercase font-bold">Interactive</p>
          <p className="text-4xl uppercase font-bold">Competitions</p>
        </div>
        <div className="w-full mt-5 flex flex-col gap-3">
          <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#1F519A] p-6 px-8  text-white rounded-xl relative overflow-hidden w-full h-60">
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
          <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#1F519A] p-6 px-8  text-white rounded-xl relative overflow-hidden w-full h-60">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <Newspaper size={35} className="text-black" />
            </div>
            <Image
              src="/Infografis.svg"
              width={200}
              height={200}
              alt="KTI"
              className="absolute bottom-28 left-56"
            ></Image>
            <h1 className="font-bold text-2xl w-3/4 text-wrap">Infografis</h1>
            <div>
              <p>Biaya Pendaftaran:</p>
              <p>Rp35.000,00 per Orang</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#1F519A] p-6 px-8  text-white rounded-xl relative overflow-hidden w-full h-60">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <Newspaper size={35} className="text-black" />
            </div>
            <Image
              src="/Tryout.svg"
              width={200}
              height={200}
              alt="KTI"
              className="absolute bottom-28 left-56"
            ></Image>
            <h1 className="font-bold text-2xl w-3/4 text-wrap">Try Out</h1>
            <div>
              <p>Biaya Pendaftaran:</p>
              <p>Rp35.000,00 per Orang</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#0A3981] p-6 px-8  text-white rounded-xl relative overflow-hidden w-full h-60">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <Newspaper size={35} className="text-black" />
            </div>
            <Image
              src="/ML.svg"
              width={200}
              height={200}
              alt="KTI"
              className="absolute bottom-28 left-56"
            ></Image>
            <h1 className="font-bold text-2xl w-3/4 text-wrap">
              Mobile Legends
            </h1>
            <div>
              <p>Biaya Pendaftaran:</p>
              <p>Rp35.000,00 per Orang</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#0A3981] p-6 px-8  text-white rounded-xl relative overflow-hidden w-full h-60">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <Newspaper size={35} className="text-black" />
            </div>
            <Image
              src="/Businessplan.svg"
              width={200}
              height={200}
              alt="KTI"
              className="absolute bottom-28 left-56"
            ></Image>
            <h1 className="font-bold text-2xl w-3/4 text-wrap">
              Business Plan
            </h1>
            <div>
              <p>Biaya Pendaftaran:</p>
              <p>Rp35.000,00 per Orang</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start text-start gap-3 bg-[#0A3981] p-6 px-8  text-white rounded-xl relative overflow-hidden w-full h-60">
            <div className="p-3 rounded-full bg-[#D9D9D9]">
              <Newspaper size={35} className="text-black" />
            </div>
            <Image
              src="/Cerdascermat.svg"
              width={200}
              height={200}
              alt="KTI"
              className="absolute bottom-28 left-56"
            ></Image>
            <h1 className="font-bold text-2xl w-3/4 text-wrap">Basket</h1>
            <div>
              <p>Biaya Pendaftaran:</p>
              <p>Rp35.000,00 per Orang</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Competition;
