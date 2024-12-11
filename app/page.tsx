import Cards from "./components/Cards";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mx-auto px-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <Cards
            title="ABOUT US"
            description="What is Airlangga Convention 2.0?"
            image="/about-us.svg"
            color="#0A3981"
            titleColor="#D4ECF8"
            bodyColor="#FFFFFF"
          />
          <Cards
            title="show your performance"
            description="Prove that your dance team or band is the best!"
            color="#D4ECF8"
            titleColor="#0A3981"
            bodyColor="#1D5298"
          />
          <Cards
            title="register your tenant!"
            description="Showcase your products to a large audience and boost your brand visibility. Limited booths available – register now!"
            color="#1D5298"
            titleColor="#D4ECF8"
            bodyColor="#FFFFFF"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Cards
            title="COMPETITION"
            description="We provide a platform for high school students to explore interests and talents in both academic and non-academic competitions."
            image="/competition.svg"
            color="#D4ECF8"
            titleColor="#0A3981"
            bodyColor="#1D5297"
          />
          <Cards
            title="support your team"
            description="Come on, support and enliven the stands! Get your spirit and voice ready for your school's pride team!"
            image="/support_your_team.svg"
            color="#E38F49"
            titleColor="#FFFFFF"
            bodyColor="#FFFFFF"
          />
        </div>
      </div>
      <div className="mt-4 px-10 sm:px-6 lg:px-8">
        <Cards
          title="Become our partner"
          description="Become a sponsor of Airlangga Convention 2023 to enhance your company’s reputation through a positive partnership with Universitas Airlangga."
          color="#E38F49"
          image="/our_partner.svg"
          titleColor="#FFFFFF"
          bodyColor="#FFFFFF"
          imageSize="50%" // Assuming the Cards component accepts an imageSize prop
        />
      </div>
    </>
  );
};

export default Home;
