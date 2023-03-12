import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context";

function Cart() {
  const { cart } = useContext(ProductsContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;

    cart.cartItems.forEach(item => {
      total = total + item.price
      setTotalAmount(total)
    })
  }, [cart])
  
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    navigate(`/products/${id}`);
  };

   // remove item
   function removeItem(productId) {
    let cartLength = cart.cartItems.length // get total number of items in cart
    cart.setCart(cart.cartItems.filter((item) => item.id !== productId))
    cartLength --; // remove 1 from cartLength

    if(cartLength == 1) {
      cart.setCart([]); // If only 1 item then clear cart
    }
   }

  return (
    <>
    <div className='productsContainer'>
      {
        cart.cartItems.map((product) => {
           
          return (
            <div className="product" key={product.id}>
              <div
                className="pImg"
                onClick={() => handleNavigation(product.id)}
              >
                <img src={product.image} alt="product " />
              </div>
              <div className="pDetails">
                
                <span>{product.title}</span>
                <span className="price">Price: ${product.price}</span>
              </div>
              <button className='addtoCart' onClick={() => removeItem(product.id)}><i className="fa-solid fa-trash"></i> Remove item</button>
            </div>
          );
        })
      }
    </div>
    {cart.cartItems.length === 0 ? <p>There are no products in your cart</p>: ""}
    <br />
    <strong>Your total cart amount is: $ {totalAmount}</strong>
    </>
  )
}

export default Cart