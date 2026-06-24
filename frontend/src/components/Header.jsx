function Header({ onLogout }) {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-sm p-6 flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome back 👋
        </h1>

        <p className="text-gray-500 mt-1">
          Here's what's happening with your employees today.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
          S
        </div>

        <div>
          <p className="font-semibold">
            Sophia
          </p>

          <p className="text-sm text-gray-500">
            Administrator
          </p>
        </div>

        <button
          onClick={onLogout}
          className="ml-4 border border-red-500 text-red-500 px-5 py-3 rounded-xl hover:bg-red-500 hover:text-white transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Header;