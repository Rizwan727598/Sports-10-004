import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { darkMode } = useContext(ThemeContext);

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
      <div className="container mx-auto flex justify-between items-center p-4">
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

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 underline font-bold"
                  : "hover:text-yellow-400 transition"
              }
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
            >
              My Equipment
            </NavLink>
          </li>
        </ul>

        {/* User Controls */}
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <NavLink
                to="/signIn"
                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 hover:shadow-lg transform hover:scale-105 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/signUp"
                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 hover:shadow-lg transform hover:scale-105 transition"
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
