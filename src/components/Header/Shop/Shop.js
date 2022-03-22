import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRightToCity, faSackDollar, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cartdetails from "../../Cartdetails/Cartdetails";
import Displayproduct from "../../Displayproduct/Displayproduct";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [addtocart, setAddtocart] = useState([]);
    useEffect(()=>{

        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handler = (product) =>{
      // console.log(product)
      setAddtocart([...addtocart,product])
    }
    // console.log(addtocart)

    const totalPrice = addtocart.reduce((previous, current)=> previous + parseInt(current.price), 0);
  return (
    <div className="shop-container">
      <div className="products-container">
       {
           products.map(product => 
        <Displayproduct 
           product={product} 
           key={product.id}
           handler = {handler}>
            
        </Displayproduct>)
       }
      </div>
     


      <div className="cart-container">
        
        <div className="cart-icon">
           <span id ='dollar-bag'><FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon> <sup id='sup'>{totalPrice}</sup></span>
          <span className="shop-cart"> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> <sup>{addtocart.length}</sup></span>
           </div>


      <div className="product-info">
        <h3>Your Current Product</h3>
      {
          addtocart.map(product =>
            <Cartdetails product={product}></Cartdetails>
           )
        }
      </div>
      </div>
    </div>
  )
};

export default Shop;
