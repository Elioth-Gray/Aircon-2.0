"use client";

import Image from "next/image";
import ReadMoreButton from "./components/ReadMoreButton";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const desc = {
    aboutUs: {
      title: "About Us",
      desc: "What is Airlangga Convention 2.0?",
      url: "/about-us",
    },
    sponsor: {
      title: "Become our partner",
      desc: "Become a sponsor of Airlangga Convention 2023 to enhance your company’s reputation through a positive partnership with Universitas Airlangga.",
      url: "/",
    },
    competition: {
      title: "Competitions",
      desc: "We provide a platform for high school students to explore interests and talents in both academic and non-academic competitions.",
      url: "/competitions",
    },
    tenant: {
      title: "register your tenant!",
      desc: "Showcase your products to a large audience and boost your brand visibility. Limited booths available – register now!",
      url: "/tenant",
    },
    supporter: {
      title: "Support Your Team",
      desc: "Come on, support and enliven the stands! Get your spirit and voice ready for your school's pride team!",
      url: "/supporter",
    },
    performance: {
      title: "Show Your Performance",
      desc: "Prove that your dance team or band is the best!",
      url: "/",
    },
  };

  return (
    <>
      <div className="w-full lg:hidden">
        <Image
          src="spiral-1.svg"
          width={200}
          height={200}
          alt="competition"
          className=" absolute top-44 -right-6 -z-50"
        />
        <div className="mx-10 mt-3">
          <div className="flex flex-row gap-5 w-full mb-2">
            <div className="relative">
              <h1 className="w-1/2 uppercase text-[#000000] text-3xl py-2 font-winter">
                airlangga <br />
                convention <br />
                2.0
              </h1>
              <Image
                src="dots.svg"
                width={3000}
                height={3000}
                alt="competition"
                className=" absolute top-1"
              />
            </div>
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
                  {desc.aboutUs.title}
                </h1>
                <p className="text-sm text-white">{desc.aboutUs.desc}</p>
              </div>
              <ReadMoreButton url={desc.aboutUs.url} width="80%" />
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
                {desc.competition.title}
              </h1>
              <div className="flex flex-row gap-5 w-full mb-2">
                <p className="w-1/2 text-sm text-[#1D5298]">
                  {desc.competition.desc}
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
                  <ReadMoreButton url={desc.competition.url} width="80%" />
                </div>
              </div>
            </div>
          </div>

          {/* Supporter:*/}
          <div className="w-full bg-[#E38F49] px-8 py-8 rounded-3xl flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="uppercase text-white text-2xl font-winter mb-1">
                {desc.supporter.title}
              </h1>
              <div className="flex flex-row gap-5 w-full mb-2">
                <p className="w-1/2 text-sm text-white">
                  {desc.supporter.desc}
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
                  <ReadMoreButton url={desc.supporter.url} width="80%" />
                </div>
              </div>
            </div>
          </div>

          {/* Performance:*/}
          <div className="w-full bg-[#0A3981] px-8 py-8 rounded-3xl flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="uppercase text-[#D4ECF8] font-winter text-2xl">
                {desc.performance.title}
              </h1>
              <div className="flex flex-row gap-5 w-full mb-2 items-center">
                <p className="w-1/2 text-sm text-white">
                  {desc.performance.desc}
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
                  <ReadMoreButton url={desc.performance.url} width="80%" />
                </div>
              </div>
            </div>
          </div>

          {/* Tenant:*/}
          <div className="w-full bg-[#D4ECF8] px-8 py-8 rounded-3xl flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <div className="relative">
                <h1 className="uppercase text-[#0A3981] font-winter text-2xl mb-2">
                  {desc.tenant.title}
                </h1>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1D5298] py-0"></div>
              </div>
              <div className="w-full mb-2">
                <p className="w--full text-sm text-[#1D5298]">
                  {desc.tenant.desc}
                </p>
              </div>
              <div className="w-[60%]">
                <div className="w-{100%}">
                  <ReadMoreButton url={desc.tenant.url} width="80%" />
                </div>
              </div>
            </div>
          </div>

          {/* Sponsor:*/}
          <div className="w-full bg-[#E38F49] p-4 px-8 py-8 rounded-3xl flex flex-row justify-between">
            <div className="flex flex-col gap-3">
              <div>
                <h1 className="uppercase text-white font-winter text-2xl">
                  {desc.sponsor.title}
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
                <p className="text-white text-sm">{desc.sponsor.desc}</p>
              </div>
              <div className="w-[60%]">
                <div className="w-{100%}">
                  <ReadMoreButton url={desc.sponsor.url} width="80%" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="spiral-2.svg"
          width={200}
          height={200}
          alt="spiral-2"
          className=" absolute bottom-auto -left-20 -z-50 rotate-180"
        />
      </div>
      <div className="hidden lg:block w-full px-28">
        <div className="w-full">
          <h1 className="font-winter text-8xl w-3/4 text-wrap">
            Airlangga Convention 2.0
          </h1>
          <div className="mt-5 w-full flex flex-row gap-6 justify-center items-center h-auto">
            <div className="flex flex-col gap-6 w-[22%]">
              <div className="w-full flex flex-col justify-center items-start bg-[#0A3981] text-white p-8 rounded-[2rem] px-8 shadow-2xl">
                <Image
                  src="about-us-dekstop.svg"
                  width={250}
                  height={250}
                  alt="aboutus"
                ></Image>
                <div className="w-full mt-5 flex flex-col gap-3">
                  <h1 className="font-winter text-2xl text-start w-full">
                    About Us
                  </h1>
                  <p className="text-sm">What is Airlangga Convention 2.0?</p>
                  <ReadMoreButton url={desc.aboutUs.url} width="80%" />
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start bg-[#D4ECF8] text-[#0A3981] p-8 rounded-[2rem] px-8 shadow-2xl h-auto">
                <div className="w-full flex flex-col gap-3">
                  <h1 className="font-winter text-2xl text-start w-full">
                    Show Your Performance
                  </h1>
                  <p className="text-sm">
                    Prove that your dance team or band is the best! Show your
                    skills, passion, and creativity to take the stage and leave
                    a lasting impression.
                  </p>
                  <ReadMoreButton url={desc.aboutUs.url} width="80%" />
                </div>
              </div>
            </div>
            <div className="w-[78%] flex flex-col gap-6">
              <div className="w-full flex flex-row gap-6 h-auto">
                <div className="w-[28%] flex flex-col justify-center items-start bg-[#D4ECF8] text-[#0A3981] p-8 rounded-[2rem] px-8 shadow-2xl">
                  <div className="w-full flex flex-col gap-3">
                    <Image
                      src="competition.svg"
                      width={250}
                      height={250}
                      alt="aboutus"
                    ></Image>
                    <div className="w-full mt-5 flex flex-col gap-3">
                      <h1 className="font-winter text-2xl text-start w-full">
                        Competition
                      </h1>
                      <p className="text-sm">
                        We provide a platform for high school students to
                        explore interests and talents in both academic and
                        non-academic competitions.
                      </p>
                      <ReadMoreButton url={desc.aboutUs.url} width="80%" />
                    </div>
                  </div>
                </div>
                <div className="w-[50%] flex flex-col gap-6">
                  <div className="w-full flex flex-col justify-center items-start bg-[#E38F49] text-white p-8 rounded-[2rem] px-8 shadow-2xl h-auto">
                    <Image
                      src="supporter_desktop.svg"
                      width={350}
                      height={350}
                      alt="aboutus"
                    ></Image>
                    <div className="w-full mt-5 flex flex-col gap-3">
                      <h1 className="font-winter text-2xl text-start w-full">
                        Support Your Team
                      </h1>
                      <div className="flex flex-row">
                        <p className="text-sm text-wrap">
                          Come on, support and enliven the stands! Get your
                          spirit and voice ready for your school's pride team!
                        </p>
                        <ReadMoreButton url={desc.aboutUs.url} width="80%" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col justify-center items-start bg-[#1D5298] text-white p-8 rounded-[2rem] px-8 shadow-2xl">
                    <div className="w-full flex flex-col gap-3">
                      <h1 className="font-winter text-2xl text-start w-full">
                        register your tenant!
                      </h1>
                      <div className="w-full py-[0.1rem] bg-white"></div>
                      <div className="flex flex-row">
                        <p className="text-sm text-wrap">
                          Come on, support and enliven the stands! Get your
                          spirit and voice ready for your school's pride team!
                        </p>
                        <ReadMoreButton url={desc.aboutUs.url} width="80%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full flex flex-col justify-center items-start bg-[#E38F49] text-white p-8 rounded-[2rem] px-8 shadow-2xl h-full">
                  <div className="w-full flex flex-col gap-3">
                    <h1 className="font-winter text-2xl text-start w-full">
                      Become our partner
                    </h1>
                    <div className="flex flex-row">
                      <p className="text-sm text-wrap w-[90%]">
                        Become a sponsor of Airlangga Convention 2023 to gain
                        wide visibility for your brand, engage with a promising
                        market of high school students, and enhance your
                        company’s reputation through a positive partnership with
                        Universitas Airlangga.
                      </p>
                      <ReadMoreButton url={desc.aboutUs.url} width="40%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
