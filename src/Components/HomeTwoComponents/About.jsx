import React from "react";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img 
              src="https://th.bing.com/th/id/OIP.mNOdkhl-S3Ma7vTUF-FMKAHaE2?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
              alt="School Building" 
              className="block w-full" 
            />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">About Our School</div>
            <h4 className="column-title">
              Empowering Students for a <span className="shape-bg">Brighter Future</span>
            </h4>
            <div className="mb-8">
              Our school is dedicated to providing a nurturing and stimulating learning environment 
              where students can grow academically, socially, and emotionally.
            </div>
            <div className="space-y-8">
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="90%">
                  <span className="block text-black font-semibold mb-2">
                    Academic Excellence
                  </span>
                  <span className="block mb-2 text-black font-semibold">90%</span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani h-[6px] bg-primary block absolute left-0 top-1/2 -translate-y-1/2"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="80%">
                  <span className="block text-black font-semibold mb-2">
                    Extracurricular Activities
                  </span>
                  <span className="block mb-2 text-black font-semibold">80%</span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div className="progressbar-group">
                <div className="flex justify-between" data-width="95%">
                  <span className="block text-black font-semibold mb-2">
                    Student Satisfaction
                  </span>
                  <span className="block mb-2 text-black font-semibold">95%</span>
                </div>
                <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative">
                  <div
                    className="ani h-[6px] bg-tertiary block absolute left-0 top-1/2 -translate-y-1/2"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
