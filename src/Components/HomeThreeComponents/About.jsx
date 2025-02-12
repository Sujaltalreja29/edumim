import React from "react";
import { about5, h, videoIcon, whiteWebIcon } from "../../constant/images";
import image from '../../assets/images/banner/image.png'
const About = () => {
  return (
    <div className="about-area  section-padding-top pb-16 relative z-[1]">
      <div className=" absolute right-[7%] top-[20%] z-[-1] hidden xl:block">
        <img src={h} alt="" />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-[70px] lg:gap-10 gap-6">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={image} alt="Eror" className="img-fluid" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
            <div className="mini-title">Principal's Message</div>
            <h4 className="column-title ">
              You Can Learn Anything, Anytime From{" "}
              <span className="shape-bg">Anywhere</span>
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
                  Mission
                  </h4>
                  <div>
                  To provide a holistic and inclusive education that nurtures academic excellence, critical thinking, and lifelong learning.
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
                  Vision
                  </h4>
                  <div>
                  To be a leading institution that empowers students to become responsible global citizens through innovation and integrity.
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
