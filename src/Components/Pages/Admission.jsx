import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PageBanner from "../PageBanner";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    gradeApplying: "",
    currentSchool: "",
    currentGrade: "",
    academicYear: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    parentOccupation: "",
    relationship: "",
    hasSpecialNeeds: "",
    specialNeedsDetails: "",
    extracurricular: "",
    siblingAtSchool: "",
    siblingDetails: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Header />
      <PageBanner title="School Admission" />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Student Information */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Student Information</h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name*"
                      className="from-control w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name*"
                      className="from-control w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="from-control w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="from-control w-full"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      className="from-control w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone*"
                      className="from-control w-full"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Academic Information */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Academic Information</h3>
                <div className="space-y-4">
                  <div>
                    <select
                      name="gradeApplying"
                      value={formData.gradeApplying}
                      onChange={handleChange}
                      className="from-control w-full"
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="Kindergarten">Kindergarten</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                    </select>
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="currentSchool"
                      value={formData.currentSchool}
                      onChange={handleChange}
                      placeholder="Current School"
                      className="from-control w-full"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="currentGrade"
                      value={formData.currentGrade}
                      onChange={handleChange}
                      placeholder="Current Grade"
                      className="from-control w-full"
                    />
                  </div>
                  
                  <div>
                    <select
                      name="academicYear"
                      value={formData.academicYear}
                      onChange={handleChange}
                      className="from-control w-full"
                      required
                    >
                      <option value="">Select Academic Year</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2025-2026">2025-2026</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Column 3: Parent/Guardian Information */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Parent/Guardian Information</h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Parent/Guardian Name*"
                      className="from-control w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      placeholder="Parent/Guardian Email*"
                      className="from-control w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="Parent/Guardian Phone*"
                      className="from-control w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="parentOccupation"
                      value={formData.parentOccupation}
                      onChange={handleChange}
                      placeholder="Occupation"
                      className="from-control w-full"
                    />
                  </div>
                  
                  <div>
                    <select
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      className="from-control w-full"
                      required
                    >
                      <option value="">Select Relationship</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6">Additional Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <select
                    name="hasSpecialNeeds"
                    value={formData.hasSpecialNeeds}
                    onChange={handleChange}
                    className="from-control w-full"
                  >
                    <option value="">Does the student have any special needs?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="specialNeedsDetails"
                    value={formData.specialNeedsDetails}
                    onChange={handleChange}
                    placeholder="If yes, please provide details"
                    className="from-control w-full"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div className="mb-6">
                <textarea
                  name="extracurricular"
                  value={formData.extracurricular}
                  onChange={handleChange}
                  placeholder="Extracurricular activities/interests"
                  className="from-control w-full"
                  rows="2"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <select
                    name="siblingAtSchool"
                    value={formData.siblingAtSchool}
                    onChange={handleChange}
                    className="from-control w-full"
                  >
                    <option value="">Does the student have any siblings at our school?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="siblingDetails"
                    value={formData.siblingDetails}
                    onChange={handleChange}
                    placeholder="If yes, please provide details"
                    className="from-control w-full"
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Comments"
                  className="from-control w-full"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="text-center mt-8">
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionForm; 