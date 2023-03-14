import React from "react";
import NData from "./NData";

const Cart = () => {
  return (
    <>
      <div className="content grid product">
        {NData.map((val, index) => {
          return (
            <>
              <div className="box" key={index}>
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <h4>{val.name}</h4>
                <span>
                  <i class="fa fa-gbp"></i>
                  {val.price}.00
                </span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
