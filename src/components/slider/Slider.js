import React from "react";
import { useHistory } from "react-router";
import { Carousel, Button, Card } from "react-bootstrap";
import "./slider.css";
import image from "../../assets/images/forpic.png";
import sliderone from "../../assets/images/sliderone.jpg";
import slidertwo from "../../assets/images/slidertwo.jpg";
import sliderthree from "../../assets/images/sliderthree.jpg";
import shahram from "../../assets/images/shahram.jpeg";
import hafiz from "../../assets/images/hafiz.png";

const Slider = () => {
  const history = useHistory();
  return (
    <>
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" alt="First slide" src={sliderone} />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slidertwo} alt="Second slide" />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="Third slide"
              src={sliderthree}
            ></img>

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="row" id="cardsfulldivrow">
          <div className=" buttonst buttondivinfo ">
            <Button
              variant="danger"
              size="lg"
              onClick={() => {
                history.push("/SchoolStatus");
              }}
              className="btngroupslider col-lg-3 col-md-3 col-sm-12 col-xs-12"
            >
              Covid(19) Data
            </Button>
            &nbsp;
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                history.push("/SchoolStatus");
              }}
              className="btngroupslider col-lg-3 col-md-3 col-sm-12 col-xs-12"
            >
              School Budget Data
            </Button>
            &nbsp;
            <Button
              variant="warning"
              size="lg"
              className="btngroupslider col-lg-3 col-md-3 col-sm-12 col-xs-12"
              onClick={() => {
                history.push("/SchoolStatus");
              }}
            >
              Accounts
            </Button>
          </div>
        </div>

        <div className="row cardsfulldiv" id="cardsfulldivrow">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 carddivslider">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={shahram} />
              <Card.Body>
                <Card.Title>
                  Education Minister Khyber Pakhtunkhwa-Shahram Khan Tarakai
                </Card.Title>
                <Card.Text className="cardtextsliderdiv">
                  I am delighted to welcome you on School Education and Literacy
                  Department’s new website. The contents of the website convey a
                  complete picture of our reform agenda and overall functions of
                  the school education department. Our goal is to provide free
                  and quality education to children at the school level. This
                  interactive website encompasses all our programmes and
                  functions. We’ll make sure that all notifications issued by
                  the department are updated. Besides, the website carries our
                  social media threads which will automatically be updated as
                  soon as we tweet and send Facebook posts.
                </Card.Text>
                {/* <Button variant="success">Details</Button> */}
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 carddivslider">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>DEO Female Swabi-Dr. Ms Namehere</Card.Title>
                <Card.Text className="cardtextsliderdiv">
                  <p>
                    Education is a fundamental human right. It is education,
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
                    education so that they can make this country THE BEST.
                  </p>
                </Card.Text>
                {/* <Button variant="success">Details</Button> */}
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 carddivslider">
            <div class="col-sm-6">
              <h2 class="anno-header"> News and Events:</h2>
              <div class="anno">
                <marquee
                  direction="up"
                  scrollamount="1"
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                  style={{ height: "290px", textAlign: "justify" }}
                >
                  <ul style={{ lineHeight: "36px" }}>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>

                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>

                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>

                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>

                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>

                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>

                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>

                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </marquee>
              </div>
            </div>
          </div>
          {/* </div> */}
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
    </>
  );
};

export default Slider;
