import { Tab } from "@headlessui/react";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { activityData, schoolActivities, achievements, sports, communityService, olympiad, cbseActivities } from "../constant/dummyData";
import { clock, file, review, star } from "../constant/images";

const FilteredCourse = ({ classNameForTabOne, classNameForTabTwo, page }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

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
  const allCourseData = curr_data[0].data;

  // Dynamically generate filter options from the data
  const filterOptions = useMemo(() => {
    const uniquePosts = [...new Set(allCourseData.map(item => item.post))];
    return [
      { value: "all", label: "All Activities" },
      ...uniquePosts.map(post => ({
        value: post.toLowerCase(),
        label: post.charAt(0).toUpperCase() + post.slice(1)
      }))
    ];
  }, [allCourseData]);

  const filteredCourseData = useMemo(() => {
    if (selectedFilter === "all") {
      return allCourseData;
    }
    return allCourseData.filter(
      (item) => item.post.toLowerCase() === selectedFilter.toLowerCase()
    );
  }, [selectedFilter, allCourseData]);

  const listIcon = [
    "clarity:grid-view-line",
    "ant-design:unordered-list-outlined",
  ];

  return (
    <Tab.Group>
      <div className="flex flex-wrap gap-5 justify-center items-center mb-14">
        <div className="flex-1 flex flex-wrap gap-5 space-x-6 items-center">
          <Tab.List as="ul" id="tabs-nav" className="flex space-x-4 cata-Tbas">
            {listIcon.map((className, key) => (
              <Tab
                as="li"
                className={({ selected }) => (selected ? "active" : "")}
                key={key}
              >
                <a
                  href="#"
                  className="h-[60px] w-[60px] flex flex-col justify-center items-center"
                >
                  <iconify-icon icon={className}></iconify-icon>
                </a>
              </Tab>
            ))}
          </Tab.List>
          <span>Showing {filteredCourseData.length} activities</span>
        </div>
        <div className="flex-0">
          <div className="min-w-[272px]">
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-full h-[60px] border border-gray-200 rounded px-6 focus:border-primary focus:ring-0"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Tab.Panels as="div" id="tabs-content">
        <Tab.Panel as="div" id="tab1" className="tab-content">
          <div className={classNameForTabOne}>
            {filteredCourseData.map((item, index) => (
              <Link
                className="bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                to={"/react-templates/edumim/single-course"}
                key={item.id * index}
              >
                <div className="course-thumb h-[248px] rounded-t-[8px] relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover rounded-t-[8px]"
                  />
                  <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                    {item.post}
                  </span>
                </div>
                <div className="course-content p-8">
                  <h4 className="text-xl mb-3 font-bold">{item.title}</h4>
                </div>
              </Link>
            ))}
          </div>
          {filteredCourseData.length > 0 && (
            <div className="text-center pt-14">
              <a
                href="#"
                className="btn btn-primary inline-flex items-center space-x-[10px]"
              >
                <span>Load More</span>
                <span className="relative top-1">
                  <iconify-icon icon="ion:reload-outline"></iconify-icon>
                </span>
              </a>
            </div>
          )}
        </Tab.Panel>
        <Tab.Panel id="tab2" className="tab-content">
          <div className={classNameForTabTwo}>
            {filteredCourseData.map((item, index) => (
              <Link
                className="bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent hover:shadow-box6 flex p-8 space-x-6"
                to={"/react-templates/edumim/single-course"}
                key={index}
              >
                <div className="flex-none">
                  <div className="w-[159px] h-[159px] rounded relative">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="course-content flex-1">
                  <div className="mb-2 flex justify-between">
                    <span className="bg-secondary py-1 px-3 text-sm font-semibold rounded text-white">
                      {item.post}
                    </span>
                  </div>
                  <h4 className="text-2xl leading-[36px] mb-4 font-bold">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
          {filteredCourseData.length > 0 && (
            <div className="text-center pt-14">
              <a
                href="#"
                className="btn btn-primary inline-flex items-center space-x-[10px]"
              >
                <span>Load More</span>
                <span className="relative top-1">
                  <iconify-icon icon="ion:reload-outline"></iconify-icon>
                </span>
              </a>
            </div>
          )}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FilteredCourse;