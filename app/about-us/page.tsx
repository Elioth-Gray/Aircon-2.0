// 'use client'

import styles from "./about-us-page.module.css";
import ReadMoreButton from "../components/ReadMoreButton";

const AboutUs = () => {
  return (
    <>
      <div className="">ABOUT US PAGE</div>
      {/* <button onClick={() => console.log("Lihat user")}>Lihat User</button> */}
      <ReadMoreButton>
        <p>Hello</p>
        <i>Hi</i>
      </ReadMoreButton>
    </>
  );
};

export default AboutUs;
