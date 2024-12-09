import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 gap-2  mx-auto px-10 sm:px-6 lg:px-8  ">
        <div className="flex flex-col gap-2">
          <Cards
            title="ABOUT US"
            description="What is Airlangga Convention 2.0?"
            image="/about-us.svg"
          />
          <Cards
            title="ABOUT US"
            description="What is Airlangga Convention 2.0?"
            image="/about-us.svg"
          />
        </div>
        <div>
          <Cards
            title="COMPETITION"
            description="We provide a platform for high school students to explore interests and talents in both academic and non-academic competitions."
            image="/competition.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
