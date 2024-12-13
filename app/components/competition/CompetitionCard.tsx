import Image from "next/image";
import { BookOpenText } from "@phosphor-icons/react/dist/ssr";
import { Newspaper } from "@phosphor-icons/react/dist/ssr";
import { GameController } from "@phosphor-icons/react/dist/ssr";
import { FileText } from "@phosphor-icons/react/dist/ssr";
import { Basketball } from "@phosphor-icons/react/dist/ssr";

const CompetitionCard = ({
  title,
  price,
  imageSrc,
  bgColor = "#1F519A",
}: {
  title: string;
  price: string;
  imageSrc: string;
  bgColor?: string;
}) => {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes("karya tulis ilmiah")) {
      return <BookOpenText size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("infografis")) {
      return <Newspaper size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("try out")) {
      return <Newspaper size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("mobile legends")) {
      return <GameController size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("business plan")) {
      return <FileText size={35} className="text-black" />;
    } else if (title.toLowerCase().includes("basket")) {
      return <Basketball size={35} className="text-black" />;
    } else {
      return <Newspaper size={35} className="text-black" />;
    }
  };

  return (
    <div
      className={`flex flex-col justify-between items-start text-start gap-3 p-6 px-8 text-white rounded-xl relative overflow-hidden w-full bg-[${bgColor}] lg:w-full lg:py-14 cursor-pointer hover:bg-[#B6723A] transition-all ease-in-out delay-100`}
    >
      <div className="p-3 rounded-full bg-[#D9D9D9]">{getIcon(title)}</div>
      <Image
        src={imageSrc}
        width={200}
        height={200}
        alt={title}
        className="absolute bottom-28 left-56"
      />
      <h1 className="font-bold text-2xl w-3/4">{title}</h1>
      <div>
        <p>Biaya Pendaftaran:</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CompetitionCard;
