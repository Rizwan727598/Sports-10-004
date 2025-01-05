import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    fetch(`https://coffee-store-server-five-sandy.vercel.app/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      .catch((error) =>
        console.error("Error fetching equipment details:", error)
      );
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData);

    fetch(`https://coffee-store-server-five-sandy.vercel.app/equipment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Updated!",
            "The equipment details have been updated successfully.",
            "success"
          );
          navigate("/my-equipment");
        }
      })
      .catch((error) =>
        Swal.fire("Error!", "Failed to update equipment details.", "error")
      );
  };

  if (!equipment)
    return (
      <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-800">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-gray-100 mb-8">
        Update Equipment Details
      </h2>
      <form onSubmit={handleUpdate} className="space-y-6">
        {/* Grid Layout for Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={equipment.name}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              defaultValue={equipment.category}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            defaultValue={equipment.price}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={equipment.description}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            defaultValue={equipment.image}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
              User Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={equipment.email}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-300 cursor-not-allowed shadow-sm"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              defaultValue={equipment.userName}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-300 cursor-not-allowed shadow-sm"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Update Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEquipment;
