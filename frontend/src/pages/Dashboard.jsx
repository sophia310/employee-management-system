import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";
import {
  getEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
  searchEmployee,
} from "../services/employeeService";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";

function Dashboard() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] =
    useState(null);
  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] =
    useState(1);

  const employeesPerPage = 5;

  // Stats
  const totalEmployees = employees.length;

  const itEmployees = employees.filter(
    (emp) => emp.department === "IT"
  ).length;

  const hrEmployees = employees.filter(
    (emp) => emp.department === "HR"
  ).length;

  const developers = employees.filter(
    (emp) =>
      emp.designation?.toLowerCase() ===
      "developer"
  ).length;

  // Pagination Logic
  const lastIndex =
    currentPage * employeesPerPage;

  const firstIndex =
    lastIndex - employeesPerPage;

  const currentEmployees =
    employees.slice(
      firstIndex,
      lastIndex
    );

  const totalPages = Math.ceil(
    employees.length / employeesPerPage
  );

  const fetchEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    fetchEmployees();
  }, []);

  const handleSearch = async (value) => {
    setSearch(value);

    try {
      if (value === "") {
        setCurrentPage(1);
        fetchEmployees();
        return;
      }

      const res = await searchEmployee(
        value
      );

      setEmployees(res.data);
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddEmployee = async (
    employeeData
  ) => {
    try {
      await addEmployee(employeeData);

      setCurrentPage(1);

      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateEmployee = async (
    employeeData
  ) => {
    try {
      await updateEmployee(
        selectedEmployee._id,
        employeeData
      );

      setSelectedEmployee(null);

      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteEmployee = async (
    id
  ) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this employee?"
      );

    if (!confirmDelete) return;

    try {
      await deleteEmployee(id);

      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <Header
          onLogout={handleLogout}
        />

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-5 mt-6">

          <StatCard
            title="Total Employees"
            value={totalEmployees}
            bgColor="bg-blue-50"
          />

          <StatCard
            title="IT Employees"
            value={itEmployees}
            bgColor="bg-green-50"
          />

          <StatCard
            title="HR Employees"
            value={hrEmployees}
            bgColor="bg-purple-50"
          />

          <StatCard
            title="Developers"
            value={developers}
            bgColor="bg-orange-50"
          />

        </div>

        {/* Search */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 shadow-sm mt-6">

          <input
            type="text"
            placeholder="🔍 Search employees..."
            value={search}
            onChange={(e) =>
              handleSearch(e.target.value)
            }
            className="w-full bg-slate-50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

          <EmployeeForm
            onAdd={handleAddEmployee}
            onUpdate={
              handleUpdateEmployee
            }
            selectedEmployee={
              selectedEmployee
            }
          />

        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">

          <EmployeeTable
            employees={
              currentEmployees
            }
            onDelete={
              handleDeleteEmployee
            }
            onEdit={
              setSelectedEmployee
            }
          />

        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-6">

            <button
              onClick={() =>
                setCurrentPage(
                  currentPage - 1
                )
              }
              disabled={
                currentPage === 1
              }
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>

            {[...Array(totalPages)].map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentPage(
                      index + 1
                    )
                  }
                  className={`w-10 h-10 rounded-lg font-medium ${
                    currentPage ===
                    index + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-white border border-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}

            <button
              onClick={() =>
                setCurrentPage(
                  currentPage + 1
                )
              }
              disabled={
                currentPage ===
                totalPages
              }
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;