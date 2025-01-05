import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext); // Access the logged-in user's information
  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
    userEmail: user?.email || "",
    userName: user?.displayName || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://coffee-store-server-five-sandy.vercel.app/equipment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Equipment added successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          setFormData({
            image: "",
            itemName: "",
            categoryName: "",
            description: "",
            price: "",
            rating: "",
            customization: "",
            processingTime: "",
            stockStatus: "",
            userEmail: user?.email || "",
            userName: user?.displayName || "",
          });
        }
      })
      .catch((error) => {
        console.error("Error adding equipment:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add equipment. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8  from-white via-gray-100 to-gray-200 shadow-lg rounded-lg bg-white dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8">
        Add New Equipment
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Image URL */}
        <div>
          <label
            htmlFor="image"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter the image URL"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        {/* Item Name */}
        <div>
          <label
            htmlFor="itemName"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Item Name
          </label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            placeholder="Enter the item name"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        {/* Category Name */}
        <div>
          <label
            htmlFor="categoryName"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Category Name
          </label>
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            placeholder="Enter the category name"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label
            htmlFor="description"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a detailed description"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter the price"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label
            htmlFor="rating"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Rating (1-5)
          </label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Enter the rating"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        {/* Customization */}
        <div>
          <label
            htmlFor="customization"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Customization
          </label>
          <input
            type="text"
            name="customization"
            value={formData.customization}
            onChange={handleChange}
            placeholder="Enter customization details"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        {/* Processing Time */}
        <div>
          <label
            htmlFor="processingTime"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Processing Time
          </label>
          <input
            type="text"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleChange}
            placeholder="Enter the processing time"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        {/* Stock Status */}
        <div>
          <label
            htmlFor="stockStatus"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Stock Quantity
          </label>
          <input
            type="number"
            name="stockStatus"
            value={formData.stockStatus}
            onChange={handleChange}
            placeholder="Enter the available quantity"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>

        {/* User Email */}
        <div>
          <label
            htmlFor="userEmail"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            readOnly
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-300 cursor-not-allowed"
          />
        </div>

        {/* User Name */}
        <div>
          <label
            htmlFor="userName"
            className="font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            User Name
          </label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            readOnly
            className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-gray-300 cursor-not-allowed"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-md shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          >
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;
