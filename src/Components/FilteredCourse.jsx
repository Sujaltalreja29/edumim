import { Tab } from "@headlessui/react";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { activityData, schoolActivities, achievements, sports, communityService, olympiad, cbseActivities } from "../constant/dummyData";

const FilteredCourse = ({ classNameForTabOne, classNameForTabTwo, page }) => {
  const [sortOrder, setSortOrder] = useState("default");

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

  const sortedCourseData = useMemo(() => {
    let sorted = [...allCourseData];
    
    switch (sortOrder) {
      case "a-z":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "z-a":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "newest":
        return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "oldest":
        return sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
      default:
        return sorted;
    }
  }, [sortOrder, allCourseData]);

  const listIcon = [
    "clarity:grid-view-line",
    "ant-design:unordered-list-outlined",
  ];

  const sortOptions = [
    { value: "default", label: "Default Order" },
    { value: "a-z", label: "A to Z" },
    { value: "z-a", label: "Z to A" },
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
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
          <span>Showing {sortedCourseData.length} activities</span>
        </div>
        <div className="flex-0">
          <div className="min-w-[272px]">
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full h-[60px] border border-gray-200 rounded px-6 focus:border-primary focus:ring-0"
            >
              {sortOptions.map((option) => (
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
            {sortedCourseData.map((item, index) => (
              <Link
                className="bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
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
                <Link 
                  to={`/react-templates/edumim/single-course/${page}/${item.id}`}>
                  <h4 className="text-2xl leading-[36px] mb-4 font-bold">
                    {item.title}
                  </h4>
                  </Link>
                  <p>{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
          {sortedCourseData.length > 0 && (
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
            {sortedCourseData.map((item, index) => (
              <>
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
                  <Link 
                  to={`${item.id}`}>
                  <h4 className="text-2xl leading-[36px] mb-4 font-bold">
                    {item.title}
                  </h4>
                  </Link>
                </div>
                </>
            ))}
          </div>
          {sortedCourseData.length > 0 && (
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