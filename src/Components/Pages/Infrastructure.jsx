import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import Infrastructure from "./schoolinfra";

const SchoolInfrastructure = () => {
  const infrastructureData = [
    {
      title: "Main Campus Facilities",
      description: "Core infrastructure and campus overview",
      details: [
        {
          facility: "Total Campus Area",
          area: "50 acres",
          capacity: "2500 students",
          features: "Eco-friendly campus, Solar powered, Rain water harvesting"
        },
        {
          facility: "Main Building",
          area: "100,000 sq ft",
          capacity: "3 floors",
          features: "Elevator, Ramps, Fire safety system"
        },
        {
          facility: "Parking Area",
          area: "20,000 sq ft",
          capacity: "200 vehicles",
          features: "Covered parking, Security cameras"
        },
        {
          facility: "Green Areas",
          area: "150,000 sq ft",
          capacity: "Multiple gardens",
          features: "Botanical garden, Meditation zones, Outdoor classrooms"
        }
      ]
    },
    {
      title: "Academic Infrastructure",
      description: "Facilities dedicated to learning and education",
      details: [
        {
          facility: "Primary Wing",
          area: "30,000 sq ft",
          capacity: "750 students",
          features: "Activity rooms, Play area, Smart classes"
        },
        {
          facility: "Secondary Wing",
          area: "40,000 sq ft",
          capacity: "1000 students",
          features: "Smart boards, AC classrooms, Modern furniture"
        },
        {
          facility: "Science Block",
          area: "25,000 sq ft",
          capacity: "6 laboratories",
          features: "Physics, Chemistry, Biology, Robotics labs"
        },
        {
          facility: "Computer Center",
          area: "15,000 sq ft",
          capacity: "200 workstations",
          features: "High-speed internet, Latest software, 3D printing lab"
        }
      ]
    },
    {
      title: "Sports & Recreation",
      description: "Sports facilities and recreational areas",
      details: [
        {
          facility: "Sports Complex",
          area: "80,000 sq ft",
          capacity: "Multiple sports",
          features: "Indoor stadium, Gymnasium, Fitness center"
        },
        {
          facility: "Swimming Pool",
          area: "12,000 sq ft",
          capacity: "Olympic size",
          features: "Heated pool, Training area, Changing rooms"
        },
        {
          facility: "Athletic Track",
          area: "40,000 sq ft",
          capacity: "400m track",
          features: "Synthetic track, Long jump pit, Shot put area"
        },
        {
          facility: "Play Fields",
          area: "100,000 sq ft",
          capacity: "Multiple fields",
          features: "Football, Cricket, Hockey grounds"
        }
      ]
    },
    {
      title: "Additional Amenities",
      description: "Supporting facilities and amenities",
      details: [
        {
          facility: "Multipurpose Hall",
          area: "20,000 sq ft",
          capacity: "1500 seats",
          features: "Stage, Green rooms, Professional sound system"
        },
        {
          facility: "Dining Complex",
          area: "15,000 sq ft",
          capacity: "500 students",
          features: "Modern kitchen, Multiple dining halls, Cafeteria"
        },
        {
          facility: "Health Center",
          area: "5,000 sq ft",
          capacity: "15 beds",
          features: "24x7 medical staff, Isolation ward, Ambulance service"
        },
        {
          facility: "Administration Block",
          area: "10,000 sq ft",
          capacity: "All admin offices",
          features: "Conference rooms, Staff rooms, Visitor area"
        }
      ]
    }
  ];

  return (
    <>
      <Header />
      <PageBanner title="School Infrastructure" />
      
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          World-Class Infrastructure
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Campus Overview</h2>
          <p className="text-gray-700">
            Welcome to our state-of-the-art campus spread across 50 acres of lush
            green environment. Our infrastructure is thoughtfully designed to
            provide an optimal learning environment while maintaining a perfect
            balance between academic and recreational facilities. With a total
            built-up area of over 500,000 square feet, our campus features modern
            architecture that seamlessly blends with nature, creating an inspiring
            atmosphere for students to learn and grow.
          </p>
        </section>
        <Infrastructure/>
        <div className="space-y-4">
          {infrastructureData.map((section, index) => (
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
                            <th className="py-3 text-left">Facility</th>
                            <th className="py-3 text-left">Area</th>
                            <th className="py-3 text-left">Capacity</th>
                            <th className="py-3 text-left">Features</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.details.map((item, itemIndex) => (
                            <tr key={itemIndex} className="border-b last:border-0">
                              <td className="py-3">{item.facility}</td>
                              <td className="py-3">{item.area}</td>
                              <td className="py-3">{item.capacity}</td>
                              <td className="py-3">{item.features}</td>
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
  );
};

export default SchoolInfrastructure;