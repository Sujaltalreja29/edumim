import React, { useState } from 'react';
import Footer from "../Footer";
import Header from "../Header";
import img from '../../assets/images/all-img/bred.png';

const Affiliation = () => {
  // Sample affiliation data - this could be passed as a prop in a real application
  const initialData = [
    {
      id: 1,
      name: 'Greenwood International School',
      board: 'CBSE',
      affiliationNumber: '123456',
      location: 'New Delhi, India',
      established: '2005',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Springfield Public School',
      board: 'ICSE',
      affiliationNumber: '654321',
      location: 'Mumbai, India',
      established: '2010',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Harmony Academy',
      board: 'State Board',
      affiliationNumber: '789123',
      location: 'Bangalore, India',
      established: '2012',
      status: 'Inactive'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [data] = useState(initialData);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="breadcrumbs section-padding bg-[url('../images/all-img/bred.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="max-w-6xl mx-auto px-4 " style={{ marginBottom: '125px' }}>
        <div className="mb-6" style={{ marginTop: '125px' }}>
          <h2 className="text-xl font-semibold mb-4">School Affiliation Details</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50 text-black">
                <th className="border p-3 text-left">School Name</th>
                <th className="border p-3 text-left">Board</th>
                <th className="border p-3 text-left">Affiliation Number</th>
                <th className="border p-3 text-left">Location</th>
                <th className="border p-3 text-left">Established</th>
                <th className="border p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 text-black">
                  <td className="border p-3">{item.name}</td>
                  <td className="border p-3">{item.board}</td>
                  <td className="border p-3">{item.affiliationNumber}</td>
                  <td className="border p-3">{item.location}</td>
                  <td className="border p-3">{item.established}</td>
                  <td className="border p-3 font-medium">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Affiliation;
