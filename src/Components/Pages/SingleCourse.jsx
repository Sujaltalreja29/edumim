import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import CourseDetails from "../CourseDetails";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const SingleCourse = () => {
  const { id , page } = useParams(); // Get the id from the URL
  return (
    <>
      <Header />
      <PageBanner title={`Course Details`} pageName={"Course Details"} />
      <CourseDetails id={id} page={page}/> {/* Pass id to CourseDetails if needed */}
      <Footer />
    </>
  );
};

export default SingleCourse;
