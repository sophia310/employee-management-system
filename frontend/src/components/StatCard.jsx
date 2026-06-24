import { FaUsers } from "react-icons/fa";

function StatCard({
  title,
  value,
  bgColor,
}) {
  return (
    <div
      className={`${bgColor} rounded-3xl p-6 border border-white shadow-sm hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex justify-between items-center">

        <div>
          <p className="text-gray-500 font-medium">
            {title}
          </p>

          <h2 className="text-5xl font-bold mt-4">
            {value}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow">
          <FaUsers className="text-3xl text-indigo-600" />
        </div>

      </div>
    </div>
  );
}

export default StatCard;