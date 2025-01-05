import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://coffee-store-server-five-sandy.vercel.app/equipment")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-700 dark:text-gray-200">
        Featured Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="border rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-700 transition transform hover:scale-105 duration-300"
            >
              <div className="relative h-40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-gray-800 px-2 py-1 text-xs font-bold rounded text-white">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                  {product.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {product.description.slice(0, 50)}...
                </p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-300 mt-2">
                  ${product.price}
                </p>
                <Link
                  to={
                    user
                      ? `/details/${product._id}`
                      : `/signIn?redirect=/details/${product._id}`
                  }
                  className="mt-4 block text-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
