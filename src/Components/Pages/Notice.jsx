import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const notices = [
    {
      date: "31 Jan",
      title: "Seating Arrangement for 1st Mid Sem Exam of 2nd Sem B.Tech. AY2024-25",
      isNew: true,
    },
    {
      date: "31 Jan",
      title: "1st Mid Sem Exam Schedule 2nd Sem. B.Tech. AY24-25",
      isNew: true,
    },
    {
      date: "31 Jan",
      title:
        "Attention: BTech 6th sem & 8th sem students; Internship course registration and Submission of Report & Industry Certificate",
      isNew: true,
    },
    {
      date: "25 Jan",
      title: "Notice for Change in Seating Arrangement (Tutorial) for 1st Sem. B.Tech. Students AY24-25",
    },
    {
      date: "23 Jan",
      title: "Seating Arrangement for 1st Mid Sem. Exam Even Semesters, AY2024-25",
    },
    {
      date: "21 Jan",
      title:
        "Registration Check for B. Tech. Sem. – 2, 4, 6 & 8, M. Tech. Sem. 4 and PDDC Sem. – 2, 4, 6 & 8 in Even Sem. AY 2024-25",
    },
    {
      date: "20 Jan",
      title: "1st Mid Sem Exam Schedules Even Semesters of B.Tech. PDDC AY24-25",
    },
    {
      date: "16 Jan",
      title: "Registration Notice (EVEN semester AY 2024-25) for M. Tech. Sem. 2",
    },
    {
      date: "8 Jan",
      title: "Revised Allotment of B.Tech Sem 6 Open elective courses and NPTEL against OE AY 2024-25",
    },
    {
      date: "1 Jan",
      title: "Registration Notice (EVEN semester AY 2024-25) for B. Tech. Sem. - 2 students",
    },
  ]
  
  const NoticePage = () => {
    return (
    <>
    <Header />
    <PageBanner title={"Notice page"} pageTitle={"Explore the vibrant moments from our school activities."} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0a2558] text-black">
                    <th className="py-4 px-6 text-left w-32">Date</th>
                    <th className="py-4 px-6 text-left">Title</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="py-4 px-6 text-[#0a2558] font-medium">
                        <div className="flex items-center gap-2">
                          {notice.date}
                          {notice.isNew && (
                            <span className="bg-gray text-primary text-xs px-2 py-0.5 rounded-full">New</span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <a href="#" className="text-gray-700 hover:text-[#0a2558] transition-colors">
                          {notice.title}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          @media (max-width: 640px) {
            table {
              font-size: 0.875rem;
            }
            td, th {
              padding: 0.75rem 0.5rem;
            }
          }
        `}</style>
      </div>
      <Footer/>
      </>
    )
  }
  
  export default NoticePage
  
  