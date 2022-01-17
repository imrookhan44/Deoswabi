/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>

      <div className="fixed-bottom bg-dark text-primary ">
        <div className="row mb-3">
          <div className=" text-center mt-1">
            Education Fund © 2021-22 &nbsp;
            <a
              href="https://www.facebook.com/"
              target={"blank"}
              className="fa fa-facebook"
            ></a>{" "}
            &nbsp;&nbsp;
            <a
              href="https://twitter.com/?lang=en"
              target={"blank"}
              className="fa fa-twitter"
            ></a>
            &nbsp;&nbsp;
            {/* <a
              href="https://www.google.com/"
              target={"blank"}
              className="fa fa-google"
            ></a> */}
            &nbsp;&nbsp;
            <a
              href="https://www.youtube.com/"
              target={"blank"}
              className="fa fa-youtube"
            ></a>
            &nbsp;&nbsp;
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
