import React from "react";
import { about5, h, videoIcon, whiteWebIcon } from "../../constant/images";
import image from '../../assets/images/banner/principal.jpg'
import { Navigate, useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate()
  return (
    <div className="about-area  section-padding-top pb-16 relative z-[1]">
      <div className=" absolute right-[7%] top-[20%] z-[-1] hidden xl:block">
        <img src={h} alt="" />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-[70px] lg:gap-10 gap-6">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={`https://cathedral-school.com/wp-content/uploads/2016/05/P-1b.jpg`} alt="Eror" className="img-fluid" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
            <button onClick={() => (navigate('/react-templates/edumim/instructor-details'))}>
            <div className="mini-title">Principal's Message</div>
            </button>
            <h4 className="column-title ">
            The Place Where You Can{" "}
              <span className="shape-bg">Achieve</span>
            </h4>
            <div>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </div>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                    <img src={videoIcon} alt="" className="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">
                  Our Mission
                  </h4>
                  <div>
                  There are many variations of passages of the Lorem Ipsum available.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                    <img src={whiteWebIcon} alt="" className=" " />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">
                  Our Vision
                  </h4>
                  <div>
                  There are many variations of passages of the Lorem Ipsum available.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
