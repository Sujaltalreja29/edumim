"use client"
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageBanner from "./PageBanner";
import banner from '../assets/images/all-img/schoool.jpeg'

const classData = [
  {
    class: "Class 1",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - Marigold", "Hindi - Rimjhim", "Mathematics - Math Magic", "EVS - Looking Around"]
  },
  {
    class: "Class 2",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - Marigold", "Hindi - Rimjhim", "Mathematics - Math Magic", "EVS - Looking Around"]
  },
  {
    class: "Class 3",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - Marigold", "Hindi - Rimjhim", "Mathematics - Math Magic", "EVS - Looking Around"]
  },
  {
    class: "Class 4",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - Marigold", "Hindi - Rimjhim", "Mathematics - Math Magic", "EVS - Looking Around"]
  },
  {
    class: "Class 5",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - Marigold", "Hindi - Rimjhim", "Mathematics - Math Magic", "EVS - Looking Around"]
  },
  {
    class: "Class 6",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - Honeysuckle", "Hindi - Vasant", "Mathematics", "Science", "Social Science"]
  },
  {
    class: "Class 7",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - Honeycomb", "Hindi - Vasant", "Mathematics", "Science", "Social Science"]
  },
  {
    class: "Class 8",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - Honeydew", "Hindi - Vasant", "Mathematics", "Science", "Social Science"]
  },
  {
    class: "Class 9",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - Beehive", "Hindi - Kshitij", "Mathematics", "Science", "Social Science"]
  },
  {
    class: "Class 10",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English - First Flight", "Hindi - Kshitij", "Mathematics", "Science", "Social Science"]
  },
  {
    class: "Class 11",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English", "Physics", "Chemistry", "Mathematics", "Computer Science/Biology"]
  },
  {
    class: "Class 12",
    logo: "/placeholder.svg?height=32&width=32",
    books: ["English", "Physics", "Chemistry", "Mathematics", "Computer Science/Biology"]
  }
];

const ClassGrid = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <>
          <Header />
          <PageBanner title="Books list" pageName="" />

    <div className="section-padding">
      <div className="container">
        {/* <div className="text-center">
          <div className="mini-title">Explore Our Academic Programs</div>
          <div className="column-title">
            Choose Your <span className="shape-bg">Class</span> Level
          </div>
        </div> */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          {classData.map((item, index) => (
            <div 
              key={index} 
              className="card-container"
              onClick={() => handleCardClick(index)}
            >
              <div className={`card ${flippedCards.includes(index) ? 'flipped' : ''}`}>
                {/* Front of card */}
                <div className="card-face card-front">
                  <div className="card-content">
                    <div className="card-icon">
                      <img
                        src={banner || "/placeholder.svg"}
                        alt=""
                        className="icon-image"
                      />
                    </div>
                    <div className="card-info">
                      <h4 className="card-title">{item.class}</h4>
                      <p className="card-subtitle">Required Books: {item.books.length}</p>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="card-face card-back">
                  <div className="card-content">
                    <h4 className="card-title">{item.class} Books</h4>
                    <ul className="book-list">
                      {item.books.map((book, bookIndex) => (
                        <li key={bookIndex} className="book-item">
                          {bookIndex + 1}. {book}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .card-container {
          perspective: 1000px;
          height: 300px;
        }
        .card {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          cursor: pointer;
        }
        .card.flipped {
          transform: rotateY(180deg);
        }
        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          padding: 20px;
        }
        .card-front {
          background-color: #FFE8E8;
        }
        .card-back {
          background-color: white;
          transform: rotateY(180deg);
          overflow-y: auto;
        }
        .card-content {
          text-align: center;
        }
        .card-icon {
          width: 72px;
          height: 72px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .icon-image {
          width: 32px;
          height: 32px;
          object-fit: cover;
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .card-subtitle {
          font-size: 0.9rem;
          color: #666;
        }
        .book-list {
          list-style-type: none;
          padding: 0;
          text-align: left;
        }
        .book-item {
          font-size: 0.9rem;
          color: #333;
          margin-bottom: 8px;
        }
        .card:hover {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
};

export default ClassGrid;