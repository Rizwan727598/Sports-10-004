import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://coffee-store-server-five-sandy.vercel.app/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-800">
        <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  if (!item) {
    return (
      <p className="text-center text-red-500 bg-white dark:bg-gray-800 h-screen flex items-center justify-center">
        Item not found!
      </p>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-contain bg-gray-100 dark:bg-gray-700"
          />
          <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
            {item.category}
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {item.name}
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-800 dark:text-gray-300">
                Price:
              </span>{" "}
              ${item.price}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-800 dark:text-gray-300">
                Description:
              </span>{" "}
              {item.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-800 dark:text-gray-300">
                Rating:
              </span>{" "}
              {item.rating}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-800 dark:text-gray-300">
                Customization:
              </span>{" "}
              {item.customization}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-800 dark:text-gray-300">
                Processing Time:
              </span>{" "}
              {item.processingTime}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-800 dark:text-gray-300">
                Stock:
              </span>{" "}
              {item.stock}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
