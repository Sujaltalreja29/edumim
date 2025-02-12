import React, { useEffect } from "react";
import Header from "../Header";
import About from "../HomeThreeComponents/About";
import Accordion from "../HomeThreeComponents/Accordion";
import Banner from "../Banner";
import Brands from "../HomeThreeComponents/Brands";
import CourseBlock from "../HomeThreeComponents/CourseBlock";
import Event from "../HomeThreeComponents/Event";
import Team from "../HomeThreeComponents/Team";
import Testimonial from "../HomeThreeComponents/Testimonial";
import BlogArticle from "../HomeTwoComponents/BlogArticle";
import Footer from "../Footer";
import CourseSection from "../HomeThreeComponents/CourseSection";
import Counter from "../HomeTwoComponents/Counter";
import Feature from "../Feature";
import Testimonials from "../Testimonials";
function HomeThree() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header />
      <Banner />
      {/* <Brands /> */}
      <About />
      {/* <Feature /> */}
      {/* <Counter/> */}
      <Testimonials />
      <CourseSection />
      {/* <Team />
      <Testimonial /> */}
      {/* <CourseBlock />
      <Accordion /> */}
      {/* <BlogArticle /> */}
      <Event />
      <Footer />
    </>
  );
}

export default HomeThree;
