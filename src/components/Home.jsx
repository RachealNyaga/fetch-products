
import React from 'react'
import Smartphone from './Smartphone.jpg'
import Laptop from './Laptop.jpg'
import Fragrances from './Fragrances.jpg'
import Skincare from './Skincare.jpg'
import Groceries from './Groceries.jpg'
import Home from './Home.jpg'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <section className="welcome-section">
      <h1>Welcome to our online store!</h1>
      <p>We offer a wide range of products including:</p>
      <div className="products-wrapper">
        <div className='image'> 
          <li><Link to={"/products/smartphones"}>Smartphones </Link></li>
          <img src  ={Smartphone} alt="" />
        </div>
        <div className='image'> 
        <li><Link to={"/products/laptops"}>Laptops </Link></li>
          <img src  ={Laptop} alt="" />
        </div>
        <div className='image'> 
        <li><Link to={"/products/fragrances"}>Fragrances </Link></li>
          <img src  ={Fragrances} alt="" />
        </div>
       <div className='image'> 
       <li><Link to={"/products/skincare"}>Skincare </Link></li>
        <img src  ={Skincare} alt="" />
       </div>
       <div className='image'> 
       <li><Link to={"/products/groceries"}>Groceries </Link></li>
        <img src  ={Groceries} alt="" />
       </div>
      <div className='image'> 
      <li><Link to={"/products/home-decoration"}>Home Decoration </Link></li>
        <img src  ={Home} alt="" />
      </div>
      </div>

    </section>
  );
};




export default Welcome