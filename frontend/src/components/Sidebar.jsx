import {
  FaHome,
  FaShieldAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-slate-950 text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-800">

        <h1 className="text-3xl font-bold tracking-wide">
          EMS
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Employee Management System
        </p>

      </div>

      {/* Navigation */}
      <nav className="p-4 flex-1">

        <div className="bg-indigo-600 hover:bg-indigo-700 transition-all p-4 rounded-xl flex items-center gap-3 font-medium">

          <FaHome />

          <span>
            Dashboard
          </span>

        </div>

      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
            <FaShieldAlt className="text-indigo-400" />
          </div>

          <div>
            <p className="text-sm font-medium">
              MERN Stack
            </p>

          
          </div>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;