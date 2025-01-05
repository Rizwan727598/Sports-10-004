import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "John Doe",
      review: "Excellent quality and fast delivery! Highly recommended.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "Great variety of products. Found everything I needed.",
      rating: 4,
    },
    {
      name: "Michael Brown",
      review:
        "The prices are competitive, and the customer support is excellent!",
      rating: 5,
    },
  ];

  return (
    <div className="py-16 bg-gray-200 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
        Customer Reviews
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "{review.review}"
            </p>
            <div className="flex items-center">
              <div className="flex text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927a.75.75 0 011.902 0l2.357 4.773 5.294.772a.75.75 0 01.416 1.279l-3.83 3.733.903 5.268a.75.75 0 01-1.088.79L10 15.347l-4.725 2.484a.75.75 0 01-1.088-.79l.903-5.268-3.83-3.733a.75.75 0 01.416-1.279l5.294-.772 2.357-4.773z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 dark:text-gray-300 ml-2">
                - {review.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
