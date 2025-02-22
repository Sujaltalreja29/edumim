"use client"
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageBanner from "./PageBanner";
import banner from '../assets/images/all-img/schoool.jpeg'
import { jsPDF } from 'jspdf';

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
  const handleDownload = (classData) => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text(`${classData.class} Books List`, 20, 20);
    
    // Add books list
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    classData.books.forEach((book, index) => {
      doc.text(`${index + 1}. ${book}`, 20, 40 + (index * 10));
    });
    
    // Save the PDF
    doc.save(`${classData.class}-Books-List.pdf`);
  };

  return (
    <>
      <Header />
      <PageBanner title="Books list" pageName="" />

      <div className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
            {classData.map((item, index) => (
              <div key={index} className="card-container">
                <div className="card">
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
                        <div className="text-center mt-4">
                          <button 
                            onClick={() => handleDownload(item)}
                            className="btn btn-primary"
                          >
                            Download List
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .card-container {
            height: 300px;
          }
          .card {
            width: 100%;
            height: 100%;
            position: relative;
          }
          .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            padding: 20px;
          }
          .card-front {
            background-color: #FFE8E8;
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
            margin-bottom: 16px;
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