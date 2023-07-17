import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItems from './CartItems'
import { Link } from 'react-router-dom'
import '../../../../style/shopping-cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../../store/shopping-cart/cartUiSlice'

const Carts = () => {

    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const toggleCart = () =>{
        dispatch(cartUiActions.toggle())
    }

  return (
    <div className='cart-container cart-item'>
        <ListGroup className='cart'>
            <div className="cart-close cursor-pointer flex items-center">
                <span onClick={toggleCart}> <i class="ri-close-line"></i> </span>
            </div>
            
            <div className="cart-item-list">
                {
                    cartProducts.length === 0 ? <h6 className='text-center mt-5'>
                        No Item added to the cart
                    </h6>: cartProducts.map((item, index) =>(
                        <CartItems item={item} key={index}/>
                    ))
                }
                 
            </div>

            <div className="cart-bottom mt-4">
                <h6>Subtotal amount: <span>${ totalAmount }</span></h6>
                <button className='bg-sky-600 rounded text-white p-[0.4rem] font-600 hover:bg-red-500 duration-500'>
                    <Link to={'/checkout'}> Checkout </Link> </button>
            </div>
        </ListGroup>
    </div>
  )
}

export default Carts