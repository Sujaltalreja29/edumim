import React from "react";
import Brands from "../Brands";
import Footer from "../Footer";
import Header from "../Header";
import Testimonial from "../HomeThreeComponents/Testimonial";
import PageBanner from "../PageBanner";
import Team from "../Team";

const Training = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Training"} pageName={"Training Details"}/>
      <Team train="true"/>
      {/* <Testimonial />
      <Brands
        section_padding_bottom={"section-padding-bottom"}
        section_padding_top={"section-padding-top"}
      /> */}
      <Footer />
    </>
  );
};

export default Training;
