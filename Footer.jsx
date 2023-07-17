import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import React from "react";
import logo from "../../assets/Image/logo_team.png";
import "../../style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer_logo text-start">
              <img src={logo} alt="Logo" />
              <h5>Group A5</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                quas, vero repellat eum eos commodi,
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="font-bold footer_title">Delivery Time</h5>
            <ListGroup className="dilivery-time-list">
              <ListGroupItem className="dilivery-time-items border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00 am - 11:00 pm</p>
              </ListGroupItem>

              <ListGroupItem className="dilivery-time-items border-0 ps-0">
                <span>Friday - saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="font-bold footer_title">Contact</h5>
            <ListGroup className="dilivery-time-list">
              <ListGroupItem className="dilivery-time-items border-0 ps-0">
                <p>Location: Phnom Penh, Beaukort-311, Cambodia</p>
              </ListGroupItem>
              <ListGroupItem className="dilivery-time-items border-0 ps-0">
                <span>Phone: 061304609</span>
              </ListGroupItem>

              <ListGroupItem className="dilivery-time-items border-0 ps-0">
                <span>example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="font-bold footer_title">Newsletter</h5>
            <p>Subscribe our Newletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                {" "}
                <i class="ri-send-plane-line"></i>{" "}
              </span>
            </div>
          </Col>
        </Row>
        {/*  */}
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyRightText text-[1rem] font-bold">
              Copyright - 2023, Website Made by Yoeung Yeng
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social_link flex items-center gap-3 justify-end">
              <p>Follow:</p>
              <span>
                {" "}
                <Link to={"https://www.facebook.com/"} target="_blank">
                  <i class="ri-facebook-line hover:bg-red-500"></i>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to={"https://github.com/YoeungYeng/popup"} target="_blank">
                  <i class="ri-github-fill hover:bg-red-500"></i>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link
                  to={"https://www.youtube.com/channel/UCOOS1Hx7YbSMQgJYlkZ5RfQ"} target="_blank"
                >
                  <i class="ri-youtube-line hover:bg-red-500"></i>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link
                  to={"https://instagram.com/yeng.fc?igshid=MmIzYWVlNDQ5Yg=="} target="_blank"
                >
                  <i class="ri-instagram-line hover:bg-red-500"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
