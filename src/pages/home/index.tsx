import React from "react";
import Brand from "../../components/brand";
import HotProducts from "../../components/hot-products";
<<<<<<< Updated upstream
const Home = () => {
  return (
    <div>
      <Brand/>
      <HotProducts/>
      
=======
import HomeBanner from "../../components/homebanner";
import HomePromotion from "../../components/home-promotion";
import HomeTypeProducts from "../../components/home-type-products";
const Home = () => {
  return (
    <div >
      <HomeBanner />
      <Brand />
      <HotProducts />
      <HomePromotion/>
      <HomeTypeProducts/>
>>>>>>> Stashed changes
    </div>
  );
};
export default Home;
