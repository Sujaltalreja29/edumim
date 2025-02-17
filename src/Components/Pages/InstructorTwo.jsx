import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Team from "../HomeThreeComponents/Team";
import PageBanner from "../PageBanner";
import Testimonials from "../Testimonials";

const InstructorTwo = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Staff"} pageName={"Staff-details"} />
      <Team />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
};

export default InstructorTwo;
