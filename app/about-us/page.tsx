import BackButton from "../components/BackButton";
import Image from "next/image";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="px-10 mt-5">
        <BackButton></BackButton>
        <div className="w-full mt-5">
          <Image
            src="/logo-2.png"
            width={300}
            height={300}
            alt="Logo"
            className=""
          />{" "}
          {/* z-index for Image */}
          <p className="text-8xl font-bold mt-2">About</p>
          <p className="text-8xl font-bold">Us</p>
        </div>
        <div className="w-full mt-5 flex flex-col justify-center gap-5">
          <p className="text-xl font-medium">
            Hello Conners!! Kalian pasti bertanya-tanya apa sih AIRCON itu
            (Airlangga Convention)?
          </p>
          <p className="text-xl font-medium">
            Aircon adalah sebuah Kompetisi untuk para pelajar SMA/K seperti
            Kompetisi Menulis, Olimpiade Cerdas Cermat, Poster, Basket, dan
            Futsal.
          </p>
          <p className="text-xl font-medium">
            Kalian juga bisa nonton keseruan AIRCON loh dan hadir saat sekolah
            kalian bertanding serta mendukung sebagai supporter.
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-between mt-5">
          <Image
            src="/Photo1.jpg"
            width={145}
            height={145}
            alt="Photo1"
            className="rounded-lg"
          ></Image>
          <Image
            src="/Photo2.jpg"
            width={145}
            height={145}
            alt="Photo2"
            className="rounded-lg"
          ></Image>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
