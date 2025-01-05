import React from "react";
import Banner from "./Banner";
import FeaturedCategories from "./FeaturedCategories";
import CustomerReviews from "./CustomerReviews";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Banner />

      <FeaturedProducts />
      <FeaturedCategories />
      <CustomerReviews />
    </div>
  );
};

export default Home;
