/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
       <div className="main-header py-6">
  <div className="container">
    <div className="flex items-center justify-between">
      <Link
        to={"/react-templates/edumim"}
        className="ml-10 brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px]"
      >
        <img src={logo} alt="logo"/>
      </Link>
      <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li className="menu-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">About</a>
                      <ul className="sub-menu">
                        <li><Link to={"/react-templates/edumim/about"}>About Us</Link></li>
                        <li><Link to={"/react-templates/edumim/affiliation"}>Affiliation</Link></li>
                        <li><Link to={"/react-templates/edumim/infrastructure"}>Infrastructure</Link></li>
                        <li><Link to={"/react-templates/edumim/admission"}>Admission</Link></li>
                        <li><Link to={"/react-templates/edumim/instructor-details"}>Principal's Message</Link></li>
                        <li><Link to={"/react-templates/edumim/mandatory"}>Mandatory Disclosure</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Administration</a>
                      <ul className="sub-menu">
                        <li><Link to={"/react-templates/edumim/instructor-two"}>Staff Details</Link></li>
                        <li><Link to={"/react-templates/edumim/instructor"}>School Committee</Link></li>
                        <li><Link to={"/react-templates/edumim/enrollment"}>Student Enroll</Link></li>
                        <li><Link to={"/react-templates/edumim/fees"}>Fee and Scholarship</Link></li>
                        <li><Link to={"/react-templates/edumim/training"}>Teachers Training</Link></li>
                        <li><Link to={"/react-templates/edumim/tc"}>TC Sample</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Academics</a>
                      <ul className="sub-menu">
                        <li><Link to={"/react-templates/edumim/school-curriculum"}>School Curriculum</Link></li>
                        <li><Link to={"/react-templates/edumim/courses-sidebar"}>List of Books</Link></li>
                        <li><Link to={"/react-templates/edumim/infrastructure"}>School at Glance</Link></li>
                        <li><Link to={"/react-templates/edumim/calender"}>Holidays List</Link></li>
                        <li><Link to={"/react-templates/edumim/result"}>CBSE Result</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">More</a>
                      <ul className="sub-menu">
                        <li><Link to={"/react-templates/edumim/Co-Curricular"}>Co Curricular Activities</Link></li>
                        <li><Link to={"/react-templates/edumim/school-activities"}>School Activities</Link></li>
                        <li><Link to={"/react-templates/edumim/activities"}>Achievements</Link></li>
                        <li><Link to={"/react-templates/edumim/olympiad"}>Olympiad</Link></li>
                        <li><Link to={"/react-templates/edumim/community"}>Community Services</Link></li>
                        <li><Link to={"/react-templates/edumim/sports"}>Sports</Link></li>
                        <li><Link to={"/react-templates/edumim/cbse"}>CBSE Activities</Link></li>
                        <li>
                      <Link to={"/react-templates/edumim/gallery"}>Gallery</Link>
                    </li>
                    <li>
                      <Link to={"/react-templates/edumim/notice"}>Notice</Link>
                    </li> 
                      </ul>
                    </li>
                    <li>
                      <Link to={"/react-templates/edumim/contacts"}>Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
