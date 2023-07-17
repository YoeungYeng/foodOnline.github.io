import { Container } from "reactstrap";
import React, { useEffect, useRef } from "react";
import logo from "../../assets/Image/logo.png";
import { NavLink, Link } from "react-router-dom";
import "../../style/header.css";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'

const navLink = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Food",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headRef = useRef(null);
  const dispatch = useDispatch()

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  const totalQuantity = useSelector(state=> state.cart.totalQuantity)
  const toggleCart = () =>{
    dispatch(cartUiActions.toggle())
  }

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      if(document.body.scrollTop || document.documentElement.scrollTop){
        headRef.current.classList.add('header_shrink')
      }else{
        headRef.current.classList.remove('header_shrink')
      }
    })
  },[])
  

  return (
    <header className="header" ref={headRef}>
      <Container>
        <div className="nav_wrapper flex items-center justify-between">
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              className="w-[60px] h-[60px] rounded-full"
            />
            <h5>Group A5</h5>
          </div>
          {/* ------<< Menu >>------ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu flex items-center gap-3">
              {navLink.map((itme, index) => (
                <NavLink
                  to={itme.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active_menu" : ""
                  }
                >
                  {" "}
                  {itme.display}{" "}
                </NavLink>
              ))}
            </div>
          </div>
          {/* nav right */}
          <div className="nav_right flex items-center gap-3">
            <span className="cart_icons" onClick={toggleCart}>
              <i class="ri-shopping-cart-line"></i>
              <span className="cart_badge"> {totalQuantity} </span>
            </span>
            {/*  */}
            <span className="user">
              <Link to={"/login"}>
                {" "}
                <i class="ri-file-user-fill"></i>{" "}
              </Link>
            </span>
            {/*  */}
            <span className="moblie_menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
