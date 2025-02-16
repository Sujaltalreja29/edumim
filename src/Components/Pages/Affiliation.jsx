import { Disclosure } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import Footer from "../Footer"
import Header from "../Header"
import PageBanner from "../PageBanner"

// Affiliation Page Component
export default function Affiliation() {
  const affiliationData = [
    {
      title: "Academic Affiliations",
      description: "Educational boards and institutions we're affiliated with",
      items: [
        { board: "State Education Board", validUntil: "2026", level: "Primary & Secondary", status: "Active" },
        { board: "CBSE Board", validUntil: "2025", level: "All levels", status: "Active" },
        { board: "Cambridge International", validUntil: "2026", level: "Secondary & Higher Secondary", status: "Active" }
      ]
    },
    {
      title: "Sports Affiliations",
      description: "Sports bodies and organizations",
      items: [
        { organization: "State Sports Council", validUntil: "2025", sports: "Athletics, Swimming", status: "Active" },
        { organization: "National Youth Sports", validUntil: "2024", sports: "Basketball, Football", status: "Active" },
        { organization: "District Sports Association", validUntil: "2025", sports: "Cricket, Tennis", status: "Active" }
      ]
    },
    {
      title: "Cultural Affiliations",
      description: "Cultural and arts organizations",
      items: [
        { organization: "State Cultural Board", validUntil: "2025", activities: "Music, Dance", status: "Active" },
        { organization: "Youth Cultural Exchange", validUntil: "2024", activities: "Theater, Fine Arts", status: "Active" },
        { organization: "Heritage Club Network", validUntil: "2025", activities: "Traditional Arts", status: "Active" }
      ]
    }
  ]

  return (
    <>
      <Header />
      <PageBanner title="Affiliations" />
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="space-y-4">
          {affiliationData.map((section, index) => (
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
                            <th className="py-3 text-left">Organization</th>
                            <th className="py-3 text-left">Valid Until</th>
                            <th className="py-3 text-left">Level/Activities</th>
                            <th className="py-3 text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.items.map((item, itemIndex) => (
                            <tr key={itemIndex} className="border-b last:border-0">
                              <td className="py-3">{item.board || item.organization}</td>
                              <td className="py-3">{item.validUntil}</td>
                              <td className="py-3">{item.level || item.sports || item.activities}</td>
                              <td className="py-3">{item.status}</td>
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
