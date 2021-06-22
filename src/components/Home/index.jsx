import React from "react";
import Ads from "./Ads";
import Auctions from "./Auctions";
import Categories from "./Categories";
import Floating from "./Floating";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      {/* <About /> */}
      <Slider />
      <Ads />
      <Auctions />
      <Categories />
      <Floating />
    </div>
  );
};

export default Home;
