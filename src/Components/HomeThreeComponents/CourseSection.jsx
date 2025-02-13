import React, { useState, useEffect } from "react";

const NewsFilter = ({ activeData, setActiveData, setFilterData, mainData }) => {
  const categories = ["All", "News", "Achievement"];

  const handleFilter = (category, index) => {
    setActiveData(index);
    if (category === "All") {
      setFilterData(mainData);
    } else {
      const filtered = mainData.filter((item) => item.type === category);
      setFilterData(filtered);
    }
  };

  return (
    <div className="flex flex-wrap space-x-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleFilter(category, index)}
          className={`btn ${
            activeData === index ? "btn-primary" : "btn-outline-primary"
          } mb-2`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const SingleNews = ({ data }) => {
  const { img, category, title, date, views, type } = data;
  return (
    <div className="w-1/3 px-4 mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <div className="relative">
          <img 
            id="news"
            src={img} 
            alt={title}
            className="w-full h-40 object-cover"
          />
          {/* <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span> */}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2 hover:text-primary cursor-pointer line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-gray-500 text-sm space-x-4">
            <span>{date}</span>
            <span>•</span>
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const [activeData, setActiveData] = useState(0);
  const [filterData, setFilterData] = useState([]);

  const allData = [
    {
      id: 1,
      img: "https://th.bing.com/th/id/OIP.tNPbWTp-m-ABy0DsFuXkOwHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Academic Excellence",
      type: "Achievement",
      title: "Our Students Top CBSE Board Exams with 98.9% School Average",
      date: "10 Feb, 25",
      views: "3.2k Views",
    },
    {
      id: 2,
      img: "https://th.bing.com/th/id/OIP.rKlhgb2k80uTs4qxMgPz7QHaFX?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Co-curricular",
      type: "Achievement",
      title: "School Cricket Team Wins Inter-School Tournament Trophy",
      date: "8 Feb, 25",
      views: "2.8k Views",
    },
    {
      id: 3,
      img: "https://th.bing.com/th/id/OIP.SeI8RYmQgMiA8yeU-2oISAHaFj?w=242&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Cultural",
      type: "News",
      title: "Annual Cultural Fest 'Tarang 2025' Celebrates Indian Heritage",
      date: "5 Feb, 25",
      views: "2.5k Views",
    },
    {
      id: 4,
      img: "https://th.bing.com/th/id/OIP.tW4sydZUMfXCO-lUg1SqQQHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Innovation",
      type: "News",
      title: "Smart Classroom Initiative Launched Across All Sections",
      date: "3 Feb, 25",
      views: "2.1k Views",
    },
    {
      id: 5,
      img: "https://th.bing.com/th/id/OIP.yQvWKDiAmqHkNtSCQbj5jQHaE8?w=277&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Social Service",
      type: "News",
      title: "Students Lead 'Swachh Vidyalaya' Campaign in Local Community",
      date: "1 Feb, 25",
      views: "1.9k Views",
    },
    {
      id: 6,
      img: "https://th.bing.com/th/id/OIP.Rp8aMWciOk5giEfZ6XgpIAHaGl?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      category: "Academic",
      type: "Achievement",
      title: "School Receives CBSE Excellence Award for Academic Performance",
      date: "30 Jan, 25",
      views: "2.7k Views",
    },
  ];

  useEffect(() => {
    setFilterData(allData);
  }, []);

  const chunkedData = filterData.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div className="section-padding bg-[url('../images/all-img/section-bg-11.png')] bg-cover bg-no-repeat">
      <div className="container">
        <div className="flex items-center flex-wrap flex-y-4">
          <div className="flex-1">
            <div className="mini-title">Latest Updates</div>
            <div className="column-title">
              News & <span className="shape-bg">Achievements</span>
            </div>
          </div>
          <div className="flex-none">
            <NewsFilter
              mainData={allData}
              activeData={activeData}
              setActiveData={setActiveData}
              setFilterData={setFilterData}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-0">
          {filterData?.length > 0 ? (
            filterData.map((data) => (
              <SingleNews key={data.id} data={data} />
            ))
          ) : (
            <div className="col-span-3 text-center text-xl text-gray-500">
              No items found
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-primary">
            View All Updates
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;