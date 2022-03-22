import React from 'react';
import './Cartdetails.css'

const Cartdetails = (props) => {
    const {name}=props.product;
    return (
        <div>
            <div>
               
            <h5 className="product-name"><li>{name}</li></h5>
            </div>
            
        </div>
    );
};

export default Cartdetails;