import React from "react";
import Image from "next/image";
import ReadMoreButton from "./ReadMoreButton";

export default function Cards({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}): React.JSX.Element {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-[#0A3981] rounded-3xl py-5  flex-col">
      <div className="flex flex-col">
        <img className="items-center" src={image} alt="" />
        <p className="pt-7 text-wrap font-bold text-[#D4ECF8]">{title}</p>
        <p className="text-white text-xs pt-[9px] pb-[22px]">{description}</p>
        <ReadMoreButton href={href} />
      </div>
    </div>
  );
}
