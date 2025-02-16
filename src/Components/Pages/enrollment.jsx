// School Enroll Page Component
import { Disclosure } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import Footer from "../Footer"
import Header from "../Header"
import PageBanner from "../PageBanner"

export function SchoolEnroll() {
    const enrollmentData = [
      {
        title: "Primary School Enrollment",
        description: "Grades 1-5 enrollment details",
        items: [
          { grade: "Grade 1", availableSeats: "40", fees: "$5,000", requirements: "Age 6-7 years" },
          { grade: "Grade 2", availableSeats: "35", fees: "$5,200", requirements: "Age 7-8 years" },
          { grade: "Grade 3", availableSeats: "38", fees: "$5,400", requirements: "Age 8-9 years" }
        ]
      },
      {
        title: "Middle School Enrollment",
        description: "Grades 6-8 enrollment details",
        items: [
          { grade: "Grade 6", availableSeats: "45", fees: "$6,000", requirements: "Primary school completion" },
          { grade: "Grade 7", availableSeats: "42", fees: "$6,200", requirements: "Grade 6 completion" },
          { grade: "Grade 8", availableSeats: "40", fees: "$6,400", requirements: "Grade 7 completion" }
        ]
      },
      {
        title: "High School Enrollment",
        description: "Grades 9-12 enrollment details",
        items: [
          { grade: "Grade 9", availableSeats: "50", fees: "$7,000", requirements: "Middle school completion" },
          { grade: "Grade 10", availableSeats: "48", fees: "$7,200", requirements: "Grade 9 completion" },
          { grade: "Grade 11", availableSeats: "45", fees: "$7,500", requirements: "Grade 10 completion" }
        ]
      }
    ]
  
    return (
      <>
        <Header />
        <PageBanner title="School Enrollment" />
        <div className="w-full max-w-4xl mx-auto p-4">
          <div className="space-y-4">
            {enrollmentData.map((section, index) => (
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
                              <th className="py-3 text-left">Grade</th>
                              <th className="py-3 text-left">Available Seats</th>
                              <th className="py-3 text-left">Fees</th>
                              <th className="py-3 text-left">Requirements</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.items.map((item, itemIndex) => (
                              <tr key={itemIndex} className="border-b last:border-0">
                                <td className="py-3">{item.grade}</td>
                                <td className="py-3">{item.availableSeats}</td>
                                <td className="py-3">{item.fees}</td>
                                <td className="py-3">{item.requirements}</td>
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
            <h4 className="font-semibold mb-2">Enrollment Notes:</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>All fees are for the academic year 2024-2025</li>
              <li>Required documents: Birth certificate, previous school records, medical records</li>
              <li>Admission tests may be required for certain grades</li>
              <li>Scholarships available for meritorious students</li>
            </ul>
          </div>
        </div>
        <Footer />
      </>
    )
  }