import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";
import { fbIcon, twIcon, pnIcon, insIcon } from "../constant/images";

const MobileMenu = ({ activeMenu, setActiveMenu }) => {
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const [showAcademicsMenu, setShowAcademicsMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleShowAboutMenu = () => {
    setShowAboutMenu(!showAboutMenu);
  };
  const handleShowAdminMenu = () => {
    setShowAdminMenu(!showAdminMenu);
  };
  const handleShowAcademicsMenu = () => {
    setShowAcademicsMenu(!showAcademicsMenu);
  };
  const handleShowMoreMenu = () => {
    setShowMoreMenu(!showMoreMenu);
  };

  return (
    <>
      <div className="openmobile-menu fixed top-0 h-screen pt-10 pb-6 bg-white shadow-box2 w-[320px] overflow-y-auto flex flex-col z-[999] active-mobile-menu">
        <div className="flex justify-between px-6 flex-none">
          <Link
            to={"/react-templates/edumim"}
            className="brand-logo flex-none mr-10 max-h-[40px]"
          >
            {/* <img src={logo} alt="logo" /> */}
          </Link>
          <span
            className="text-3xl text-black cursor-pointer rt-mobile-menu-close"
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            <iconify-icon icon="fe:close"></iconify-icon>
          </span>
        </div>
        <div className="mobile-menu mt-6 flex-1">
          <ul className="menu-active-classNamees">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              className={`menu-item-has-children ${showAboutMenu ? "open" : ""}`}
              onClick={handleShowAboutMenu}
            >
              <a href="#">About</a>
              <ul
                className="sub-menu"
                style={showAboutMenu ? { display: "block" } : { display: "none" }}
              >
                <li><Link to={"/react-templates/edumim/about"}>About Us</Link></li>
                <li><Link to={"/react-templates/edumim/about-two"}>Affiliation</Link></li>
                <li><Link to={"/react-templates/edumim/instructor"}>Infrastructure</Link></li>
                <li><Link to={"/react-templates/edumim/instructor-two"}>Admission</Link></li>
                <li><Link to={"/react-templates/edumim/instructor-details"}>Principal's Message</Link></li>
                <li><Link to={"/react-templates/edumim/event"}>Mandatory Disclosure</Link></li>
              </ul>
            </li>
            <li
              className={`menu-item-has-children ${showAdminMenu ? "open" : ""}`}
              onClick={handleShowAdminMenu}
            >
              <a href="#">Administration</a>
              <ul
                className="sub-menu"
                style={showAdminMenu ? { display: "block" } : { display: "none" }}
              >
                <li><Link to={"/react-templates/edumim/courses"}>Staff Details</Link></li>
                <li><Link to={"/react-templates/edumim/courses-sidebar"}>School Committee</Link></li>
                <li><Link to={"/react-templates/edumim/single-course"}>Student Enroll</Link></li>
                <li><Link to={"/react-templates/edumim/single-course"}>Fee and Scholarship</Link></li>
                <li><Link to={"/react-templates/edumim/single-course"}>Teachers Training</Link></li>
                <li><Link to={"/react-templates/edumim/single-course"}>TC Sample</Link></li>
              </ul>
            </li>
            <li
              className={`menu-item-has-children ${showAcademicsMenu ? "open" : ""}`}
              onClick={handleShowAcademicsMenu}
            >
              <a href="#">Academics</a>
              <ul
                className="sub-menu"
                style={showAcademicsMenu ? { display: "block" } : { display: "none" }}
              >
                <li><Link to={"/react-templates/edumim/blog-standard"}>School Curriculum</Link></li>
                <li><Link to={"/react-templates/edumim/single-blog"}>List of Books</Link></li>
                <li><Link to={"/react-templates/edumim/single-blog"}>School at Glance</Link></li>
                <li><Link to={"/react-templates/edumim/single-blog"}>Holidays List</Link></li>
                <li><Link to={"/react-templates/edumim/single-blog"}>CBSE Result</Link></li>
              </ul>
            </li>
            <li
              className={`menu-item-has-children ${showMoreMenu ? "open" : ""}`}
              onClick={handleShowMoreMenu}
            >
              <a href="#">More</a>
              <ul
                className="sub-menu"
                style={showMoreMenu ? { display: "block" } : { display: "none" }}
              >
                <li><Link to={"/react-templates/edumim/Co-Curricular"}>Co Curricular Activities</Link></li>
                <li><Link to={"/react-templates/edumim/school-activities"}>School Activities</Link></li>
                <li><Link to={"/react-templates/edumim/activities"}>Achievements</Link></li>
                <li><Link to={"/react-templates/edumim/olympiad"}>Olympiad</Link></li>
                <li><Link to={"/react-templates/edumim/community"}>Community Services</Link></li>
                <li><Link to={"/react-templates/edumim/sports"}>Sports</Link></li>
                <li><Link to={"/react-templates/edumim/cbse"}>CBSE Activities</Link></li>
              </ul>
            </li>
            <li>
              <Link to={"/react-templates/edumim/contacts"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/react-templates/edumim/contacts"}>Notice</Link>
            </li>
            <li>
              <Link to={"/react-templates/edumim/contacts"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex-none pb-4">
          <div className="text-center text-black font-semibold mb-2">
            Follow Us
          </div>
          <ul className="flex space-x-4 justify-center">
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={fbIcon} alt="fbIcon" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={twIcon} alt="twiter" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={pnIcon} alt="pnIcon" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={insIcon} alt="insIcon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`rt-mobile-menu-overlay ${activeMenu && "active"}`}></div>
    </>
  );
};

export default MobileMenu;