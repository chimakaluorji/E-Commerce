import React from "react";

const Announcement = () => {
  const myStyle = {
    width: "30%",
    height: "340px",
  };
  const myStyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <div>
      <section className="announcement background">
        <div className="container d_flex">
          <div className="img" style={myStyle}>
            <img
              src={require("../../assets/images/category/cat3.jpg")}
              width="100%"
              height="100%"
              alt="ProductImage"
            />
          </div>
          <div className="img" style={myStyle1}>
            <img
              src={require("../../assets/images/category/cat5.jpg")}
              width="100%"
              height="100%"
              alt="ProductImage"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Announcement;
