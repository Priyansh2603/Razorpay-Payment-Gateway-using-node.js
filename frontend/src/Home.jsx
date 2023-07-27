import React from 'react';
// import { Card } from '@chakra-ui/react';
import {Box, Stack} from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";
import mainlogo from "./img/logo.png";
import bannerimage from "./img/banner/banner-img.png";
import fi1 from "./img/features/f-icon1.png";
import fi2 from "./img/features/f-icon2.png";
import fi3 from "./img/features/f-icon3.png";
import fi4 from "./img/features/f-icon4.png";
import c1 from "./img/category/c1.jpg";
import c2 from "./img/category/c2.jpg";
import c3 from "./img/category/c3.jpg";
import c4 from "./img/category/c4.jpg";
import c5 from "./img/category/c5.jpg";

const Home=()=> {
    const checkoutHandler=async(amount,model,Item_id) => {
        const { data: {key} } = await axios.get("http://localhost:8000/api/getkey");
        const { data: {order} } = await axios.post("http://localhost:8000/api/checkout",{amount,model,Item_id});
        // console.log(data)
        // console.log(window)
        console.log(order)
        const option = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Shoeping",
            description: "Shoe web",
            image: "",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: `http://localhost:8000/api/paymentveri?item=${model}`,
            model:model,
            Item_id: Item_id,
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        alert(option.Item_id)
        // Object.assign(order,{4:{model:model}})
        alert(model)
        const razor = new window.Razorpay(option);
        // document.getElementById('rzp-button1').onclick=function(e){
            razor.open()
        }
    
  return (
    <div >
        <body>


<header  className="header_area sticky-header">
    <div  className="main_menu">
        <nav  className="navbar navbar-expand-lg navbar-light main_box">
            <div  className="container">
                
                <a  className="navbar-brand logo_h" href="/"><img src={mainlogo} alt="Not found" /></a>
                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span  className="icon-bar"></span>
                    <span  className="icon-bar"></span>
                    <span  className="icon-bar"></span>
                </button>
               
                <div  className="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul  className="nav navbar-nav menu_nav ml-auto">
                        <li  className="nav-item active"><a  className="nav-link" href="/">Home</a></li>
                        <li  className="nav-item submenu dropdown">
                            <a  href="/"  className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                             aria-expanded="false">Shop</a>
                            <ul  className="dropdown-menu">
                                <li  className="nav-item"><a  className="nav-link" href="category.html">Shop Category</a></li>
                                <li  className="nav-item"><a  className="nav-link" href="single-product.html">Product Details</a></li>
                                <li  className="nav-item"><a  className="nav-link" href="checkout.html">Product Checkout</a></li>
                                <li  className="nav-item"><a  className="nav-link" href="cart.html">Shopping Cart</a></li>
                                <li  className="nav-item"><a  className="nav-link" href="confirmation.html">Confirmation</a></li>
                            </ul>
                        </li>
                        <li  className="nav-item submenu dropdown">
                            <a  href="/"  className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                             aria-expanded="false">Blog</a>
                            <ul  className="dropdown-menu">
                                <li  className="nav-item"><a  className="nav-link" href="blog.html">Blog</a></li>
                                <li  className="nav-item"><a  className="nav-link" href="single-blog.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li  className="nav-item submenu dropdown">
                            <a  href="/"  className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                             aria-expanded="false">Pages</a>
                            <ul  className="dropdown-menu">
                                <li  className="nav-item"><a  className="nav-link" href="login.html">Login</a></li>
                                <li  className="nav-item"><a  className="nav-link" href="tracking.html">Tracking</a></li>
                                <li  className="nav-item"><a  className="nav-link" href="elements.html">Elements</a></li>
                            </ul>
                        </li>
                        <li  className="nav-item"><a  className="nav-link" href="contact.html">Contact</a></li>
                    </ul>
                    <ul  className="nav navbar-nav navbar-right">
                        <li  className="nav-item"><a  href="/"  className="cart"><span  className="ti-bag"></span></a></li>
                        <li  className="nav-item">
                            <button  className="search"><span  className="lnr lnr-magnifier" id="search"></span></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div  className="search_input" id="search_input_box">
        <div  className="container">
            <form  className="d-flex justify-content-between">
                <input type="text"  className="form-control" id="search_input" placeholder="Search Here"/>
                <button type="submit"  className="btn"></button>
                <span  className="lnr lnr-cross" id="close_search" title="Close Search"></span>
            </form>
        </div>
    </div>
</header>


<section  className="banner-area">
    <div  className="container">
        <div  className="row fullscreen align-items-center justify-content-start">
            <div  className="col-lg-12">
                <div  className="active-banner-slider owl-carousel">
                    
                    <div  className="row single-slide align-items-center d-flex">
                        <div  className="col-lg-5 col-md-6">
                            <div  className="banner-content">
                                <h1>Nike New <br/>Collection!</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                <div  className="add-bag d-flex align-items-center">
                                    <a  className="add-btn"  href="/"><span  className="lnr lnr-cross"></span></a>
                                    <span  className="add-text text-uppercase">Add to Bag</span>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-7">
                            <div  className="banner-img">
                                <img  className="img-fluid" src={bannerimage} alt=""/>
                            </div>
                        </div>
                    </div>
                
                    {/* <div  className="row single-slide">
                        <div  className="col-lg-5">
                            <div  className="banner-content">
                                <h1>Nike New <br/>Collection!</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                <div  className="add-bag d-flex align-items-center">
                                    <a  className="add-btn"  href="/"><span  className="lnr lnr-cross"></span></a>
                                    <span  className="add-text text-uppercase">Add to Bag</span>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-7">
                            <div  className="banner-img">
                                <img  className="img-fluid" src={bannerimage} alt=""/>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</section>
<section  className="features-area section_gap">
    <div  className="container">
        <div  className="row features-inner">
           
            <div  className="col-lg-3 col-md-6 col-sm-6">
                <div  className="single-features">
                    <div  className="f-icon">
                        <img src={fi1}  alt=""/>
                    </div>
                    <h6>Free Delivery</h6>
                    <p>Free Shipping on all order</p>
                </div>
            </div>
       
            <div  className="col-lg-3 col-md-6 col-sm-6">
                <div  className="single-features">
                    <div  className="f-icon">
                        <img src={fi2}  alt=""/>
                    </div>
                    <h6>Return Policy</h6>
                    <p>Free Shipping on all order</p>
                </div>
            </div>
           
            <div  className="col-lg-3 col-md-6 col-sm-6">
                <div  className="single-features">
                    <div  className="f-icon">
                        <img src={fi3}  alt=""/>
                    </div>
                    <h6>24/7 Support</h6>
                    <p>Free Shipping on all order</p>
                </div>
            </div>
            
            <div  className="col-lg-3 col-md-6 col-sm-6">
                <div  className="single-features">
                    <div  className="f-icon">
                        <img src={fi4}  alt=""/>
                    </div>
                    <h6>Secure Payment</h6>
                    <p>Free Shipping on all order</p>
                </div>
            </div>
        </div>
    </div>
</section>
 

 
<section  className="category-area">
    <div  className="container">
        <div  className="row justify-content-center">
            <div  className="col-lg-8 col-md-12">
                <div  className="row">
                    <div  className="col-lg-8 col-md-8">
                        <div  className="single-deal">
                            <div  className="overlay"></div>
                            <img  className="img-fluid w-100" src={c1}  alt=""/>
                            <a href={c1}  className="img-pop-up" target="_blank">
                                <div  className="deal-details">
                                    <h6  className="deal-title">Sneaker for Sports</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4">
                        <div  className="single-deal">
                            <div  className="overlay"></div>
                            <img  className="img-fluid w-100" src={c2}  alt=""/>
                            <a href={c2}  className="img-pop-up" target="_blank">
                                <div  className="deal-details">
                                    <h6  className="deal-title">Sneaker for Sports</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4">
                        <div  className="single-deal">
                            <div  className="overlay"></div>
                            <img  className="img-fluid w-100" src={c3}  alt=""/>
                            <a href={c3}  className="img-pop-up" target="_blank">
                                <div  className="deal-details">
                                    <h6  className="deal-title">Product for Couple</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div  className="col-lg-8 col-md-8">
                        <div  className="single-deal">
                            <div  className="overlay"></div>
                            <img  className="img-fluid w-100" src={c4}  alt=""/>
                            <a href={c4}  className="img-pop-up" target="_blank">
                                <div  className="deal-details">
                                    <h6  className="deal-title">Sneaker for Sports</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="col-lg-4 col-md-6">
                <div  className="single-deal">
                    <div  className="overlay"></div>
                    <img  className="img-fluid w-100" src={c5}  alt=""/>
                    <a href={c5}  className="img-pop-up" target="_blank">
                        <div  className="deal-details">
                            <h6  className="deal-title">Sneaker for Sports</h6>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
 

{/* <!-- start product Area --> */}
<section  className="owl-carousel active-product-area section_gap">
    {/* <!-- single product slide --> */}
    <div  className="single-product-slider">
        <div  className="container">
            <div  className="row justify-content-center">
                <div  className="col-lg-6 text-center">
                    <div  className="section-title">
                        <h1>Latest Products</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                            magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div  className="row">
                {/*  */}
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p1.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p2.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p3.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">
                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p4.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p5.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p6.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p7.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p8.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- single product slide --> */}
    <div  className="single-product-slider">
        <div  className="container">
            <div  className="row justify-content-center">
                <div  className="col-lg-6 text-center">
                    <div  className="section-title">
                        <h1>Coming Products</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                            magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div  className="row">
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p6.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p8.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p3.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p5.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p1.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p4.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p1.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div  className="col-lg-3 col-md-6">
                    <div  className="single-product">
                        <img  className="img-fluid" src="img/product/p8.jpg"  alt=""/>
                        <div  className="product-details">
                            <h6>addidas New Hammer sole
                                for Sports person</h6>
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <div  className="prd-bottom">

                                <a  href="/"  className="social-info">
                                    <span  className="ti-bag"></span>
                                    <p  className="hover-text">add to bag</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-heart"></span>
                                    <p  className="hover-text">Wishlist</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-sync"></span>
                                    <p  className="hover-text">compare</p>
                                </a>
                                <a  href="/"  className="social-info">
                                    <span  className="lnr lnr-move"></span>
                                    <p  className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- end product Area --> */}

