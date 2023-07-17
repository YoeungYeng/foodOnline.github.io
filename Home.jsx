import React, { useEffect, useState } from "react";
import Helmet from "../component/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../style/hero-section.css";
import heroImg from "../assets/Image/hero.png";
import { Link } from "react-router-dom";
import Category from "../component/UI/category/Category";
import "../style/home.css";
import featureImg1 from "../assets/Image/service-01.png";
import featureImg2 from "../assets/Image/service-02.png";
import featureImg3 from "../assets/Image/service-03.png";
import network from "../assets/Image/network.png";
import ProductCard from "../component/UI/category/product_card/ProductCard";
import TestimonialSider from "../component/UI/category/slide/TestimonialSider";
// import products from "../assets/fake-data/product.js";
import foodCategoryImg01 from "../assets/Image/pizza.png";
import foodCategoryImg02 from "../assets/Image/hamburger.png";
import foodCategoryImg03 from "../assets/Image/bread.png";
import products from "../assets/fake-data/product.js";
import location from "../assets/Image/location.png";

const featureDate = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deserunt!",
    Minu: "Hello Group A5",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deserunt!",
    Minu: "Hello Group A5",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deserunt!",
    Minu: "Hello Group A5",
  },
];

const Home = () => {
  // Hook
  const [category, setCategory] = useState("All");
  const [allProduct, setAllProduct] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);
  useEffect(() => {
    const filterPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filterPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  useEffect(() => {
    if (category === "All") {
      setAllProduct(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProduct(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProduct(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProduct(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title="Sokrong">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mt-4 contet-easy font-bold text-[1.1rem]">
                  Easy way to make an order
                </h5>

                <h1 className="mb-3 hero_title">
                  <span>HUNGRY?</span> Just Wait <span>FOOD</span> <br />{" "}
                  <span>at your door</span>
                </h1>
                {/*  */}
                <p className="hero-content text-[1.2rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dolores quasi deleniti doloribus enim voluptatem aut sed fugit
                  laborum adipisci?
                </p>
                {/*  */}
                <div className="hero-btns flex items-center gap-5 mt-3">
                  <button className="order-btn flex items-center justify-between hover:bg-sky-700 duration-300">
                    Order <i class="ri-arrow-right-line"></i>
                  </button>
                  {/*  */}
                  <button className="all-food-btns">
                    <Link to={"/foods"}> See all Foods </Link>
                  </button>
                  {/*  */}
                </div>
                {/*  */}
                <div className="hero_service flex items-center mt-5 gap-5">
                  <p className="flex items-center gap-2 text-sky-800 font-bold ">
                    <span className="shipping_icon text-white text-[1.4rem] w-[30px] h-[30px] rounded-full bg-red-600 flex items-center justify-center p-[1.1rem]">
                      {" "}
                      <i class="ri-car-line"></i>{" "}
                    </span>
                    No Shipping Charge
                  </p>
                  <p className="flex items-center gap-2 text-sky-800 font-bold">
                    <span className="shipping_icons text-white font-bold text-[1.4rem] w-[30px] h-[30px] rounded-full bg-red-600 flex items-center justify-center p-[1.1rem]">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            {/*  */}
            <Col lg="6" md="6">
              <div className="hero_img">
                <img
                  src={heroImg}
                  alt="Hero"
                  className="w-full h-screen object-contain"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>
      {/*  */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center p-[1rem] mt-[2rem] mb-[2rem]">
              <h5 className="feature_subtitle text-red-500 font-bold">
                What we serve
              </h5>
              <h2 className="text-[1.5rem] font-bold feature_title">
                Just sit back at home
              </h2>
              <h2 className="text-[1.5rem] font-bold feature_title">
                We will{" "}
                <span className="text-red-600 font-bold"> take care </span>
              </h2>
              <p className="feature_text">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Nemo quo hic itaque molestiae, inventore asperiores!
              </p>
              <p className="feature_text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Dignissimos et sapiente nobis maiores cum pariatur.
              </p>
            </Col>
            {featureDate.map((item, index) => (
              <Col
                lg="4"
                md="4"
                sm="4"
                key={index}
                className="mt-2 p-[1.6rem] mb-4"
              >
                <div className="feature_items  text-center ">
                  <img
                    src={item.imgUrl}
                    alt="Quick"
                    className="w-[80px] h-[80px] ml-40 mb-2 img_icons feature_img"
                  />
                  <h5 className="font-bold text-[1.3rem] mb-2">
                    {item.title}{" "}
                  </h5>
                  <p className="font-[600]"> {item.desc} </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/*  */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="text-center font-bold text-2xl p-9">
                Popular Foods
              </h2>
            </Col>

            <Col lg="12">
              <div className="food-category flex items-center justify-center p-4">
                <button
                  className={`all_btn text-sky-700 text-[1rem] font-bold ${
                    category == "All" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("All")}
                >
                  All
                </button>
                <button
                  className={`flex items-center ${
                    category == "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg02} alt="" />
                </button>

                <button
                  className={`flex items-center ${
                    category == "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg01} alt="" />
                </button>

                <button
                  className={`flex items-center ${
                    category == "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                </button>
              </div>
            </Col>
            {allProduct.map((item) => (
              <Col lg="3" md="3" key={item.id} className="p-2 mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="mb-4 p-[2rem] why_choose">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={location} alt="why-tasty-treat" className="w-full" />
            </Col>

            <Col lg="6" md="6">
              <div className="why_tasty-treat p-4 mb-4">
                <h2 className="text-[1.5rem] font-bold text-center mb-4">
                  Why Tasty Treat?
                </h2>
                <p className="flex items-center gap-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis illo cupiditate quidem veritatis possimus?
                </p>
                <ListGroup>
                  <ListGroupItem>
                    <p className="flex items-center gap-2">
                      <i class="ri-checkbox-circle-line font-bold text-[1.5rem]"></i>{" "}
                      Fresh and tasty
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates, dolore.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p className="flex items-center gap-2">
                      <i class="ri-checkbox-circle-line font-bold text-[1.5rem]"></i>{" "}
                      Quality Support
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates, dolore.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p>
                      <i class="ri-checkbox-circle-line font-bold text-[1.5rem]"></i>{" "}
                      Order from any location
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates, dolore.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col
              lg="12"
              md="12"
              className="text-center rounded shadow-blue-200 mb-5 text-[30px] font-bold bg-sky-400 -mt-7 p-4"
            >
              <h2 className="text-white">Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="4" md="4" key={item.id} className="mb-20 p-2">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/*  */}
      <section className="p-4">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div>
                <h5 className="text-[1.5rem] font-[600] mb-4">Testimonial</h5>
                <h2 className="text-[2rem] font-bold mb-4">
                  What our <span className="text-red-500 font-[700]">Customer</span> <span>are saying</span>
                </h2>
                <p className="text-[1.1rem] text-gray-500 font-[500]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  pariatur repellat beatae non laboriosam? Temporibus obcaecati,
                  tenetur tempora assumenda laborum similique ratione cumque
                  sunt magni, sed quam in nobis explicabo.
                </p>
                <TestimonialSider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={network} alt="Netword" className="w-full" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
