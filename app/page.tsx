import Image from "next/image";
import ReadMoreButton from "./components/ReadMoreButton";

const Home = () => {
  return (
    <>
      <div className="mx-10 mt-3">
        <div className="flex flex-row gap-5 w-full mb-2">
          <h1 className="w-1/2 uppercase text-[#000000] text-3xl py-2 font-winter">
            airlangga <br />
            convention <br />
            2.0
          </h1>
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-center items-center pl-1">
              <Image
                src="bem-present.svg"
                width={1000}
                height={1000}
                alt="competition"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-10 mt-5 flex flex-col gap-5">
        {/* About Us: */}
        <div className="w-full bg-[#0A3981] px-8 py-8 rounded-3xl flex flex-row justify-between">
          <div className="flex flex-col gap-5">
            <div className="">
              <h1 className="uppercase text-[#D4ECF8] text-2xl py-2 font-winter">
                About Us
              </h1>
              <p className="text-sm text-white">
                What is Airlangga Convention 2.0?
              </p>
            </div>
            <ReadMoreButton></ReadMoreButton>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="about-us-ornamen.svg"
              width={150}
              height={150}
              alt="aboutus"
            ></Image>
          </div>
        </div>

        {/* Competition:*/}
        <div className="w-full bg-[#D4ECF8] px-8 py-8 rounded-3xl flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="uppercase text-[#0A3981] text-2xl font-winter">
              Competitions
            </h1>
            <div className="flex flex-row gap-5 w-full mb-2">
              <p className="w-1/2 text-sm text-[#1D5298]">
                We provide a platform for high <br />
                school students to explore interests <br />
                and talents in both academic and <br />
                non-academic competitions.
              </p>
              <div className="w-1/2 flex justify-center items-center">
                <Image
                  src="competition.svg"
                  width={300}
                  height={300}
                  className="-rotate-90"
                  alt="competition"
                />
              </div>
            </div>
            <div className="w-[60%]">
              <div className="w-{100%}">
                <ReadMoreButton></ReadMoreButton>
              </div>
            </div>
          </div>
        </div>

        {/* Supporter:*/}
        <div className="w-full bg-[#E38F49] px-8 py-8 rounded-3xl flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="uppercase text-white text-2xl font-winter mb-1">
              Support Your Team
            </h1>
            <div className="flex flex-row gap-5 w-full mb-2">
              <p className="w-1/2 text-sm text-white">
                Come on, support and enliven the stands! Get your spirit and
                voice ready for your school's pride team!
              </p>
              <div className="w-1/2 flex justify-center items-center">
                <Image
                  src="support_your_team.svg"
                  width={300}
                  height={300}
                  alt="supporter-image"
                />
              </div>
            </div>
            <div className="w-[60%]">
              <div className="w-{100%}">
                <ReadMoreButton></ReadMoreButton>
              </div>
            </div>
          </div>
        </div>

        {/* Performance:*/}
        <div className="w-full bg-[#0A3981] px-8 py-8 rounded-3xl flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="uppercase text-[#D4ECF8] font-winter text-2xl">
              Show Your Performance
            </h1>
            <div className="flex flex-row gap-5 w-full mb-2 items-center">
              <p className="w-1/2 text-sm text-white">
                Prove that your dance team or band is the best!
              </p>
              <div className="w-1/2 flex items-end justify-end">
                <Image
                  src="performance-ornamen.svg"
                  width={50}
                  height={50}
                  alt="supporter-image"
                />
              </div>
            </div>
            <div className="w-[60%]">
              <div className="w-{100%}">
                <ReadMoreButton></ReadMoreButton>
              </div>
            </div>
          </div>
        </div>

        {/* Tenant:*/}
        <div className="w-full bg-[#D4ECF8] px-8 py-8 rounded-3xl flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="relative">
              <h1 className="uppercase text-[#0A3981] font-winter text-2xl mb-2">
                Register Your Tenant!
              </h1>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1D5298] py-0"></div>
            </div>
            <div className="w-full mb-2">
              <p className="w--full text-sm text-[#1D5298]">
                Showcase your products to a large audience and boost your brand
                visibility. Limited booths available. <br /> – Register now!
              </p>
            </div>
            <div className="w-[60%]">
              <div className="w-{100%}">
                <ReadMoreButton></ReadMoreButton>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor:*/}
        <div className="w-full bg-[#E38F49] p-4 px-8 py-8 rounded-3xl flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="uppercase text-white font-winter text-2xl">
                Become our partner
              </h1>
            </div>
            <div className="flex flex-col justify-start items-start">
              <Image
                src="partner-ornamen.svg"
                width={150}
                height={150}
                alt="aboutus"
              ></Image>
            </div>
            <div>
              <p className="text-white text-sm">
                Become a sponsor of Airlangga Convention 2023 to enhance your
                company’s reputation through a positive partnership with
                Universitas Airlangga.
              </p>
            </div>
            <div className="w-[60%]">
              <div className="w-{100%}">
                <ReadMoreButton></ReadMoreButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
