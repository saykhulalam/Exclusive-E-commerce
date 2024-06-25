import React from "react";
import Banner from "../components/Banner";
import FlashSales from "../components/FlashSales";
import Category from "../components/Category";
import BestSellingProducts from "../components/BestSellingProducts";
import AddPoster from "../components/AddPoster";
import ExploreOurProducts from "../components/ExploreOurProducts";
import Arrival from "../components/Arrival";
import Service from "../components/Service";
import ScrollToTop from "react-scroll-to-top";


const Home = () => {
  return (
    <>
      <Banner />
      <FlashSales />
      <Category />
      <BestSellingProducts />
      <AddPoster />
      <ExploreOurProducts />
      <Arrival />
      <Service />
      <ScrollToTop
        style={{ color: "red", width: "50px", paddingLeft: "10px" }}
        smooth
      />
    </>
  );
};

export default Home;
