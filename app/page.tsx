import Image from "next/image";
import ReadMoreButton from "./components/ReadMoreButton";

const Home = () => {
  return (
    <>
      <div className="mx-10 mt-5 flex flex-col gap-3">
        <div className="w-full bg-[rgb(10,57,129)] p-4 px-8 py-8 text-white rounded-3xl flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="uppercase text-white font-bold text-2xl">
                About Us
              </h1>
              <p>What is Airlangga Convention 2.0?</p>
            </div>
            <ReadMoreButton></ReadMoreButton>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="about-us.svg"
              width={150}
              height={150}
              alt="aboutus"
            ></Image>
          </div>
        </div>
        <div className="w-full bg-[rgb(10,57,129)] p-4 px-8 py-8 text-white rounded-3xl flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="uppercase text-white font-bold text-2xl">
                About Us
              </h1>
              <p>What is Airlangga Convention 2.0?</p>
            </div>
            <ReadMoreButton></ReadMoreButton>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="about-us.svg"
              width={150}
              height={150}
              alt="aboutus"
            ></Image>
          </div>
        </div>
        <div className="w-full bg-[rgb(10,57,129)] p-4 px-8 py-8 text-white rounded-3xl flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="uppercase text-white font-bold text-2xl">
                About Us
              </h1>
              <p>What is Airlangga Convention 2.0?</p>
            </div>
            <ReadMoreButton></ReadMoreButton>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="about-us.svg"
              width={150}
              height={150}
              alt="aboutus"
            ></Image>
          </div>
        </div>
        <div className="w-full bg-[rgb(10,57,129)] p-4 px-8 py-8 text-white rounded-3xl flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="uppercase text-white font-bold text-2xl">
                About Us
              </h1>
              <p>What is Airlangga Convention 2.0?</p>
            </div>
            <ReadMoreButton></ReadMoreButton>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="about-us.svg"
              width={150}
              height={150}
              alt="aboutus"
            ></Image>
          </div>
        </div>
        <div className="w-full bg-[rgb(10,57,129)] p-4 px-8 py-8 text-white rounded-3xl flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="uppercase text-white font-bold text-2xl">
                About Us
              </h1>
              <p>What is Airlangga Convention 2.0?</p>
            </div>
            <ReadMoreButton></ReadMoreButton>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="about-us.svg"
              width={150}
              height={150}
              alt="aboutus"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
