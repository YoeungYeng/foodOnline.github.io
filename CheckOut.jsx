import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../component/UI/category/common-section/CommonSection";
import Helmet from "../component/Helmet/Helmet";
import { useSelector } from "react-redux";

function CheckOut() {
  // Hook
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setpostalCode] = useState("");
  //  --------------------------------------
  const shippinginfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);
  const submitHandler = (e) => {
    e.preventDefault();
    const ussershippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      countery: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };
    shippinginfo.push(ussershippingAddress);
    console.log(shippinginfo);
  };

  return (
    <Helmet title="checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <h6 className="mb-4 mt-4 text-[3.1rem] font-bold">
                Shipping Address
              </h6>
              <form
                className="checkout-form w-[100%] mb-5"
                onSubmit={submitHandler}
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Enter your number"
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                  
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Country"
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="City"
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    onChange={(e) => setpostalCode(e.target.value)}
                  />
                </div>
                <button type="submit" className="addToCart-btn">Payment</button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout_bill bg-red-300 p-4 mt-4 rounded">
                <h5 className="font-bold text-[1.4rem] p-2 text-sky-900 drop-shadow shadow-gray-50">
                  Subtotal: <span> ${cartTotalAmount} </span>
                </h5>
                <h5 className="font-bold text-[1.4rem] p-2 text-sky-900 drop-shadow shadow-gray-50">
                  Shipping : <span> ${shippingCost}</span>
                </h5>
                <div className="checkout_total">
                  <h5 className="font-bold text-[1.4rem] p-2 text-sky-900 drop-shadow shadow-gray-50">
                    Total: <span> ${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default CheckOut;
