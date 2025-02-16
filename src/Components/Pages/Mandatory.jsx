import { Disclosure } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import Footer from "../Footer"
import Header from "../Header"
import PageBanner from "../PageBanner"

const MandatoryDisclosure = () => {
  const disclosureData = [
    {
      title: "Basic Information",
      description: "General school details and contact information",
      items: [
        { field: "School Name", value: "ABC International School" },
        { field: "Address", value: "123 Education Street, City" },
        { field: "Principal", value: "Dr. Sarah Johnson" },
        { field: "Established", value: "1995" },
        { field: "Email", value: "contact@abcschool.edu" },
        { field: "Phone", value: "+91-123-456-7890" }
      ]
    },
    {
      title: "Recognition & Affiliation",
      description: "School recognition and board affiliation details",
      items: [
        { field: "Affiliation Body", value: "CBSE" },
        { field: "Affiliation Number", value: "1234567890" },
        { field: "Affiliation Period", value: "2020-2025" },
        { field: "Recognition Status", value: "Permanent" },
        { field: "Board Medium", value: "English" },
        { field: "School Type", value: "Co-Educational" }
      ]
    },
    {
      title: "Infrastructure Details",
      description: "Campus facilities and infrastructure information",
      items: [
        { field: "Total Area", value: "5 Acres" },
        { field: "Built Up Area", value: "35,000 sq ft" },
        { field: "Playground Area", value: "2 Acres" },
        { field: "Classrooms", value: "50 Smart Classrooms" },
        { field: "Laboratories", value: "8 Fully Equipped Labs" },
        { field: "Library", value: "15,000 Books Collection" }
      ]
    },
    {
      title: "Staff Information",
      description: "Teaching and non-teaching staff details",
      items: [
        { field: "Teaching Staff", value: "75 Qualified Teachers" },
        { field: "PGT Teachers", value: "15" },
        { field: "TGT Teachers", value: "30" },
        { field: "PRT Teachers", value: "25" },
        { field: "Administrative Staff", value: "20" },
        { field: "Support Staff", value: "25" }
      ]
    }
  ]

  return (
    <>
      <Header />
      <PageBanner title="Mandatory Disclosure" />
      <div className="w-full max-w-4xl mx-auto p-4">
        <p className="mb-6 text-gray-700 text-center">
          Academic Year 2023-24
        </p>
        <div className="space-y-4">
          {disclosureData.map((section, index) => (
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
                            <th className="py-3 text-left w-1/3">Field</th>
                            <th className="py-3 text-left w-2/3">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.items.map((item, itemIndex) => (
                            <tr key={itemIndex} className="border-b last:border-0">
                              <td className="py-3 font-medium">{item.field}</td>
                              <td className="py-3">{item.value}</td>
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
            <li>This information is updated as of the current academic year</li>
            <li>All details are subject to periodic updates</li>
            <li>For more specific information, please contact the school administration</li>
            <li>School inspection reports are available upon request</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MandatoryDisclosure