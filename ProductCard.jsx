import React from "react";
// import productImg from '../../../../assets/Image/product_01.jpg'
// import products from '../../../../assets/fake-data/product'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/shopping-cart/carSlice";

const ProductCard = (props) => {
  const { id, title, image1, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image1,
        price,
      })
    );
  };
  return (
    <div className="product_item border-[1px] mt mb-2 rounded-e-xl shadow-red-400 p-2">
      <div className="product_img flex justify-center items-center">
        <img src={image1} alt="product-img" className="w-40 mt-2" />
      </div>
      {/*  */}
      <div className="product_content">
        <h5 className="font-bold text-center text-[1.3rem]">
          {" "}
          <Link to={`/foods/${id}`}> {title} </Link>{" "}
        </h5>
        <div className="flex justify-between mt-2">
          <span className="product_price font-bold text-[1.4rem] text-red-500">
            ${price}{" "}
          </span>
          <button
            className="addToCart_btn border-[1px] p-2 rounded bg-red-600 text-white font-bold hover:bg-sky-500 duration-700"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
