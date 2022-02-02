/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="fixed-bottom bg-dark text-primary ">
        <div className="row mb-3" style={{ color: "white" }}>
          <div className=" text-center mt-1">
            <a href="https://brainspk.com/" style={{ color: "white", textDecorationColor: "white", textDecoration: "none" }}> Brainspk </a> © 2021-22 &nbsp;
            <a
              href="https://www.facebook.com/search/top?q=brainspk/"
              style={{ color: "white", textDecorationColor: "white", textDecoration: "none" }}
              target={"blank"}
              className="fab fa-facebook fa-lg"
            ></a>
            &nbsp;
            {/* <a
              href="https://www.linkedin.com/in/brains-pk-77ba95191/"
              style={{ color: "white", textDecorationColor: "white", textDecoration: "none" }}
              target={"blank"}
              className="fa fa-linkedin fa-lg"
            ></a>
            &nbsp;&nbsp; */}
            <a
              href="https://www.instagram.com/brainspk2021/"
              style={{ color: "white", textDecorationColor: "white", textDecoration: "none" }}
              target={"blank"}
              className="fab fa-instagram fa-lg">
            </a>
            &nbsp;&nbsp;
            {/* <a
              href="https://www.youtube.com/"
              target={"blank"}
              className="fa fa-youtube"
            ></a> */}
            &nbsp;&nbsp;
          </div>
        </div>

      </div>

    </>
  );
};

export default Footer;