{/* <!-- Start exclusive deal Area --> */}
<section  className="exclusive-deal-area">
    <div  className="container-fluid">
        <div  className="row justify-content-center align-items-center">
            <div  className="col-lg-6 no-padding exclusive-left">
                <div  className="row clock_sec clockdiv" id="clockdiv">
                    <div  className="col-lg-12">
                        <h1>Exclusive Hot Deal Ends Soon!</h1>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div  className="col-lg-12">
                        <div  className="row clock-wrap">
                            <div  className="col clockinner1 clockinner">
                                <h1  className="days">150</h1>
                                <span  className="smalltext">Days</span>
                            </div>
                            <div  className="col clockinner clockinner1">
                                <h1  className="hours">23</h1>
                                <span  className="smalltext">Hours</span>
                            </div>
                            <div  className="col clockinner clockinner1">
                                <h1  className="minutes">47</h1>
                                <span  className="smalltext">Mins</span>
                            </div>
                            <div  className="col clockinner clockinner1">
                                <h1  className="seconds">59</h1>
                                <span  className="smalltext">Secs</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a  href="/"  className="primary-btn">Shop Now</a>
            </div>
            <div  className="col-lg-6 no-padding exclusive-right">
                <div  className="active-exclusive-product-slider">
                    {/* <!-- single exclusive carousel --> */}
                    <div  className="single-exclusive-slider">
                        <img  className="img-fluid" src="img/product/e-p1.png"  alt=""/>
                        <div  className="product-details">
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <h4>addidas New Hammer sole
                                for Sports person</h4>
                            <div  className="add-bag d-flex align-items-center justify-content-center">
                                <a  className="add-btn"  href="/"><span  className="ti-bag"></span></a>
                                <span  className="add-text text-uppercase">Add to Bag</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- single exclusive carousel --> */}
                    <div  className="single-exclusive-slider">
                        <img  className="img-fluid" src="img/product/e-p1.png"  alt=""/>
                        <div  className="product-details">
                            <div  className="price">
                                <h6>$150.00</h6>
                                <h6  className="l-through">$210.00</h6>
                            </div>
                            <h4>addidas New Hammer sole
                                for Sports person</h4>
                            <div  className="add-bag d-flex align-items-center justify-content-center">
                                <a  className="add-btn"  href="/"><span  className="ti-bag"></span></a>
                                <span  className="add-text text-uppercase">Add to Bag</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End exclusive deal Area --> */}

