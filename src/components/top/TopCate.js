import React from "react";
import TopCart from "./TopCart";

const TopCate = () => {
  return (
    <>
      <section className="topCat background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <i className="fa fa-th-large"></i>
              <h2>Top Categories</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCate;
