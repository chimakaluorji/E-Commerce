import React from "react";

const Cat = () => {
  const data = [
    {
      cateImg: require("../../assets/images/category/cat10.jpg"),
      cateName: "Money Spray Gun",
    },
    {
      cateImg: require("../../assets/images/category/cat9.jpg"),
      cateName: "Party Masks",
    },
    {
      cateImg: require("../../assets/images/category/cat8.jpg"),
      cateName: "Red Rose Petals Flowers",
    },
    {
      cateImg: require("../../assets/images/category/cat7.jpg"),
      cateName: "Disposable Cups",
    },
    {
      cateImg: require("../../assets/images/category/cat5.jpg"),
      cateName: "Peppa Pig",
    },
    {
      cateImg: require("../../assets/images/category/cat4.jpg"),
      cateName: "Garland",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Cat;
