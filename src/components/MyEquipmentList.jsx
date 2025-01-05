import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const [equipment, setEquipment] = useState([]);
  const navigate = useNavigate();

  // Fetch user's equipment
  useEffect(() => {
    if (user) {
      fetch(
        `https://coffee-store-server-five-sandy.vercel.app/equipment?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setEquipment(data))
        .catch((error) => console.error("Error fetching equipment:", error));
    }
  }, [user]);

  // Handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-five-sandy.vercel.app/equipment/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = equipment.filter((item) => item._id !== id);
              setEquipment(remaining);
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          })
          .catch((error) =>
            Swal.fire("Error!", "Failed to delete the item.", "error")
          );
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 p-6 bg-white dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-8">
        My Equipment
      </h2>
      {equipment.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          You haven't added any equipment yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden border dark:border-gray-600 hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Category: {item.category}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Price: ${item.price}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => navigate(`/update/${item._id}`)}
                    className="bg-gray-500 dark:bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 dark:hover:bg-gray-700 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-gray-700 dark:bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 dark:hover:bg-gray-900 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEquipmentList;
