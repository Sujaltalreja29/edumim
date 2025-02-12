import React from "react";
import { Target } from 'lucide-react';
const Feature = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Our Philosophy</div>
          <div className="column-title">
            <span className="shape-bg">Vision</span> & <span className="shape-bg">Mission</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          <div className="bg-white shadow-box rounded-[8px] p-10 group hover:bg-primary transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon="clarity:eye-line"></iconify-icon>
            </div>
            <h4 className="lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Our Vision
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              To nurture young minds into well-rounded individuals rooted in Indian values while embracing global perspectives. We strive to create future leaders who combine academic excellence with moral integrity and cultural awareness.
            </div>
          </div>

          <div className="bg-white shadow-box rounded-[8px] p-10 group hover:bg-primary transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-secondary bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <Target />
              <iconify-icon icon="carbon:target"></iconify-icon>
            </div>
            <h4 className="lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              Our Mission
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              To provide holistic education through innovative teaching methods, fostering creativity, critical thinking, and character development. We aim to create a learning environment that promotes academic excellence, cultural values, and social responsibility while preparing students for global challenges.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;