{/* <!-- Start brand Area --> */}
<section  className="brand-area section_gap">
    <div  className="container">
        <div  className="row">
            <a  className="col single-img"  href="/">
                <img  className="img-fluid d-block mx-auto" src="img/brand/1.png"  alt=""/>
            </a>
            <a  className="col single-img"  href="/">
                <img  className="img-fluid d-block mx-auto" src="img/brand/2.png"  alt=""/>
            </a>
            <a  className="col single-img"  href="/">
                <img  className="img-fluid d-block mx-auto" src="img/brand/3.png"  alt=""/>
            </a>
            <a  className="col single-img"  href="/">
                <img  className="img-fluid d-block mx-auto" src="img/brand/4.png"  alt=""/>
            </a>
            <a  className="col single-img"  href="/">
                <img  className="img-fluid d-block mx-auto" src="img/brand/5.png"  alt=""/>
            </a>
        </div>
    </div>
</section>
{/* <!-- End brand Area --> */}

{/* <!-- Start related-product Area --> */}
<section  className="related-product-area section_gap_bottom">
    <div  className="container">
        <div  className="row justify-content-center">
            <div  className="col-lg-6 text-center">
                <div  className="section-title">
                    <h1>Deals of the Week</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.</p>
                </div>
            </div>
        </div>
        <div  className="row">
            <div  className="col-lg-9">
                <div  className="row">
                    <div  className="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div  className="single-related-product d-flex">
                            <a  href="/"><img src="img/r1.jpg"  alt=""/></a>
                            <div  className="desc">
                                <a  href="/"  className="title">Black lace Heels</a>
                                <div  className="price">
                                    <h6>$189.00</h6>
                                    <h6  className="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div  className="single-related-product d-flex">
                            <a  href="/"><img src="img/r2.jpg"  alt=""/></a>
                            <div  className="desc">
                                <a  href="/"  className="title">Black lace Heels</a>
                                <div  className="price">
                                    <h6>$189.00</h6>
                                    <h6  className="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div  className="single-related-product d-flex">
                            <a  href="/"><img src="img/r3.jpg"  alt=""/></a>
                            <div  className="desc">
                                <a  href="/"  className="title">Black lace Heels</a>
                                <div  className="price">
                                    <h6>$189.00</h6>
                                    <h6  className="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div  className="single-related-product d-flex">
                            <a  href="/"><img src="img/r5.jpg"  alt=""/></a>
                            <div  className="desc">
                                <a  href="/"  className="title">Black lace Heels</a>
                                <div  className="price">
                                    <h6>$189.00</h6>
                                    <h6  className="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div  className="single-related-product d-flex">
                            <a  href="/"><img src="img/r6.jpg"  alt=""/></a>
                            <div  className="desc">
                                <a  href="/"  className="title">Black lace Heels</a>
                                <div  className="price">
                                    <h6>$189.00</h6>
                                    <h6  className="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-6 mb-20">
                        <div  className="single-related-product d-flex">
                            <a  href="/"><img src="img/r7.jpg"  alt=""/></a>
                            <div  className="desc">
                                <a  href="/"  className="title">Black lace Heels</a>
                                <div  className="price">
                                    <h6>$189.00</h6>
                                    <h6  className="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-6">
                        <div  className="single-related-product d-flex">
                            <a  href="/"><img src="img/r9.jpg"  alt=""/></a>
                            <div  className="desc">
                                <a  href="/"  className="title">Black lace Heels</a>
                                <div  className="price">
                                    <h6>$189.00</h6>
                                    <h6  className="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-6">
                        <div  className="single-related-product d-flex">
                            <a  href="/"><img src="img/r10.jpg"  alt=""/></a>
                            <div  className="desc">
                                <a  href="/"  className="title">Black lace Heels</a>
                                <div  className="price">
                                    <h6>$189.00</h6>
                                    <h6  className="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-6">
                        <div  className="single-related-product d-flex">
                            <a  href="/"><img src="img/r11.jpg"  alt=""/></a>
                            <div  className="desc">
                                <a  href="/"  className="title">Black lace Heels</a>
                                <div  className="price">
                                    <h6>$189.00</h6>
                                    <h6  className="l-through">$210.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="col-lg-3">
                <div  className="ctg-right">
                    <a  href="/" target="_blank">
                        <img  className="img-fluid d-block mx-auto" src="img/category/c5.jpg"  alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End related-product Area -->

