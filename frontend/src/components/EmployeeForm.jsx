import { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";

function EmployeeForm({
  onAdd,
  onUpdate,
  selectedEmployee,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    department: "",
    designation: "",
    joiningDate: "",
  });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData({
        fullName: selectedEmployee.fullName,
        email: selectedEmployee.email,
        mobile: selectedEmployee.mobile,
        department: selectedEmployee.department,
        designation: selectedEmployee.designation,
        joiningDate:
          selectedEmployee.joiningDate?.split("T")[0],
      });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedEmployee) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }

    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      department: "",
      designation: "",
      joiningDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">
          {selectedEmployee
            ? "Update Employee"
            : "Add Employee"}
        </h2>

        <p className="text-gray-500 mt-2">
          Enter employee information below
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Full Name */}
        <div className="relative">
          <FaUser className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Mobile */}
        <div className="relative">
          <FaPhone className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Department */}
        <div className="relative">
          <FaBuilding className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Designation */}
        <div className="relative">
          <FaBriefcase className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Joining Date */}
        <div className="relative">
          <FaCalendarAlt className="absolute left-4 top-4 text-gray-400" />

          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

      </div>

      <button
        type="submit"
        className="mt-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition"
      >
        {selectedEmployee
          ? "Update Employee"
          : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;