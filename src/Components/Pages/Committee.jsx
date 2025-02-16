// School Committee Page Component
import { Disclosure } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import Footer from "../Footer"
import Header from "../Header"
import PageBanner from "../PageBanner"

export function SchoolCommittee() {
    const committeeData = [
      {
        title: "Executive Committee",
        description: "School's primary decision-making body",
        items: [
          { name: "Dr. Sarah Johnson", position: "Chairperson", qualification: "Ph.D. Education", experience: "20 years" },
          { name: "Mr. Robert Smith", position: "Vice Chairperson", qualification: "M.Ed.", experience: "15 years" },
          { name: "Mrs. Emily Davis", position: "Secretary", qualification: "MBA", experience: "12 years" }
        ]
      },
      {
        title: "Academic Committee",
        description: "Curriculum and academic planning committee",
        items: [
          { name: "Dr. Michael Brown", position: "Head", qualification: "Ph.D. Mathematics", experience: "18 years" },
          { name: "Ms. Jennifer Wilson", position: "Coordinator", qualification: "M.Sc. Physics", experience: "10 years" },
          { name: "Mr. David Miller", position: "Member", qualification: "M.A. Literature", experience: "14 years" }
        ]
      },
      {
        title: "Parent-Teacher Committee",
        description: "Parent and teacher representatives",
        items: [
          { name: "Mrs. Lisa Anderson", position: "President", qualification: "Parent Representative", experience: "3 years" },
          { name: "Mr. James Taylor", position: "Secretary", qualification: "Senior Teacher", experience: "8 years" },
          { name: "Ms. Rachel Green", position: "Treasurer", qualification: "Parent Representative", experience: "2 years" }
        ]
      }
    ]
  
    return (
      <>
        <Header />
        <PageBanner title="School Committee" />
        <div className="w-full max-w-4xl mx-auto p-4">
          <div className="space-y-4">
            {committeeData.map((section, index) => (
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
                              <th className="py-3 text-left">Name</th>
                              <th className="py-3 text-left">Position</th>
                              <th className="py-3 text-left">Qualification</th>
                              <th className="py-3 text-left">Experience</th>
                            </tr>
                          </thead>
                          <tbody>
                            {section.items.map((item, itemIndex) => (
                              <tr key={itemIndex} className="border-b last:border-0">
                                <td className="py-3">{item.name}</td>
                                <td className="py-3">{item.position}</td>
                                <td className="py-3">{item.qualification}</td>
                                <td className="py-3">{item.experience}</td>
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
        </div>
        <Footer />
      </>
    )
  }
  