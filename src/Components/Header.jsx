import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const scrollNav = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      <header
        className="site-header home-one-header fixed w-full z-[999] rt-sticky transition-all duration-200"
        ref={scrollNav}
      >
        <div className={`main-header py-5 ${scrollNav.current?.classList.contains('rt-sticky-active') ? 'py-3' : 'py-5'}`}>
          <div className="mx-auto px-4">
            <div className="flex items-center">
              <Link
                to={"/react-templates/edumim"}
                className="brand-logo flex-none lg:mr-6 md:w-auto max-w-[120px]"
              >
                <img src={logo} alt="logo" />
              </Link>
              <div className="flex items-center flex-1 overflow-x-auto">
                <div className="flex-1 main-menu relative mr-4">
                  <ul className="menu-active-classNamees flex items-center space-x-4 lg:space-x-6 whitespace-nowrap">
                    <li className="menu-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">About</a>
                      <ul className="sub-menu">
                        <li><Link to={"/react-templates/edumim/about"}>About Us</Link></li>
                        <li><Link to={"/react-templates/edumim/about-two"}>Affiliation</Link></li>
                        <li><Link to={"/react-templates/edumim/instructor"}>Infrastructure</Link></li>
                        <li><Link to={"/react-templates/edumim/instructor-two"}>Admission</Link></li>
                        <li><Link to={"/react-templates/edumim/instructor-details"}>Principal's Message</Link></li>
                        <li><Link to={"/react-templates/edumim/event"}>Mandatory Disclosure</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Administration</a>
                      <ul className="sub-menu">
                        <li><Link to={"/react-templates/edumim/courses"}>Staff Details</Link></li>
                        <li><Link to={"/react-templates/edumim/courses-sidebar"}>School Committee</Link></li>
                        <li><Link to={"/react-templates/edumim/single-course"}>Student Enroll</Link></li>
                        <li><Link to={"/react-templates/edumim/single-course"}>Fee and Scholarship</Link></li>
                        <li><Link to={"/react-templates/edumim/single-course"}>Teachers Training</Link></li>
                        <li><Link to={"/react-templates/edumim/single-course"}>TC Sample</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Academics</a>
                      <ul className="sub-menu">
                        <li><Link to={"/react-templates/edumim/blog-standard"}>School Curriculum</Link></li>
                        <li><Link to={"/react-templates/edumim/single-blog"}>List of Books</Link></li>
                        <li><Link to={"/react-templates/edumim/single-blog"}>School at Glance</Link></li>
                        <li><Link to={"/react-templates/edumim/single-blog"}>Holidays List</Link></li>
                        <li><Link to={"/react-templates/edumim/single-blog"}>CBSE Result</Link></li>
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
                <div className="block lg:hidden">
                  <button
                    type="button"
                    className="text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-white flex flex-col items-center justify-center menu-click"
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