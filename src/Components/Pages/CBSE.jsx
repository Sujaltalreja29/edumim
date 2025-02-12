import React from "react";
import FilteredCourse from "../FilteredCourse";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const CBSE = () => {
  return (
    <>
      <Header />
      <PageBanner title={"CBSE"} pageName="Activities" />
      <div className="nav-tab-wrapper tabs pt-10 section-padding-bottom">
        <div className="container">
          <FilteredCourse page="CBSE"
            classNameForTabOne={
              "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]"
            }
            classNameForTabTwo={
              "grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[30px]"
            }
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CBSE;
