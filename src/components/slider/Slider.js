import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Carousel, Button, Card, Modal, Row, Col } from "react-bootstrap";
import "./slider.css";
import image from "../../assets/images/forpic.png";
import sliderOne from "../../assets/images/sliderOne.jpg";
import sliderTwo from "../../assets/images/slidertwo.jpg";
import sliderThree from "../../assets/images/sliderThree.jpg";
import shahram from "../../assets/images/shahram.jpeg";
import firebaseDb from "firebase";
import brainspk from './../../images/brainspkn.png'
import slide1 from './../../assets/images/slide1.jpg'
import slide2 from './../../assets/images/slide2.jpg'
import slide3 from './../../assets/images/slide3.jpg'
import { AiOutlinePhone } from "react-icons/ai";
import supportimage from "../../assets/images/supportimage.jpg"
import Footers from "../Footers/Footers";

const Slider = () => {
  var [contactObjects, setContactObjects] = useState({});

  useEffect(() => {
    firebaseDb
      .database()
      .ref("news")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setContactObjects({
            ...snapshot.val(),
          });
        else setContactObjects({});
      });
  }, []);
  const history = useHistory();
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-lg"
        style={{ display: "flex", alignItems: "center" }}
        aria-labelledby="contained-modal-title-vcenter"
        centered

      >

        <Modal.Header style={{ backgroundColor: "grey" }} closeButton  >
          <Modal.Title id="contained-modal-title-vcenter"
            style={{ textAlign: "center", justifyContent: "center", color: "white" }}
          >
            <img src={brainspk} style={{ width: "5rem" }}></img>
            Brainspk

          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }} >
          <ul>
            <h4 style={{ fontSize: "18px" }}>
              Welcome To DEO-Female-Swabi <br />
              This Website Is Gifted To Mrs Sofia Tabassum By BrainsPk Software Company.
              DEO-FEMALE-SWABI Maintain The Following Records:
            </h4>
            <li>
              1: Govt Girls School in District Swabi  Records.
            </li>
            <li>
              2: Covid-19 Vaccination Record.
            </li>
            <li>
              3: Budget Records.
            </li>
            <li>
              4: Attendance Records.
            </li>
            <li>
              5: Finance Records.
            </li>
            <li>
              6: Important Files.
            </li>
            <li>
              7: Education Related Downloadable PDF Forms.
            </li>
            <li>
              8: Important Notification Related To Education.
            </li>

            This Website Is Developed By BrainsPk Software Company.
            We Provide Modern-Technology Solutions In The Form Of Websites , Desktop & Mobile Applications.
          </ul>
        </Modal.Body>
      </Modal>
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="Third slide"
              src={slide1}
            ></img>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" alt="First slide" src={sliderOne} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderTwo} alt="Second slide" />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="Third slide"
              src={sliderThree}
            ></img>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="Third slide"
              src={slide2}
            ></img>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="Third slide"
              src={slide3}
            ></img>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <div className="container-notification">
          <div className="container-row2">

            <div className="row-cardsfulldiv">
              <div className="col-shahram">
                <img className="shahramimage" src={shahram} />
                <h5 className="card-title">Education Minister Khyber Pakhtunkhwa-Shahram Khan Tarakai</h5>

                <p className="card-text"> I am delighted to welcome you on School Education and Literacy
                  Department’s new website. The contents of the website convey a
                  complete picture of our reform agenda and overall functions of
                  the school education department. Our goal is to provide free
                  and quality education to children at the school level. This
                  interactive website encompasses all our programmes and
                  functions. We’ll make sure that all notifications issued by
                  the department are updated. Besides, the website carries our
                  social media threads which will automatically be updated as
                  soon as we tweet and send Facebook posts.</p>

              </div>
              <div className="col-rabia">
                <img className="rabiaimage" src={image} />
                <h5 className="card-title">DEO Female Swabi Ms Sofia Tabassum</h5>
                <p className="card-text"> Education is a fundamental human right. It is education,
                  which differentiate between being human or otherwise.
                  Besides, it is a powerful tool, which enables socially and
                  economically marginalized children and adults to lift
                  themselves in the society. Education equips with skills to
                  shape their future, which in turn transforms the whole
                  society. Educated and thriving citizens are the most
                  precious asset of a country to scale the heights of glory
                  among comity of nations. I pledge to utilize our paramount
                  efforts and potential to reach out every inch of the
                  motherland to equip every child with optimum level of
                  education so that they can make this country THE BEST.</p>
              </div>

            </div>

            <div className="row-notification mt-4">
              <div className="col-sm-6">
                <h2 className="anno-header"> Notifications:</h2>
                <div className="anno">
                  <marquee
                    direction="up"
                    scrollamount="1"
                    onmouseover="this.stop();"
                    onmouseout="this.start();"
                    style={{ height: "100%", textAlign: "justify" }}
                  >
                    <ul style={{ lineHeight: "36px" }}>
                      <div className="row">
                        <div className="">
                        </div>
                        <div className="">
                          <table className="table table-borderless table-stripped">
                            <thead className="thead-light">
                              <tr>

                              </tr>
                            </thead>
                            <tbody>
                              {Object.keys(contactObjects).map((id) => {
                                return (
                                  <tr key={id}>
                                    <td>{contactObjects[id].fullName}</td>

                                    <td>{contactObjects[id].email}</td>
                                    <td></td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </ul>
                  </marquee>
                </div>
              </div>
            </div>

          </div>

          <div className="row-question">
            <div className="col-question1">
              <div><AiOutlinePhone className="phoneicon" /></div>
              <div>
                <h2 className="h3t ms-5 mt-3">Have a question or need support?</h2>
                <p className="emailapca ms-5">Visit FAQs or Contact page. You can drop us email on brainspk21@gmail.com</p>
              </div>
            </div>
            <div className="col-question2 mt-5 ms-5">
            </div>
          </div>

          <div>
            <div
              className="quaidquotes m-4"
              style={{ padding: "0 0px 20px 10px" }}
            >
              <p>
                “With faith, discipline and selfless devotion to duty, there is
                nothing worthwhile that you cannot achieve.” ― Muhammad Ali Jinnah
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Slider;
