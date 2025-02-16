import React, { useState, useEffect } from "react";
import Header from "../Header"
import PageBanner from "../PageBanner"
import Footer from "../Footer";
const BookListPage = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    priceRange: 10000,
    categories: [],
    grades: [],
    subjects: []
  });

  // Handle receiving filtered books from sidebar
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
        <Header />
        <PageBanner title="Books list" /> 
      <div className="nav-tab-wrapper tabs pt-10 section-padding-bottom">
        <div className="container">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-8 col-span-12">
              <BookList 
                classNameForTabOne={"grid grid-cols-1 gap-[30px]"} 
                filters={filters}
              />
            </div>
            <div className="lg:col-span-4 col-span-12">
              <SideBar onFilterChange={handleFilterChange} />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

const BookList = ({ classNameForTabOne, filters }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  
  const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "Classic literature exploring racial injustice in the American South",
      price: 259,
      category: "Literature",
      grade: "9th Grade",
      subject: "English"
    },
    {
      id: 2,
      title: "Advanced Calculus",
      author: "Michael Thompson",
      description: "Comprehensive guide to advanced mathematics including derivatives and integrals",
      price: 459,
      category: "Mathematics",
      grade: "12th Grade",
      subject: "Mathematics"
    },
    {
      id: 3,
      title: "World History: Modern Era",
      author: "Sarah Johnson",
      description: "In-depth coverage of modern historical events from the 18th century to present",
      price: 359,
      category: "History",
      grade: "10th Grade",
      subject: "History"
    },
    {
      id: 4,
      title: "Chemistry Fundamentals",
      author: "David Wilson",
      description: "Essential concepts in chemistry with practical experiments and examples",
      price: 429,
      category: "Science",
      grade: "11th Grade",
      subject: "Science"
    },
    {
      id: 5,
      title: "Spanish for Beginners",
      author: "Maria Garcia",
      description: "Comprehensive Spanish language course for high school students",
      price: 299,
      category: "Languages",
      grade: "9th Grade",
      subject: "Foreign Languages"
    },
    {
      id: 6,
      title: "Biology: Life Sciences",
      author: "Robert Brown",
      description: "Detailed exploration of living organisms and ecological systems",
      price: 389,
      category: "Science",
      grade: "10th Grade",
      subject: "Science"
    },
    {
      id: 7,
      title: "American Literature",
      author: "Emily White",
      description: "Survey of American literature from colonial times to modern era",
      price: 329,
      category: "Literature",
      grade: "11th Grade",
      subject: "English"
    },
    {
      id: 8,
      title: "Physics Principles",
      author: "Alan Parker",
      description: "Fundamental physics concepts with practical applications",
      price: 479,
      category: "Science",
      grade: "12th Grade",
      subject: "Science"
    }
  ];

  useEffect(() => {
    let result = [...books];

    // Apply search filter
    if (filters.search) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        book.author.toLowerCase().includes(filters.search.toLowerCase()) ||
        book.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Apply price filter
    result = result.filter(book => book.price <= filters.priceRange);

    // Apply category filters
    if (filters.categories.length > 0) {
      result = result.filter(book => filters.categories.includes(book.category));
    }

    // Apply grade filters
    if (filters.grades.length > 0) {
      result = result.filter(book => filters.grades.includes(book.grade));
    }

    // Apply subject filters
    if (filters.subjects.length > 0) {
      result = result.filter(book => filters.subjects.includes(book.subject));
    }

    setFilteredBooks(result);
  }, [filters]);

  return (
    <div className={classNameForTabOne}>
      {filteredBooks.length === 0 ? (
        <div className="bg-[#F8F8F8] p-6 rounded-lg text-center">
          <p className="text-gray-600">No books found matching your criteria.</p>
        </div>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.id} className="bg-[#F8F8F8] p-6 rounded-lg">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-black">{book.title}</h3>
                <span className="text-primary font-bold">₹{book.price}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <span>By {book.author}</span>
                <span className="mx-2">•</span>
                <span>{book.category}</span>
                <span className="mx-2">•</span>
                <span>{book.grade}</span>
              </div>
              <p className="text-gray-600">{book.description}</p>
              <div className="flex space-x-4">
                <button className="btn btn-primary bg-blue-600 text-white px-6 py-2 rounded-md">
                Rent
                </button>
                <button className="btn btn-secondary border border-gray-300 px-6 py-2 rounded-md">
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const SideBar = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [priceVal, setPriceVal] = useState(10000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const categories = [
    { name: "Literature", count: 23 },
    { name: "Mathematics", count: 45 },
    { name: "Science", count: 14 },
    { name: "History", count: 28 },
    { name: "Languages", count: 34 }
  ];

  const grades = [
    "9th Grade",
    "10th Grade",
    "11th Grade",
    "12th Grade"
  ];

  const subjects = [
    "English",
    "Mathematics",
    "Science",
    "History",
    "Foreign Languages"
  ];

  useEffect(() => {
    onFilterChange({
      search,
      priceRange: priceVal,
      categories: selectedCategories,
      grades: selectedGrades,
      subjects: selectedSubjects
    });
  }, [search, priceVal, selectedCategories, selectedGrades, selectedSubjects]);

  const handleCategoryClick = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      }
      return [...prev, category];
    });
  };

  const handleGradeChange = (grade) => {
    setSelectedGrades(prev => {
      if (prev.includes(grade)) {
        return prev.filter(g => g !== grade);
      }
      return [...prev, grade];
    });
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubjects(prev => {
      if (prev.includes(subject)) {
        return prev.filter(s => s !== subject);
      }
      return [...prev, subject];
    });
  };

  return (
    <div className="sidebarWrapper space-y-[30px]">
      <div className="wdiget widget_search">
        <div className="bg-[#F8F8F8] flex rounded-md shadow-e1 items-center py-[4px] pl-3 relative">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search books..."
              className="border-none focus:ring-0 bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="wdiget widget_catagory">
        <h4 className="widget-title text-lg font-bold mb-4">Price Filter</h4>
        <input 
          type="range" 
          max={1000} 
          min={0} 
          value={priceVal}
          className="slider-range w-full" 
          onChange={(e) => setPriceVal(Number(e.target.value))} 
        />
        <div className="price_slider_amount">
          <div className="mt-6">
            <div className="flex space-x-2 text-xl font-medium text-black">
              <span className="flex-none">Price:</span>
              <span className="flex-1">₹{priceVal}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="wdiget widget_catagory">
        <h4 className="widget-title text-lg font-bold mb-4">Categories</h4>
        <ul className="list-item space-y-4">
          {categories.map((category) => (
            <li key={category.name} className="block">
              <button
                onClick={() => handleCategoryClick(category.name)}
                className={`w-full flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded transition-all duration-150 ${
                  selectedCategories.includes(category.name) ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'
                }`}
              >
                <span>{category.name} ({category.count})</span>
                <span className="text-2xl">
                  <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="wdiget widget_catagory">
        <h4 className="widget-title text-lg font-bold mb-4">Grade Level</h4>
        <ul className="list-item space-y-5">
          {grades.map((grade) => (
            <li key={grade} className="block">
              <label className="flex space-x-3 form-check cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300"
                  checked={selectedGrades.includes(grade)}
                  onChange={() => handleGradeChange(grade)}
                />
                <span className="form-check-label">{grade}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="wdiget widget_catagory">
        <h4 className="widget-title text-lg font-bold mb-4">Subject</h4>
        <ul className="list-item space-y-5">
          {subjects.map((subject) => (
            <li key={subject} className="block">
              <label className="flex space-x-3 form-check cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => handleSubjectChange(subject)}
                />
                <span className="form-check-label">{subject}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookListPage;