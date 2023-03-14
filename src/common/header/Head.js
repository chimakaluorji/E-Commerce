import React from "react";

function head() {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+234 803 783 8400</label>
            <i className="fa fa-envelope"></i>
            <label>info@partyhouselv.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Help</label>
            <i className="fa fa-flag"></i>
            <label>EN</label>
            <i className="fa fa-solid fa-money"></i>
            <label>GBP</label>
          </div>
        </div>
      </section>
    </>
  );
}

export default head;
