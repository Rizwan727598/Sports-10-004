import React, { useState, useEffect } from "react";

const AllEquipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [sorted, setSorted] = useState("asc"); // Default sorting order: ascending

  // Fetch equipment data
  useEffect(() => {
    fetch("https://coffee-store-server-five-sandy.vercel.app/equipment")
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      .catch((error) => console.error("Error fetching equipment:", error));
  }, []);

  // Handle sorting
  const handleSort = () => {
    const sortedEquipment = [...equipment].sort((a, b) =>
      sorted === "asc" ? a.price - b.price : b.price - a.price
    );
    setSorted(sorted === "asc" ? "desc" : "asc");
    setEquipment(sortedEquipment);
  };

  return (
    <div className="p-8 bg-white dark:bg-gray-800">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
          All Sports Equipment
        </h2>
        <button
          onClick={handleSort}
          className="bg-gray-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
        >
          Sort by Price ({sorted === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {equipment.map((item) => (
          <div
            key={item._id}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-600 flex items-center justify-center">
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 truncate">
                {item.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Category: {item.category}
              </p>
              <p className="text-gray-800 dark:text-gray-300 font-bold mt-2">
                Price: ${item.price}
              </p>
              <button
                className="mt-4 bg-gray-600 text-white px-4 py-2 w-full rounded-lg shadow hover:bg-gray-700 transition duration-300"
                onClick={() => (window.location.href = `/details/${item._id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEquipment;
