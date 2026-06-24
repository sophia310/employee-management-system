import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function EmployeeTable({
  employees,
  onDelete,
  onEdit,
}) {
  const getDepartmentColor = (
    department
  ) => {
    switch (
      department?.toLowerCase()
    ) {
      case "it":
        return "bg-blue-100 text-blue-700";

      case "hr":
        return "bg-purple-100 text-purple-700";

      case "sales":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Employee List
        </h2>

        <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl text-sm font-medium">
          {employees.length} Employees
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="pb-4">Name</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Mobile</th>
              <th className="pb-4">
                Department
              </th>
              <th className="pb-4">
                Designation
              </th>
              <th className="pb-4">
                Joining Date
              </th>
              <th className="pb-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.map(
              (employee) => (
                <tr
                  key={employee._id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="py-5 font-medium text-gray-800">
                    {
                      employee.fullName
                    }
                  </td>

                  <td className="py-5 text-gray-600">
                    {employee.email}
                  </td>

                  <td className="py-5">
                    {
                      employee.mobile
                    }
                  </td>

                  <td className="py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getDepartmentColor(
                        employee.department
                      )}`}
                    >
                      {
                        employee.department
                      }
                    </span>
                  </td>

                  <td className="py-5">
                    {
                      employee.designation
                    }
                  </td>

                  <td className="py-5">
                    {new Date(
                      employee.joiningDate
                    ).toLocaleDateString()}
                  </td>

                  <td className="py-5">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          onEdit(
                            employee
                          )
                        }
                        className="bg-yellow-100 text-yellow-700 p-3 rounded-lg hover:bg-yellow-200"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() =>
                          onDelete(
                            employee._id
                          )
                        }
                        className="bg-red-100 text-red-700 p-3 rounded-lg hover:bg-red-200"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        {employees.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No employees found
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeTable;