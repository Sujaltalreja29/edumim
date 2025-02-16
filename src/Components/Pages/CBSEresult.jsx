import { Disclosure } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import Footer from "../Footer"
import Header from "../Header"
import PageBanner from "../PageBanner"

const CBSEResults = () => {
  const resultsData = [
    {
      title: "Recent Board Results (2020-2024)",
      description: "Past 5 years board examination results",
      items: [
        { year: "2024", class10: "98.5%", class12: "97.8%", topperName: "Priya Sharma", topperMarks: "98.6%" },
        { year: "2023", class10: "97.8%", class12: "96.5%", topperName: "Rahul Verma", topperMarks: "98.2%" },
        { year: "2022", class10: "96.9%", class12: "95.7%", topperName: "Ananya Patel", topperMarks: "97.8%" },
        { year: "2021", class10: "97.2%", class12: "96.1%", topperName: "Arjun Singh", topperMarks: "97.4%" },
        { year: "2020", class10: "96.5%", class12: "95.3%", topperName: "Neha Gupta", topperMarks: "97.0%" }
      ]
    },
    {
      title: "Class-wise Performance",
      description: "Detailed breakdown by class and subjects",
      items: [
        { class: "Class 10", totalStudents: "120", distinctionHolders: "85", averageScore: "92.5%", subjects: "All Core" },
        { class: "Class 12 Science", totalStudents: "60", distinctionHolders: "45", averageScore: "91.8%", subjects: "PCM/PCB" },
        { class: "Class 12 Commerce", totalStudents: "45", distinctionHolders: "35", averageScore: "90.5%", subjects: "Commerce" }
      ]
    },
    {
      title: "Subject Toppers 2024",
      description: "Highest scoring students in different subjects",
      items: [
        { subject: "Mathematics", studentName: "Ravi Kumar", score: "99%", class: "Class 12" },
        { subject: "Physics", studentName: "Meera Patel", score: "98%", class: "Class 12" },
        { subject: "English", studentName: "Aditya Shah", score: "97%", class: "Class 10" }
      ]
    }
  ]

  return (
    <>
      <Header />
      <PageBanner title="CBSE Board Exam Results" />
      <div className="w-full max-w-4xl mx-auto p-4">
        <p className="mb-6 text-gray-700 text-center">
          We take pride in our students' consistent academic excellence in CBSE Board Examinations.
        </p>
        <div className="space-y-4">
          {resultsData.map((section, index) => (
            <Disclosure as="div" key={index} className="border rounded-lg">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                      <p className="text-sm text-gray-500">{section.description}</p>
                    </div>
                    <ChevronDown className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-gray-500`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-4 bg-gray-50">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            {section.title === "Recent Board Results (2020-2024)" && (
                              <>
                                <th className="py-3 text-left">Year</th>
                                <th className="py-3 text-left">Class 10 Pass %</th>
                                <th className="py-3 text-left">Class 12 Pass %</th>
                                <th className="py-3 text-left">School Topper</th>
                                <th className="py-3 text-left">Topper's Score</th>
                              </>
                            )}
                            {section.title === "Class-wise Performance" && (
                              <>
                                <th className="py-3 text-left">Class</th>
                                <th className="py-3 text-left">Total Students</th>
                                <th className="py-3 text-left">Distinction Holders</th>
                                <th className="py-3 text-left">Average Score</th>
                                <th className="py-3 text-left">Subjects</th>
                              </>
                            )}
                            {section.title === "Subject Toppers 2024" && (
                              <>
                                <th className="py-3 text-left">Subject</th>
                                <th className="py-3 text-left">Student Name</th>
                                <th className="py-3 text-left">Score</th>
                                <th className="py-3 text-left">Class</th>
                              </>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {section.items.map((item, itemIndex) => (
                            <tr key={itemIndex} className="border-b last:border-0">
                              {section.title === "Recent Board Results (2020-2024)" && (
                                <>
                                  <td className="py-3">{item.year}</td>
                                  <td className="py-3">{item.class10}</td>
                                  <td className="py-3">{item.class12}</td>
                                  <td className="py-3">{item.topperName}</td>
                                  <td className="py-3">{item.topperMarks}</td>
                                </>
                              )}
                              {section.title === "Class-wise Performance" && (
                                <>
                                  <td className="py-3">{item.class}</td>
                                  <td className="py-3">{item.totalStudents}</td>
                                  <td className="py-3">{item.distinctionHolders}</td>
                                  <td className="py-3">{item.averageScore}</td>
                                  <td className="py-3">{item.subjects}</td>
                                </>
                              )}
                              {section.title === "Subject Toppers 2024" && (
                                <>
                                  <td className="py-3">{item.subject}</td>
                                  <td className="py-3">{item.studentName}</td>
                                  <td className="py-3">{item.score}</td>
                                  <td className="py-3">{item.class}</td>
                                </>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Our Achievements:</h4>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li>Consistently above 95% pass percentage in both Class 10 and 12</li>
            <li>Over 50% of our students score above 90% in board exams</li>
            <li>100% of our students qualify for higher education</li>
            <li>Multiple students selected for prestigious institutions like IITs and AIIMS</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CBSEResults