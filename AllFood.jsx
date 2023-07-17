import React, { useState } from "react";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/category/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/product";
import ProductCart from "../component/UI/category/product_card/ProductCard";
import "../style/all-foods.css";
import "../style/pagination.css"
import ReactPaginate from "react-paginate";

const AllFood = () => {
   // Hook
  const [searchIterm, setSeachItems] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  //
  const searchProduct = products.filter((item) => {
    if (searchIterm.valueOf === "") return item;
    if (item.title.toLowerCase().includes(searchIterm.toLowerCase()))
      return item;
  });
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber( selected );
  };

  return (
    <Helmet title='Food'>
      <CommonSection title="All Foods" />
      {/*  */}
      <section>
        <Container>
          <Row>
            <Col lg="6" sm="6" className="mt-3 mb-4">
              <div className="search-widget flex items-center justify-between w-60">
                <input
                  type="text"
                  placeholder=" I'm looking from..."
                  value={searchIterm}
                  onChange={(e) => setSeachItems(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            {/*  */}
            <Col lg="6" md="6" sm="6" className="mb-4 mt-3">
              <div className="sorting-widget text-end">
                <select>
                  <option>Default</option>
                  <option value="ascending">A-Z</option>
                  <option value="descending">Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="4" key={item.id} className="mb-4">
                <ProductCart item={item} />
              </Col>
            ))}
            <div className="text-center">
              <span className="btn-next-prev">
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel={"Prev"}
                  nextLabel="Next"
                  containerClassName="paginationBttns"
                  
                />
              </span>
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFood;
