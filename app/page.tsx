import Link from "next/link";
import Navbar from "./components/Navbar";
import ReadMoreButton from "./components/ReadMoreButton";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <ReadMoreButton /> */}
      <Cards />
    </>
  );
}
