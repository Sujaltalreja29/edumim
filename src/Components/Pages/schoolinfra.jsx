import React from "react";
import { Link } from "react-router-dom";
import library from '../../assets/images/infrastructure/library.png'
import sports from '../../assets/images/infrastructure/sports.png'
import labs from '../../assets/images/infrastructure/labs.png'
import audi from '../../assets/images/infrastructure/audi.png'
const Infrastructure = () => {
    const infrastructureData = [
      {
        id: 1,
        img: labs,
        category: "Science Labs",
        title: "State-of-the-Art Physics, Chemistry & Biology Laboratories",
        description: "Fully equipped labs with modern apparatus and safety equipment",
        features: "200+ experiments capacity",
      },
      {
        id: 2,
        img: audi,
        category: "Smart Classrooms",
        title: "Digital Learning Enabled Classrooms with Interactive Boards",
        description: "40+ smart classrooms with digital learning tools",
        features: "Interactive learning",
      },
      {
        id: 3,
        img: sports,
        category: "Sports Complex",
        title: "International Standard Sports Facilities and Training Arena",
        description: "Olympic-size swimming pool, indoor sports complex",
        features: "Multi-sport facility",
      },
      {
        id: 4,
        img: library,
        category: "Library",
        title: "Modern Library with Digital Resources and Reading Zones",
        description: "20,000+ books and digital resources",
        features: "Quiet study areas",
      },
      {
        id: 5,
        img: labs,
        category: "Computer Lab",
        title: "Advanced Computer Labs with Latest Technology",
        description: "100+ computers with high-speed internet",
        features: "Coding workshops",
      },
      {
        id: 6,
        img: audi,
        category: "Auditorium",
        title: "Multi-Purpose Auditorium for Events and Performances",
        description: "1000+ seating capacity with modern audio-visual system",
        features: "Cultural events",
      },
    ];

  return (
    <div className="section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Campus Facilities</div>
          <div className="column-title">
            School <span className="shape-bg">Infrastructure</span>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-10 pt-5">
          {infrastructureData.map((item, index) => (
            <div
              className="bg-white shadow-box7 rounded-lg group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
              hover:shadow-box8 flex flex-col h-full"
              key={index}
            >
              <div className="w-full">
                <div className="h-64 rounded-t-lg relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="inline-block text-sm text-secondary bg-[#E3F9F6] font-medium rounded px-3 py-1">
                    {item.category}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-3 line-clamp-2">
                  <Link
                    to={`/infrastructure/${item.id}`}
                    className="group-hover:text-primary transition duration-150"
                  >
                    {item.title}
                  </Link>
                </h4>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center space-x-4 mt-auto text-sm text-gray-600">
                  <span className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item.features}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;