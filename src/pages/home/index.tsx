import React from "react";
import HomeBanner from "../../components/home-banner";
import HotProducts from "../../components/hot-products";
import Brand from "../../components/brand";
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
    </div>
  );
};
export default Home;
