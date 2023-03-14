import React from "react";
import DData from "./DData";
import Slider from "react-slick";

const DCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    margin: 20,
  };

  return (
    <>
      <Slider {...settings}>
        {DData.map((val, index) => {
          return (
            <div className="box product" key={index}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <h4>{val.name}</h4>
              <span>
                <i class="fa fa-gbp"></i>
                {val.price}.00
              </span>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default DCard;
