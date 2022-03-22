import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import Shop from './Shop/Shop';

const Header = () => {
    return (
        <div>
           <div className="header-container">
               <img src={logo} alt="" />
               <div className="header-content-right">
                <a href="/order">Order</a>
               <a href="/order review"> Order Review</a>
               <a href="/Manage">Manage Inventory</a>
               </div>
           </div>
        
             
                 <Shop></Shop>
             
        </div>
    );
};

export default Header;