<!-- start footer Area --> */}
<footer  className="footer-area section_gap">
    <div  className="container">
        <div  className="row">
            <div  className="col-lg-3  col-md-6 col-sm-6">
                <div  className="single-footer-widget">
                    <h6>About Us</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
                        magna aliqua.
                    </p>
                </div>
            </div>
            <div  className="col-lg-4  col-md-6 col-sm-6">
                <div  className="single-footer-widget">
                    <h6>Newsletter</h6>
                    <p>Stay update with our latest</p>
                    <div  className="" id="mc_embed_signup">

                        <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                         method="get"  className="form-inline">

                            <div  className="d-flex flex-row">

                                <input  className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
                                 required="" type="email"/>


                                <button  className="click-btn btn btn-default"><i  className="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                <div style={{position: "absolute", left: "-5000px;"}}>
                                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"/>
                                </div>

                                {/* <!-- <div  className="col-lg-4 col-md-4">
                                            <button  className="bb-btn btn"><span  className="lnr lnr-arrow-right"></span></button>
                                        </div>  --> */}
                            </div>
                            <div  className="info"></div>
                        </form>
                    </div>
                </div>
            </div>
            <div  className="col-lg-3  col-md-6 col-sm-6">
                <div  className="single-footer-widget mail-chimp">
                    <h6  className="mb-20">Instragram Feed</h6>
                    <ul  className="instafeed d-flex flex-wrap">
                        <li><img src="img/i1.jpg"  alt=""/></li>
                        <li><img src="img/i2.jpg"  alt=""/></li>
                        <li><img src="img/i3.jpg"  alt=""/></li>
                        <li><img src="img/i4.jpg"  alt=""/></li>
                        <li><img src="img/i5.jpg"  alt=""/></li>
                        <li><img src="img/i6.jpg"  alt=""/></li>
                        <li><img src="img/i7.jpg"  alt=""/></li>
                        <li><img src="img/i8.jpg"  alt=""/></li>
                    </ul>
                </div>
            </div>
            <div  className="col-lg-2 col-md-6 col-sm-6">
                <div  className="single-footer-widget">
                    <h6>Follow Us</h6>
                    <p>Let us be social</p>
                    <div className="footer-social d-flex align-items-center">
                        <a  href="/"><i  className="fa fa-facebook"></i></a>s
                        <a  href="/"><i  className="fa fa-twitter"></i></a>
                        <a  href="/"><i  className="fa fa-dribbble"></i></a>
                        <a  href="/"><i  className="fa fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div  className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
            <p  className="footer-text m-0">
