import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav
      className={`${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
          : "bg-gray-200 text-gray-800"
      } shadow-lg`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-yellow-400">EquiSports</h1>
          <span
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            } text-sm italic`}
          >
            "Elevate Your Game"
          </span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden focus:outline-none z-50 p-2"
          style={{
            backgroundColor: darkMode ? "#222" : "#fff",
            borderRadius: "8px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={darkMode ? "#fff" : "#000"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <line x1="18" y1="6" x2="6" y2="18" />
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 text-sm items-center w-full md:w-auto mt-4 md:mt-0`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 underline font-bold"
                  : "hover:text-yellow-400 transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-equipment"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 underline font-bold"
                  : "hover:text-yellow-400 transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              All Equipment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 underline font-bold"
                  : "hover:text-yellow-400 transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              Add Equipment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-equipment"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 underline font-bold"
                  : "hover:text-yellow-400 transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              My Equipment
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {!user ? (
            <>
              <NavLink
                to="/signIn"
                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 hover:shadow-lg transform hover:scale-105 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signUp"
                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 hover:shadow-lg transform hover:scale-105 transition"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-400 text-white flex items-center justify-center rounded-full">
                    U
                  </div>
                )}
                <span
                  className="hover:underline cursor-pointer"
                  title={user.displayName || "User"}
                >
                  {user.displayName || "User"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 hover:shadow-lg transform hover:scale-105 transition"
              >
                Log Out
              </button>
            </>
          )}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
