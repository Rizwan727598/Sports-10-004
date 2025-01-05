import React from "react";

const FeaturedCategories = () => {
  const categories = [
    {
      name: "Cricket",
      image:
        "https://i.ibb.co.com/ZWnChgM/254b7920-580c-476b-9771-702f3ce9f837.webp",
    },
    {
      name: "Football",
      image: "https://i.ibb.co.com/XYtqyXS/s960-Football-gov-uk.jpg",
    },
    {
      name: "Tennis",
      image: "https://i.ibb.co.com/rx1mQLy/Tennis-Racket-and-Balls.jpg",
    },
    {
      name: "Boxing Gloves",
      image: "https://i.ibb.co.com/dGzXppH/76203003-xxl.jpg",
    },
  ];

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
        Featured Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
