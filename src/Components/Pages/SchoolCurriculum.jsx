import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
const subjects = [
    { name: "English", description: "NCERT textbooks with focus on communication skills" },
    { name: "Hindi", description: "Comprehensive study of Hindi literature and grammar" },
    { name: "Mathematics", description: "NCERT curriculum with emphasis on problem-solving" },
    { name: "Science", description: "Integrated approach to Physics, Chemistry, and Biology" },
    { name: "Social Science", description: "History, Geography, Political Science, and Economics" },
    { name: "Computer Science", description: "Programming fundamentals and digital literacy" },
    { name: "Physical Education", description: "Sports, yoga, and health education" },
    { name: "Art Education", description: "Visual and performing arts" },
  ]
  
  const SchoolCurriculum = () => {
    return (
        <>
              <Header />
              <PageBanner title={"Our School Curriculum"} />
      <div className="max-w-4xl mx-auto p-4">
        <p className="mb-6 text-gray-700">
          Our curriculum is designed in accordance with the CBSE guidelines, focusing on holistic development and
          preparing students for future challenges.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
              <p className="text-gray-600">{subject.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-blue-50 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Co-Curricular Activities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Debate and Public Speaking</li>
            <li>Science and Math Olympiads</li>
            <li>Environmental Club</li>
            <li>Music and Dance</li>
            <li>Sports (Cricket, Football, Basketball, Athletics)</li>
          </ul>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
  
  export default SchoolCurriculum
  
  