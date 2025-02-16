import React from "react";
import CoralinaCloud from "../CoralinaCloud";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const InstructorDetails = () => {
  return (
    <>
      <Header />
      <PageBanner
        title={"About Principal"}
        pageTitle={"Team Member"}
        num={1}
      />
      <CoralinaCloud />
      <Footer />
    </>
  );
};

export default InstructorDetails;
