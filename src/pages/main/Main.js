import React from "react";
import TopSection from "../../components/entries/TopSection";
import Header from "../../components/header/Header";
import Portfolio from "../../components/portfolio/Portfolio";
import Services from "../../components/serives/Services";
import Carousel from "../../components/carousel/Carousel";
import Testimonial from "../../components/testimonial/Testimonial";
import Contact from "../../components/contact/Contact";
import Callsection from "../../components/callSection/Callsection";
import { StyledMain } from "./Main.style";
import { StyledConatiner } from "../../components/container/Container.style";
import Footer from "../../components/footer/Footer";

function Main() {
  return (
    <StyledMain>
      <Header />
      <div class="container style_container">
        <div class="line_frame2">
          <div>
            <div className="line_1"></div> 
            <div className="line_2"></div>
            <div className="line_3"></div>
            <div className="line_4"></div> 
            <div className="line_5"></div>
          </div>
        </div>
      </div>
      <TopSection />
      <Portfolio />
      <Services />
      <Carousel />
      <Testimonial />
      <Contact />
      <Callsection />
      <Footer />
    </StyledMain>
  );
}

export default Main;
