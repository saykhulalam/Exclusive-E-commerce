import React from "react";
import Banner from "../components/Banner";
import FlashSales from "../components/FlashSales";
import Category from "../components/Category";
import BestSellingProducts from "../components/BestSellingProducts";
import AddPoster from "../components/AddPoster";
import ExploreOurProducts from "../components/ExploreOurProducts";
import Arrival from "../components/Arrival";
import Service from "../components/Service";





const Home = () => {
  return (
    <>
      <Banner/>
      <FlashSales/>
      <Category/>
      <BestSellingProducts/>
      <AddPoster/>
      <ExploreOurProducts/>
      <Arrival/>
      <Service/>
      
    </>
  );
};

export default Home;
