import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PageBanner from "../PageBanner";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Header />
      <PageBanner title="School Admission" />
      <div className="container">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Admission Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block font-semibold">Grade Applying For</label>
            <select name="grade" value={formData.grade} onChange={handleChange} required className="w-full border p-2 rounded">
              <option value="">Select Grade</option>
              <option value="Kindergarten">Kindergarten</option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">Additional Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border p-2 rounded"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit Application</button>
        </form>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionForm;