</p>
        </div>
    </div>
</footer>
{/* <!-- End footer Area --> */}

<script src="js/vendor/jquery-2.2.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
 crossorigin="anonymous"></script>
<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/jquery.ajaxchimp.min.js"></script>
<script src="js/jquery.nice-select.min.js"></script>
<script src="js/jquery.sticky.js"></script>
<script src="js/nouislider.min.js"></script>
<script src="js/countdown.js"></script>
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
{/* <!--gmaps Js--> */}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
<script src="js/gmaps.min.js"></script>
<script src="js/main.js"></script>
</body>
        <Box>
            <Stack h={ "100vh " } alignItems="center" justifyContent="center" direction={['column','row']}>
                <div >
                <Card amount={50000} Item_id={"Adidas-2563"} model={"Adidas Sneaker"} img = {"https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} checkoutHandler= {checkoutHandler} />
                </div>
                <div >
                <Card amount={1599} Item_id={"Puma-9563"} model={"Puma"} img = {"https://images.unsplash.com/photo-1608667508764-33cf0726b13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} checkoutHandler={checkoutHandler}/>
                </div>
                <div >
                <Card amount={1599} Item_id={"Nike-3987"} model={"Nike"} img = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CvxOwz_njx9P7nB2U9mHv0_F5Q5VMaITlw&usqp=CAU"} checkoutHandler={checkoutHandler}/>
                </div>
            </Stack>
        </Box>
    </div>
  )
}
export default Home;
