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
      price: "Rp35.000,00 per Orang",
      imageSrc: "/Infografis.svg",
      bgColor: "#1F519A",
    },
    {
      title: "Try Out",
      price: "Rp35.000,00 per Orang",
      imageSrc: "/Tryout.svg",
      bgColor: "#1F519A",
    },
    {
      title: "Mobile Legends",
      price: "Rp35.000,00 per Orang",
      imageSrc: "/ML.svg",
      bgColor: "#0A3981",
    },
    {
      title: "Business Plan",
      price: "Rp35.000,00 per Orang",
      imageSrc: "/Businessplan.svg",
      bgColor: "#0A3981",
    },
    {
      title: "Basket",
      price: "Rp35.000,00 per Orang",
      imageSrc: "/Cerdascermat.svg",
      bgColor: "#0A3981",
    },
  ];

  return (
    <>
      <div className="mt-5 px-10 lg:px-28">
        <BackButton></BackButton>
        <div className="w-full mt-5 text-2xl lg:text-4xl ">
          <p className=" uppercase font-bold">Our</p>
          <p className=" uppercase font-bold">Interactive</p>
          <p className=" uppercase font-bold">Competitions</p>
        </div>
        <div className="w-full mt-5 flex flex-col gap-3 lg:flex-wrap lg:flex-row lg:justify-between">
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
