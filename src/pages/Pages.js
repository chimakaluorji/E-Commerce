import React from "react";
import Home from "../components/mainPage/Home";
import FlashDeals from "../components/flashDeal/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrival from "../components/newArrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Announcement from "../components/Announcements/Announcement";
import Wrapper from "../components/Wrapper/Wrapper";
import Footer from "../common/Footer/Footer";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrival />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Announcement />
      <Wrapper />
      <Footer />
    </>
  );
};

export default Pages;
