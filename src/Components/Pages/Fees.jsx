import { Disclosure } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
export default function FeesScholarships() {
  const feesData = [
    {
      title: "Undergraduate Programs",
      description: "Bachelor's degree program fees and details",
      items: [
        { course: "Bachelor of Science", tuition: "$25,000", duration: "4 years", additionalFees: "$2,000" },
        { course: "Bachelor of Arts", tuition: "$23,000", duration: "4 years", additionalFees: "$1,800" },
        { course: "Bachelor of Engineering", tuition: "$28,000", duration: "4 years", additionalFees: "$2,500" },
      ],
    },
    {
      title: "Graduate Programs",
      description: "Master's degree program fees and details",
      items: [
        { course: "Master of Science", tuition: "$35,000", duration: "2 years", additionalFees: "$3,000" },
        { course: "Master of Arts", tuition: "$32,000", duration: "2 years", additionalFees: "$2,800" },
        { course: "MBA", tuition: "$45,000", duration: "2 years", additionalFees: "$4,000" },
      ],
    },
    {
      title: "Scholarships",
      description: "Available scholarship opportunities",
      items: [
        {
          name: "Academic Excellence",
          amount: "Up to $10,000",
          eligibility: "GPA 3.8 or higher",
          deadline: "March 1, 2024",
        },
        {
          name: "Need-Based Grant",
          amount: "Up to $15,000",
          eligibility: "Based on financial need",
          deadline: "April 15, 2024",
        },
        {
          name: "Sports Scholarship",
          amount: "Up to $8,000",
          eligibility: "Outstanding athletic achievement",
          deadline: "May 1, 2024",
        },
      ],
    },
  ]

  return (
    <>
    <Header />
      <PageBanner title={"Fees & Scholarships"} />
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8"></h2>
      <div className="space-y-4">
        {feesData.map((section, index) => (
          <Disclosure as="div" key={index} className="border solid">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50">
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
                          {section.title === "Scholarships" ? (
                            <>
                              <th className="py-3 text-left">Scholarship Name</th>
                              <th className="py-3 text-left">Amount</th>
                              <th className="py-3 text-left">Eligibility</th>
                              <th className="py-3 text-left">Deadline</th>
                            </>
                          ) : (
                            <>
                              <th className="py-3 text-left">Course</th>
                              <th className="py-3 text-left">Tuition</th>
                              <th className="py-3 text-left">Duration</th>
                              <th className="py-3 text-left">Additional Fees</th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {section.items.map((item, itemIndex) => (
                          <tr key={itemIndex} className="border-b last:border-0">
                            {section.title === "Scholarships" ? (
                              <>
                                <td className="py-3">{item.name}</td>
                                <td className="py-3">{item.amount}</td>
                                <td className="py-3">{item.eligibility}</td>
                                <td className="py-3">{item.deadline}</td>
                              </>
                            ) : (
                              <>
                                <td className="py-3">{item.course}</td>
                                <td className="py-3">{item.tuition}</td>
                                <td className="py-3">{item.duration}</td>
                                <td className="py-3">{item.additionalFees}</td>
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
        <h4 className="font-semibold mb-2">Important Notes:</h4>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
          <li>All fees are subject to change without prior notice</li>
          <li>Additional fees include laboratory, library, and student services charges</li>
          <li>Scholarship applications must be submitted with all required documents before the deadline</li>
          <li>International students may have different fee structures</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  )
}

