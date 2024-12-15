import BackButton from "../components/BackButton";
import CompetitionCard from "../components/competition/CompetitionCard";

const Competition = () => {
  const competitionData = [
    {
      title: "Karya Tulis Ilmiah",
      price: "GRATIS (Tahap Awal)",
      imageSrc: "/KTI.svg",
      bgColor: "#1F519A",
    },
    {
      title: "Infografis",
      price:
        "Rp40.000,00 /orang (Gelombang 1)\n Rp50.000,00 /orang (Gelombang 2)",
      imageSrc: "/Infografis.svg",
      bgColor: "#1F519A",
    },
    {
      title: "Try Out",
      price:
        "Rp70.000,00 /orang (Gelombang 1)\n Rp85.000,00 /orang (Gelombang 2)\n Rp100.000,00 /orang (Gelombang 3)",
      imageSrc: "/Tryout.svg",
      bgColor: "#1F519A",
    },
    {
      title: "Mobile Legends",
      price: "Rpxx.000,00 /tim",
      imageSrc: "/ML.svg",
      bgColor: "#0A3981",
    },
    {
      title: "Business Plan",
      price:
        "Rp50.000,00 /tim (Early Bid)\n Rp60.000,00 /tim (Batch 1)\n Rp75.000,00 /tim (Batch 2)",
      imageSrc: "/Businessplan.svg",
      bgColor: "#0A3981",
    },
    {
      title: "Basket",
      price: "Rp450.000,00 /tim (Putra)\nRp400.000,00 /tim (Putri)",
      imageSrc: "/Cerdascermat.svg",
      bgColor: "#0A3981",
    },
  ];

  return (
    <>
      <div className="mt-5 px-10 lg:px-28">
        <BackButton></BackButton>
        <div className="w-full mt-5 text-4xl lg:text-8xl ">
          <p className=" uppercase font-winter">
            Our{" "}
            <span
              className=" uppercase font-winter text-[#D4ECF8]"
              style={{
                WebkitTextStroke: "1px #0A3981",
              }}
            >
              Interactive
            </span>
          </p>
          <p
            className=" uppercase font-winter text-[#D4ECF8] block lg:hidden"
            style={{
              WebkitTextStroke: "1px #0A3981",
            }}
          >
            Interactive
          </p>
          <p className="uppercase font-winter">Competitions</p>
        </div>
        <div className="w-full mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {competitionData.map((competition, index) => (
            <CompetitionCard
              key={index}
              title={competition.title}
              price={competition.price}
              imageSrc={competition.imageSrc}
              bgColor={competition.bgColor}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Competition;
