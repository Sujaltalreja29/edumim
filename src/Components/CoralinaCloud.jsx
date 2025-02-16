/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { courseData } from "../constant/dummyData";
import Course from "./Course";
import {
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  singleIns,
  counter1,
  counter2,
  counter3,
} from "../constant/images";

const CoralinaCloud = () => {
  return (
    <div className="section-padding bg-[url('../images/all-img/insbg.png')] bg-contain   bg-no-repeat">
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-0 gap-[30px]">
          <div className="lg:col-span-4 col-span-12 ">
            <div className="bg-white shadow-box7 rounded-md max-w-[350px] lg:sticky lg:top-10">
              <div className="h-[400px] mb-8">
                <img
                  src={`https://cathedral-school.com/wp-content/uploads/2016/05/P-1b.jpg`}
                  alt=""
                  className="w-full h-full block object-cover rounded-t-md"
                />
              </div>
              <div className="px-8 pb-8">
                <h5 className=" text-2xl font-bold text-black mb-4">
                  Priya sharma
                </h5>
                <div className="mb-8">
                  Principal at Edumin School
                  where been since 1994. vulput for the
                  pellentesque commodo.
                </div>
                <ul className=" space-y-[19px]">
                  <li className=" flex items-center space-x-3">
                    <div className="flex-none">
                      <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                        <iconify-icon icon="heroicons:envelope"></iconify-icon>
                      </span>
                    </div>
                    <span className=" flex-1">info@designpixls.com</span>
                  </li>
                  <li className=" flex items-center space-x-3">
                    <div className="flex-none">
                      <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                        <iconify-icon icon="heroicons:phone"></iconify-icon>
                      </span>
                    </div>
                    <span className=" flex-1">8939 2390 3879 29</span>
                  </li>
                  <li className=" flex items-center space-x-3">
                    <div className="flex-none">
                      <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                        <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                      </span>
                    </div>
                    <span className=" flex-1">6/2, Stavello Hall, Sydney</span>
                  </li>
                </ul>
              </div>
            </div>  
          </div>
          <div className="lg:col-span-8 col-span-12">
            <div className="mb-10">
              <h2>Priya sharma</h2>
              <span className=" inline-block text-primary">Principal</span>
            </div>
            <div>
            The Edumin School is an institution that combines elements of academic excellence with a larger social sensitivity that is founded on the principles of honesty, integrity, and compassion. It is a place and a space where the teachers know the names as well as the stories of their students; where colleagues work in collaboration and camaraderie to bring out the best in the children entrusted to their care; and where each classroom fosters creativity, bonding, independence of thought, intellectual curiosity and academic rigour. I see it as an institution where a 162-year legacy coheres seamlessly with the innovations of the 21st century and where tradition meets modernity without disruption or fracture. It is where we teach our students how to understand and empower themselves with that which lies outside them – technology, information, communication, interaction, etc. – as well as with what lies within them – strength, resilience, integrity, and character.
            </div>
            <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-24">
              <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                <img
                  src={counter1}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                />
                <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                  <span className="counter">82</span>
                  k+
                </h4>
                <p>Enrolled Students</p>
              </div>

              <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                <img
                  src={counter2}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                />
                <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                  <span className="counter">460</span>+
                </h4>
                <p>Academic Programs</p>
              </div>

              <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                <img
                  src={counter3}
                  alt=""
                  className=" absolute left-1/2 -translate-x-1/2 -top-10"
                />
                <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                  <span className="counter">20</span>+
                </h4>
                <p>Certified Staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoralinaCloud;
