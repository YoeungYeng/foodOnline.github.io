import React from "react";
import { ListGroupItem } from "reactstrap";
// import productImg from "../../../../assets/Image/product_01.jpg";
import '../../../../style/cart-item.css'
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/shopping-cart/carSlice";

const CartItems = ({item}) => {
  const {id, title, price, image1, quality, totalPrice} = item

  const dispatch = useDispatch()
  // Increment ++
  const incrementItem = () =>{
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image1
    }))
  }
  // decrement
  const decrement = () =>{
    dispatch(cartActions.removeItem(id))
  }
  // delete
  const deleteItems = () =>{
    dispatch(cartActions.deleteItems(id))
  }
  return (
    <ListGroupItem className="border-[0px]">
      <div className="cart_product-info flex gap-4 items-center justify-between">
        <img src={image1} alt="" />

        <div className="cart_product-info flex w-full items-center justify-between  gap-4">
          <div>
            <h6 className="cart_product-title">{title}</h6>
            <p className="cart_product-price">
              {quality}x <span> ${totalPrice} </span>
            </p>
            <div className="flex items-center gap-4  p-2 rounded font-[500] increase_decrease-btn">
                <span className="increase-btn" onClick={incrementItem}> <i class="ri-add-line"></i> </span>
                <span> {quality} </span>
                <span className="decrease-btn" onClick={decrement}> <i class="ri-subtract-line"></i> </span>
            </div>
            
          </div>
        <span onClick={deleteItems} className="delete-btn text-white bg-sky-400 w-[20px] h-[20px] rounded-[50%] flex items-center justify-center cursor-pointer"> 
            <i class="ri-close-line"></i> 
        </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItems;
