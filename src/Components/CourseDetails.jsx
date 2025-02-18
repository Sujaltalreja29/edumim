/* eslint-disable jsx-a11y/anchor-is-valid */
import { Disclosure, Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import { activityData, schoolActivities, achievements, sports, communityService, olympiad, cbseActivities } from "../constant/dummyData";
import {
  author,
  camera,
  ck,
  fb,
  file2,
  fileIcon,
  headphone,
  instra,
  laptop,
  likeIcon,
  ln,
  lock,
  pencil,
  play,
  singleCourseThumb,
  starIcon,
  target,
  thumb,
  twitter,
  user,
  user2,
  ux,
  web,
  wifi,
  yt,
  twIcon,
  pnIcon,
  insIcon,
  rc1,
  rc2,
  rc3,
  clockIcon,
  cmnt1,
  cmnt2,
} from "../constant/images";

const   CourseDetails = ({id , page}) => {
  console.log(id)
  const schoolData = [
      { category: "Curricular", data: activityData },
      { category: "School", data: schoolActivities },
      { category: "Achievements", data: achievements },
      { category: "Olympiad", data: olympiad },
      { category: "Community", data: communityService },
      { category: "Sports", data: sports },
      { category: "CBSE", data: cbseActivities },
    ];
  
    const curr_data = schoolData.filter((item) => item.category === page);
    const page_data = curr_data[0].data;
    const data = page_data[id]
  console.log(data)
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-10 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="single-course-details">
              <div className="xl:h-[470px] h-[350px] mb-10 course-main-thumb">
                <img
                  src={data.img}
                  alt="error"
                  className=" rounded-md object-fut w-full h-full block"
                />
              </div>
              <div className=" mb-6">
                <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white ">
                  {data.post}
                </span>
              </div>
              <h2>{data.title}</h2>
              <div
                className="author-meta mt-6 sm:flex  lg:space-x-16 sm:space-x-5 space-y-5 
               sm:space-y-0 items-center"
              >
              </div>
              <Tab.Group>
                <div className="nav-tab-wrapper mt-12">
                  <Tab.List as="ul" id="tabs-nav" className="course-tab mb-8">
                    {["OverView", "Reviews"].map(
                      (item, index) => (
                        <Tab
                          as="li"
                          key={index}
                          className={({ selected }) =>
                            selected ? "active" : null
                          }
                        >
                          <a href={`#tab`}>{item}</a>
                        </Tab>
                      )
                    )}
                  </Tab.List>
                  <Tab.Panels id="tabs-content">
                    <Tab.Panel id="tab1" className="tab-content">
                      <div>
                        <h3 className=" text-2xl">Course Description</h3>
                        <p className="mt-4">
                          This tutorial will help you learn quickly and
                          thoroughly. Lorem ipsum, or lipsum as it sometimes
                          known, is dummy text used in laying out print, graphic
                          or web designs. Lorem ipsum dolor sit amet,
                          consectetuer adipiscing elit. Donec odio. Quisque
                          volutpat mattis eros.
                          <br /> <br /> You’ll be exposed to principles and
                          strategies, but, more importantly, you’ll learn how
                          actually apply these abstract concepts by coding three
                          different websites for three very different the
                          audiences. Lorem ipsum is dummy text used in laying
                          out print, graphic or web designs Lorem ipsum blinding
                          shot chinwag knees.
                        </p>
                        <div className="bg-[#F8F8F8] space-y-6 p-8 rounded-md my-8">
                          <h4 className=" text-2xl">What You will Learn?</h4>
                          <ul className=" grid sm:grid-cols-2 grid-cols-1 gap-6">
                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                Learn how perspective works and how to
                                incorporate your art
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                Learn how perspective works and how to
                                incorporate your art
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                Learn how perspective works and how to
                                incorporate your art
                              </div>
                            </li>

                            <li className=" flex space-x-3">
                              <div className="flex-none  relative top-1 ">
                                <img src={ck} alt="" />
                              </div>
                              <div className="flex-1">
                                Learn how perspective works and how to
                                incorporate your art
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className=" text-2xl">What You will Learn?</h4>
                          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
                            <div className=" bg-white  rounded px-5 py-[18px] flex   shadow-box2 space-x-[10px] items-center">
                              <span className="flex-none">
                                <img src={laptop} alt="" />
                              </span>
                              <span className="flex-1 text-black">
                                Computer/Mobile
                              </span>
                            </div>
                            <div className=" bg-white  rounded px-5 py-[18px] flex  shadow-box2 space-x-[10px] items-center">
                              <span className="flex-none">
                                <img src={pencil} alt="" />
                              </span>
                              <span className="flex-1 text-black">
                                Paper & Pencil
                              </span>
                            </div>
                            <div className=" bg-white  rounded px-5 py-[18px] flex  shadow-box2 space-x-[10px] items-center">
                              <span className="flex-none">
                                <img src={wifi} alt="" />
                              </span>
                              <span className="flex-1 text-black">
                                Internet Connect
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel as="div" id="tab4" className="tab-content">
                      <div>
                        <div className="grid grid-cols-12 gap-5">
                          <div className="md:col-span-8 col-span-12">
                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  {[1, 2, 3, 4, 5].map((item, index) => (
                                    <Fragment key={index}>
                                      <iconify-icon
                                        icon="heroicons:star-20-solid"
                                        class="text-tertiary"
                                      ></iconify-icon>
                                    </Fragment>
                                  ))}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      style={{ width: "40%" }}
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      40%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      data-progress="10"
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      10%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      data-progress="0"
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      0%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      data-progress="0"
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      0%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4  mb-5 last:mb-0 ">
                              <div className="flex-none">
                                <div className="flex space-x-1 text-xl  ">
                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-tertiary"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>

                                  <iconify-icon
                                    icon="heroicons:star-20-solid"
                                    class="text-[#E6E6E6]"
                                  ></iconify-icon>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="progressbar-group flex items-center space-x-4">
                                  <div className="rounded-[2px] overflow-hidden bg-opacity-10 bg-black h-[6px] relative flex-1">
                                    <div
                                      className="ani  h-[6px] bg-secondary block absolute left-0 top-1/2 -translate-y-1/2 "
                                      data-progress="0"
                                    ></div>
                                  </div>
                                  <div className="flex-none">
                                    <span className=" block mb-2  font-semibold">
                                      0%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="md:col-span-4 col-span-12">
                            <div className="bg-white min-h-[219px] p-6 flex flex-col justify-center items-center shadow-box7 rounded space-y-3">
                              <h2>4.9</h2>
                              <div className="flex space-x-3">
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                              </div>
                              <span className=" block">(2 Review)</span>
                            </div>
                          </div>
                        </div>
                        <div className=" mt-8">
                          <h4 className=" text-xl font-bold text-black">
                            Reviews
                          </h4>
                          <ul className=" list space-y-6 mt-6">
                            <li className=" flex space-x-6 ">
                              <div className="flex-none">
                                <div className="h-[72px] w-[72px] rounded-full">
                                  <img
                                    src={cmnt1}
                                    alt=""
                                    className=" object-cover w-full h-full"
                                  />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex space-x-3 mb-4">
                                  {[1, 2, 3, 4, 5].map((item, index) => (
                                    <Fragment key={index}>
                                      <iconify-icon
                                        icon="heroicons:star-20-solid"
                                        class="text-tertiary"
                                      ></iconify-icon>
                                    </Fragment>
                                  ))}
                                </div>
                                <p>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration.
                                </p>
                                <div className="author mt-4">
                                  <span className="block text-xl font-bold text-black">
                                    Daniel Smith
                                  </span>
                                  <span className="block">Jan 24, 2022</span>
                                </div>
                              </div>
                            </li>
                            <li className=" flex space-x-6 ">
                              <div className="flex-none">
                                <div className="h-[72px] w-[72px] rounded-full">
                                  <img
                                    src={cmnt2}
                                    alt=""
                                    className=" object-cover w-full h-full"
                                  />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex space-x-3 mb-4">
                                  {[1, 2, 3, 4, 5].map((item, index) => (
                                    <Fragment key={index}>
                                      <iconify-icon
                                        icon="heroicons:star-20-solid"
                                        class="text-tertiary"
                                      ></iconify-icon>
                                    </Fragment>
                                  ))}
                                </div>
                                <p>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration.
                                </p>
                                <div className="author mt-4">
                                  <span className="block text-xl font-bold text-black">
                                    Daniel Smith
                                  </span>
                                  <span className="block">Jan 24, 2022</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
