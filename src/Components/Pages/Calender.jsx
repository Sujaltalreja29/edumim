import Header from "../Header";
import Footer from "../Footer";
import PageBanner from "../PageBanner";
export default function HolidayList() {
    return (
        <>
        <Header />
        <PageBanner title="Academic Year 2024-25" pageTitle="Hoilday List" />
      <div className="max-w-4xl mx-auto p-4 py-8">
  
        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 p-4 bg-gray-50 rounded-lg" style={{ backgroundColor: "#f9fafb" }}>
          <div className="flex items-center gap-3" style={{gap : "5px"}}>
            <div className="w-4 h-4 rounded-full bg-yellow-300" style={{backgroundColor:"yellow"}}></div>
            <span>No School</span>
          </div>
          <div className="flex items-center gap-3" style={{gap : "5px"}}>
            <div className="w-4 h-4 rounded-full bg-blue-400" style={{backgroundColor:"deepskyblue"}}></div>
            <span>Public Holiday</span>
          </div>
          <div className="flex items-center gap-2" style={{gap : "5px"}}>
            <div className="w-4 h-4 rounded-full bg-green-400" style={{backgroundColor:"lightgreen"}}></div>
            <span>Non-Student Day</span>
          </div>
          <div className="flex items-center gap-2" style={{gap : "5px"}}>
            <div className="w-4 h-4 rounded-full bg-pink-400" style={{backgroundColor:"hotpink"}}></div>
            <span>Half-Day</span>
          </div>
          {/* <div className="flex items-center gap-2" style={{gap : "5px"}}>
            <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
            <span>Special Days</span>
          </div> */}
        </div>
  
        {/* Holiday Lists */}
        <div className="space-y-8">
          {/* Public Holidays */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-400 text-white p-4" style={{backgroundColor:"deepskyblue"}}>
              <h3 className="text-xl font-semibold" style={{color : "white"}}>Public Holidays</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">July - September 2024</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Independence Day</span>
                      <span className="text-gray-600">Aug 15</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Ganesh Chaturthi</span>
                      <span className="text-gray-600">Sep 07</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Anant Chaturdashi</span>
                      <span className="text-gray-600">Sep 17</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">October - December 2024</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Gandhi Jayanti</span>
                      <span className="text-gray-600">Oct 02</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dussehra</span>
                      <span className="text-gray-600">Oct 24</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Diwali</span>
                      <span className="text-gray-600">Nov 12-13</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Christmas</span>
                      <span className="text-gray-600">Dec 25</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">January - March 2025</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Republic Day</span>
                      <span className="text-gray-600">Jan 26</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Maha Shivratri</span>
                      <span className="text-gray-600">Mar 08</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Holi</span>
                      <span className="text-gray-600">Mar 25</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">April - June 2025</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Good Friday</span>
                      <span className="text-gray-600">Mar 29</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dr. Ambedkar Jayanti</span>
                      <span className="text-gray-600">Apr 14</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Maharashtra Day</span>
                      <span className="text-gray-600">May 01</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          {/* Vacation Breaks */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-yellow-300 p-4" style={{backgroundColor:"yellow"}}>
              <h3 className="text-xl font-semibold">Vacation Breaks</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Diwali Break</span>
                  <span className="text-gray-600">Oct 26 - Nov 03</span>
                </li>
                <li className="flex justify-between">
                  <span>Winter Break</span>
                  <span className="text-gray-600">Dec 20 - Jan 06</span>
                </li>
                <li className="flex justify-between">
                  <span>Spring Break</span>
                  <span className="text-gray-600">Mar 17 - Mar 21</span>
                </li>
                <li className="flex justify-between">
                  <span>Summer Break</span>
                  <span className="text-gray-600">May 31 - July 05</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Half Days */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-pink-400 text-white p-4" style={{backgroundColor:"hotpink"}}>
              <h3 className="text-xl font-semibold">Half Days</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Parent-Teacher Meeting</span>
                  <span className="text-gray-600">Sep 30</span>
                </li>
                <li className="flex justify-between">
                  <span>Sports Day</span>
                  <span className="text-gray-600">Dec 15</span>
                </li>
                <li className="flex justify-between">
                  <span>Annual Day</span>
                  <span className="text-gray-600">Feb 28</span>
                </li>
                <li className="flex justify-between">
                  <span>Last Working Day</span>
                  <span className="text-gray-600">May 30</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Non-Student Days */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-green-400 text-white p-4" style={{backgroundColor:"lightgreen"}}>
              <h3 className="text-xl font-semibold">Non-Student Days</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Teachers' Professional Development</span>
                  <span className="text-gray-600">Aug 05</span>
                </li>
                <li className="flex justify-between">
                  <span>Staff Training Day</span>
                  <span className="text-gray-600">Nov 24</span>
                </li>
                <li className="flex justify-between">
                  <span>Academic Planning Day</span>
                  <span className="text-gray-600">Jan 15</span>
                </li>
                <li className="flex justify-between">
                  <span>Assessment Planning Day</span>
                  <span className="text-gray-600">Apr 05</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Important Note */}
          <div className="text-sm text-gray-500 mt-8">
            <p>* All dates are subject to change. Any modifications will be communicated in advance.</p>
            <p>* School may declare additional holidays due to local events or emergency situations.</p>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
  
  