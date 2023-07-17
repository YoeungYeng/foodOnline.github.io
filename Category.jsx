import React from "react";
import { Container, Row, Col } from "reactstrap";
import imgBox1 from "../../../assets/Image/category-01.png";
import imgBox2 from "../../../assets/Image/category-02.png";
import imgBox3 from "../../../assets/Image/category-03.png";
import imgBox4 from "../../../assets/Image/category-04.png";
import "../../../style/category.css";

const categoryDate = [
  {
    display: "Fast food",
    Imgurl: imgBox1,
  },
  {
    display: "Pizza",
    Imgurl: imgBox2,
  },
  {
    display: "Cambodia Food",
    Imgurl: imgBox3,
  },
  {
    display: "Row Meat",
    Imgurl: imgBox4,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryDate.map((item, index) => (
          <Col key={index} lg='4' md='4' sm='6' xs='6'>
            <div className="category_items flex mb-4 items-center gap-4 bg-cyan-500 shadow-cyan-500/50 rounded-[1rem] p-[1rem] cursor-pointer hover:bg-sky-400 duration-500 text-[1.2rem] text-white font-bold">
              <img src={item.Imgurl} alt="Fast Food" />
              <h6> {item.display} </h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
