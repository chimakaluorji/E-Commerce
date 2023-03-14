import React from "react";

const Categories = () => {
  const data = [
    {
      categoryImage: require("../../assets/images/category/cat1.jpg"),
      categoryName: "Luminous Pigment",
    },
    {
      categoryImage: require("../../assets/images/category/cat2.jpg"),
      categoryName: "Alcoholic Wine",
    },
    {
      categoryImage: require("../../assets/images/category/cat3.jpg"),
      categoryName: "Bouncing House",
    },
    {
      categoryImage: require("../../assets/images/category/cat4.jpg"),
      categoryName: "Garland",
    },
    {
      categoryImage: require("../../assets/images/category/cat5.jpg"),
      categoryName: "Peppa Pig",
    },
    {
      categoryImage: require("../../assets/images/category/cat6.jpg"),
      categoryName: "Party Balloon",
    },
    {
      categoryImage: require("../../assets/images/category/cat7.jpg"),
      categoryName: "Disposable Cups",
    },
    {
      categoryImage: require("../../assets/images/category/cat8.jpg"),
      categoryName: "Flowers",
    },
    /*  {
      categoryImage: require("../../assets/images/category/cat9.jpg"),
      categoryName: "Party Masks",
    },
    {
      categoryImage: require("../../assets/images/category/cat10.jpg"),
      categoryName: "Gun Cash",
    },
    {
      categoryImage: require("../../assets/images/category/cat11.jpg"),
      categoryName: "Party Glasses",
    }, */
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.categoryImage} alt="product" />
              <span>{value.categoryName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
