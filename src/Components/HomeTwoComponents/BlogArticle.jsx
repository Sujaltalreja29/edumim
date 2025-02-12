import React from "react";
import { Link } from "react-router-dom";

const NewsAndAchievements = () => {
    const newsData = [
      {
        id: 1,
        img: "https://th.bing.com/th/id/OIP.rKlhgb2k80uTs4qxMgPz7QHaFX?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        category: "Academic Excellence",
        title: "Our Students Top CBSE Board Exams with 98.9% School Average",
        date: "10 Feb, 25",
        views: "3.2k Views",
      },
      {
        id: 2,
        img: "https://th.bing.com/th/id/OIP.rKlhgb2k80uTs4qxMgPz7QHaFX?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        category: "Co-curricular",
        title: "School Cricket Team Wins Inter-School Tournament Trophy",
        date: "8 Feb, 25",
        views: "2.8k Views",
      },
      {
        id: 3,
        img: "https://th.bing.com/th/id/OIP.SeI8RYmQgMiA8yeU-2oISAHaFj?w=242&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        category: "Cultural",
        title: "Annual Cultural Fest 'Tarang 2025' Celebrates Indian Heritage",
        date: "5 Feb, 25",
        views: "2.5k Views",
      },
      {
        id: 4,
        img: "https://th.bing.com/th/id/OIP.SeI8RYmQgMiA8yeU-2oISAHaFj?w=242&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        category: "Innovation",
        title: "Smart Classroom Initiative Launched Across All Sections",
        date: "3 Feb, 25",
        views: "2.1k Views",
      },
      {
        id: 5,
        img: "https://th.bing.com/th/id/OIP.SeI8RYmQgMiA8yeU-2oISAHaFj?w=242&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        category: "Social Service",
        title: "Students Lead 'Swachh Vidyalaya' Campaign in Local Community",
        date: "1 Feb, 25",
        views: "1.9k Views",
      },
      {
        id: 6,
        img: "https://th.bing.com/th/id/OIP.Rp8aMWciOk5giEfZ6XgpIAHaGl?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        category: "Achievement",
        title: "School Receives CBSE Excellence Award for Academic Performance",
        date: "30 Jan, 25",
        views: "2.7k Views",
      },
    ];

  return (
    <div className="section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">News and Achievements</div>
          <div className="column-title">
            Latest School <span className="shape-bg">Updates</span>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 lg:pt-10 pt-5">
          {newsData.map((item, index) => (
            <div
              className="bg-white shadow-box7 rounded-lg group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
              hover:shadow-box8 flex flex-col h-full"
              key={index}
            >
              <div className="w-full">
                <div className="h-48 rounded-t-lg relative overflow-hidden">
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
                <h4 className="text-lg font-bold mb-4 line-clamp-2">
                  <Link
                    to={`/news/${item.id}`}
                    className="group-hover:text-primary transition duration-150"
                  >
                    {item.title}
                  </Link>
                </h4>
                <div className="flex items-center space-x-4 mt-auto text-sm text-gray-600">
                  <span className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>{item.date}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    <span>{item.views}</span>
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

export default NewsAndAchievements;