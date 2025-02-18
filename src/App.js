import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomeOne from "./Components/Home/HomeOne";
import HomeThree from "./Components/Home/HomeThree";
import HomeTwo from "./Components/Home/HomeTwo";
import ErrorPage from "./Components/Pages/404Page";
import AboutOne from "./Components/Pages/AboutOne";
import AboutTwo from "./Components/Pages/AboutTwo";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import Curricular from "./Components/Pages/Co-Curricular";
import School from "./Components/Pages/SchoolActivities";
import Activities from "./Components/Pages/Activities";
import Olympiad from "./Components/Pages/Olympiad";
import Community from "./Components/Pages/Comunity";
import Sports from "./Components/Pages/Sports";
import CBSE from "./Components/Pages/CBSE";
import CourseSideBar from "./Components/Pages/CourseSideBar";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import InstructorOne from "./Components/Pages/InstructorOne";
import InstructorTwo from "./Components/Pages/InstructorTwo";
import SingleBlog from "./Components/Pages/SingleBlog";
import SingleCourse from "./Components/Pages/SingleCourse";
import Gallery from "./Components/Pages/Gallery";
import NoticePage from "./Components/Pages/Notice";
import Thanks from "./Components/Pages/Thanks";
import Affiliation from "./Components/Pages/Affiliation";
import FeesScholarships from "./Components/Pages/Fees";
import { SchoolCommittee } from "./Components/Pages/Committee";
import { SchoolEnroll } from "./Components/Pages/enrollment";
import SchoolInfrastructure from "./Components/Pages/Infrastructure";
import AdmissionForm from "./Components/Pages/Admission";
import CalendarPage from "./Components/Pages/Calender";
import SchoolCurriculum from "./Components/Pages/SchoolCurriculum";
import CBSEResults from "./Components/Pages/CBSEresult";
import MandatoryDisclosure from "./Components/Pages/Mandatory";
import CVUploadPage from './Components/Pages/TC'
import Training from './Components/Pages/Training'

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={"/react-templates/edumim"} />}
          />
          <Route path="/react-templates/edumim" element={<HomeThree />} />
          <Route
            path="/react-templates/edumim/home-two"
            element={<HomeThree />}
          />
          <Route
            path="/"
            element={<HomeThree />}
          />
          <Route path="/" element={<HomeThree />} />
          <Route path="/react-templates/edumim/about" element={<AboutOne />} />
          <Route
            path="/react-templates/edumim/about-two"
            element={<AboutTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor"
            element={<InstructorOne />}
          />
          <Route
            path="/react-templates/edumim/instructor-two"
            element={<InstructorTwo />}
          />
          <Route
            path="/react-templates/edumim/instructor-details"
            element={<InstructorDetails />}
          />
          <Route
            path="/react-templates/edumim/infrastructure"
            element={<SchoolInfrastructure />}
          />

          <Route
            path="/react-templates/edumim/affiliation"
            element={<Affiliation />}
          />
          <Route
            path="/react-templates/edumim/admission"
            element={<AdmissionForm />}
          />
          <Route
            path="/react-templates/edumim/calender"
            element={<CalendarPage />}
          />
          <Route
            path="/react-templates/edumim/result"
            element={<CBSEResults />}
          />
          <Route
            path="/react-templates/edumim/school-curriculum"
            element={<SchoolCurriculum />}
          />
          <Route path="/react-templates/edumim/event" element={<Event />} />
          <Route
            path="/react-templates/edumim/event-single"
            element={<EventSingle />}
          />
          <Route path="/react-templates/edumim/error" element={<ErrorPage />} />
          <Route path="/react-templates/edumim/courses" element={<Courses />} />
          <Route path="/react-templates/edumim/Co-Curricular" element={<Curricular/>} />
          <Route path="/react-templates/edumim/school-activities" element={<School />} />
          <Route path="/react-templates/edumim/activities" element={<Activities />} />
          <Route path="/react-templates/edumim/olympiad" element={<Olympiad />} />
          <Route path="/react-templates/edumim/community" element={<Community />} />
          <Route path="/react-templates/edumim/sports" element={<Sports />} />
          <Route path="/react-templates/edumim/cbse" element={<CBSE />} />
          <Route path="/react-templates/edumim/fees" element={<FeesScholarships />} />
          <Route path="/react-templates/edumim/committee" element={<SchoolCommittee />} />
          <Route path="/react-templates/edumim/enrollment" element={<SchoolEnroll />} />
          <Route path="/react-templates/edumim/tc" element={<CVUploadPage />} />
          <Route path="/react-templates/edumim/training" element={<Training />} />
          <Route
            path="/react-templates/edumim/courses-sidebar"
            element={<CourseSideBar />}
          />
          <Route
            path="/react-templates/edumim/single-course/:page/:id"
            element={<SingleCourse />}
          />
          <Route
            path="/react-templates/edumim/blog-standard"
            element={<BLogStandard />}
          />
          <Route
            path="/react-templates/edumim/single-blog"
            element={<SingleBlog />}
          />
          <Route
            path="/react-templates/edumim/gallery"
            element={<Gallery/>}
          />
          <Route
            path="/react-templates/edumim/notice"
            element={<NoticePage/>}
          />
          <Route
            path="/react-templates/edumim/mandatory"
            element={<MandatoryDisclosure/>}
          />
          <Route
            path="/react-templates/edumim/contacts"
            element={<ContactUs />}
          />
          <Route path="/react-templates/edumim/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
