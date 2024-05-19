import React from "react";
import Banner from "../components/Banner";
import FlashSales from "../components/FlashSales";
import Category from "../components/Category";
import BestSellingProducts from "../components/BestSellingProducts";
import AddPoster from "../components/AddPoster";
import ExploreOurProducts from "../components/ExploreOurProducts";



const Home = () => {
  return (
    <>
      <Banner/>
      <FlashSales/>
      <Category/>
      <BestSellingProducts/>
      <AddPoster/>
      <ExploreOurProducts/>
    </>
  );
};

export default Home;
