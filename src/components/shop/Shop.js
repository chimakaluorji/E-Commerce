import React from "react";
import Cat from "./Cat";
import ShopCart from "./ShopCart";
import "./ShopCart.css";

const Shop = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Cat />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Party Cups</h2>
              </div>
              <div className="heading-right row">
                <span>View all</span>
                <i className="fa fa-arrow-right"></i>
              </div>
            </div>

            <div className="product-content grid1">
              <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
