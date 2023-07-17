import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import products from "../assets/fake-data/product";
import { useParams } from "react-router-dom";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/category/common-section/CommonSection";
import ProductCard from "../component/UI/category/product_card/ProductCard";
import { Container, Row, Col } from "reactstrap";
// import productImg from "../assets/Image/product_01.jpg";
import "../style/product-details.css";
import { cartActions } from "../store/shopping-cart/carSlice";

const FoodDetail = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')
  const { id } = useParams();
  const dispatch = useDispatch()

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image1);
  const { title, price, category, desc, image1 } = product;
  const realatedProduct = products.filter((item) => category === item.category);
  const addItem =() =>{
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image1
    }))
  }
  const submitHandler = e =>{
    e.preventDefault()
    console.log(enteredName, enteredEmail, reviewMsg)
  }
  // Hook
  useEffect(() => setPreviewImg(product.image1), [product]);
  useEffect(() => window.scrollTo(0, 0), [product]);
  return (
    <Helmet title="Product">
      <CommonSection title={title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product_images mt-3">
                <div
                  className="img-items"
                  onClick={() => setPreviewImg(product.image1)}
                >
                  <img src={product.image1} alt="Product" className="w-[50%]" />
                </div>
                {/* ---------- */}
                <div
                  className="img-items"
                  onClick={() => setPreviewImg(product.image2)}
                >
                  <img src={product.image2} alt="Product" className="w-[50%]" />
                </div>
                {/*  */}
                <div
                  className="img-items"
                  onClick={() => setPreviewImg(product.image3)}
                >
                  <img src={product.image3} alt="Product" className="w-[50%]" />
                </div>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="product-main-img mb-4">
                <img src={previewImg} alt="" className="w-full" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="sigle-product-content mt-4 p-3">
                <h2 className="product-title">
                  <span> {title} </span>
                </h2>
                <span className="product-price">${price}</span>
                <p className="category-p">
                  Category: <span> {category} </span>
                </p>
                <button className="addToCart-btn" onClick={addItem}>Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs flex items-center cursor-pointer gap-3 py-4">
                <h5
                  className={` ${tab === "desc" ? "text-red-500 " : ""} `}
                  onClick={() => setTab("desc")}
                >
                  Describetion
                </h5>
                <h5
                  className={`${tab === "rev" ? "text-red-500 " : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h5>
              </div>
              {tab === "desc" ? (
                <div className="tab-content p-4">
                  <p>{desc}</p>
                  {/* ------------------------ Form ------------------- */}
                </div>
              ) : (
                <div className="tab-form mb-3">
                  <div className="review-text">
                    <p className="user-name">Hon Sokrong</p>
                    <p className="user-email">honsokrong@gmail.com</p>
                    <p className="feedback-text">great product</p>
                  </div>
                  <div className="review-text">
                    <p className="user-name">Hon Sokrong</p>
                    <p className="user-email">honsokrong@gmail.com</p>
                    <p className="feedback-text">great product</p>
                  </div>
                  <div className="review-text">
                    <p className="user-name">Hon Sokrong</p>
                    <p className="user-email">honsokrong@gmail.com</p>
                    <p className="feedback-text">great product</p>
                  </div>
                  <form>
                    <div className="form-group" onSubmit={submitHandler}>
                      <input type="text" placeholder="Enter your name"
                      onChange={e=> setEnteredName(e.target.value)}
                      required
                      />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Enter your email" 
                      onChange={e => setEnteredEmail(e.target.value)}
                      required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Writ your review"
                        onChange={e => setReviewMsg(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="addToCart-btn">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-5">
              <h2>You might also like</h2>
            </Col>
            {realatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetail;
