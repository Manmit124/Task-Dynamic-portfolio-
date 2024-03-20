import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services"
import Skill from "./Skill"
import Portfolio from "./Portfolio"
import Testimonial from "./Testimonial"
import Contact from "./Contact"
import ImageView from "./popup/ImageView"
import {boston} from "../lib/utils"
import {  useEffect } from "react";
import About from "./About";


function App() {
  useEffect(() => {
    boston.scrollToActiveNav();
    boston.imgToSvg();
  }, []);
  return (
    // <Fragment>
    <>
      {/* <ImageView /> */}
      {/* End */}
      {/* Header */}
      <Header />
      {/* End Header */}
      {/* Main */}
      <main className="wrapper">
        {/* Home Section */}
        <Home />
        {/* End Home Section */}
        {/* Services Section */}
        <About/>
        <Services />
        {/* End Services Section */}
        {/* Skill Section */}
        <Skill />
        {/* End Skill Section */}
        {/* Work Section */}
        <Portfolio />
        {/* End Work Section */}
        {/* testimonial Section */}
        <Testimonial />
        {/* End testimonial Section */}
        {/* Contact Section */}
        <Contact />
        {/* End Contact Section */}
        {/* Effect */}
        <div className="right-effects" />
        <div className="left-effects" />
        {/* End Effect */}
      </main>
      {/* Main */}
      {/* Footer */}
      <Footer />
      {/* End Footer */}
      </>
    // </Fragment>
  );
}

export default App;
