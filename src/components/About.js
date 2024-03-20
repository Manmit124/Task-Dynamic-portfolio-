import React from "react";
import UserProfile from "../hooks/userdata";
import SectionTitle from "./SectionTitle";

const About = () => {
  const { loading, data, error } = UserProfile();
  const about = data?.user?.about;
  console.log(about);

  return (
    <section id="about" className="about--section about">
      <div className="container">
        <SectionTitle subHeading={"About"} />
        <div className="about-container ">
          <h1>{about?.title}</h1>
          <span>Total Experience : {about?.exp_year} years</span>
          <p>{about?.description}</p>
          <h3>{about?.quote}</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
