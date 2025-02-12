import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      image: "https://th.bing.com/th/id/OIP.hzxAA5lkNKzbAuI5HjBpZwHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Academic Excellence Program",
      schedule: "Monday - Friday, 8:00 AM - 3:00 PM",
      location: "Main Campus Building",
      description: "Advanced curriculum with personalized learning paths",
    },
    {
      id: 2,
      image: "https://th.bing.com/th/id/OIP.liiIRRieZzqZqZxdAzsrRAHaDY?w=327&h=159&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Innovation Lab",
      schedule: "Tuesday - Thursday, 3:30 PM - 5:30 PM",
      location: "Science & Technology Wing",
      description: "Hands-on experience with cutting-edge technology",
    },
    {
      id: 3,
      image: "https://th.bing.com/th/id/OIP.scCVexZJeU2iy19VqrtQxQHaD3?w=345&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Sports & Athletics Program",
      schedule: "Monday - Saturday, 4:00 PM - 6:00 PM",
      location: "Sports Complex",
      description: "Professional coaching in multiple sports disciplines",
    }
  ];

  return (
    <div className="section-padding bg-white bg-[url('../images/all-img/section-bg-13.png')] bg-no-repeat">
      <div className="container">
        <div className="text-center mb-14">
          <div className="mini-title">Explore Our Services</div>
          <div className="column-title">
            Featured <span className="shape-bg">Programs</span>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {services.map((service) => (
            <div
              className="bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3"
              key={service.id}
            >
              <div className="course-thumb h-[297px] rounded-t-[8px] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-t-[8px]"
                />
              </div>
              <div className="course-content p-8">
                <h4 className="text-xl mb-5 font-bold">
                  <Link
                    to={`/services/${service.id}`}
                    className="hover:text-primary transition duration-150"
                  >
                    {service.title}
                  </Link>
                </h4>
                <ul className="list space-y-3 mb-6">
                  <li className="flex space-x-2">
                    <span className="text-lg text-secondary">
                      <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                    </span>
                    <span>{service.schedule}</span>
                  </li>
                  <li className="flex space-x-2">
                    <span className="text-lg text-secondary">
                      <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                    </span>
                    <span>{service.location}</span>
                  </li>
                </ul>
                <Link
                  to={`/services/${service.id}`}
                  className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;