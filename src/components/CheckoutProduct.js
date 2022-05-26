import React from 'react'
import "./checkoutproduct.css"
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({id,img,prize,tittle,rating}) => {
  const [{basket},dispatch]=useStateValue();
  const removefromcart=()=>{
    dispatch({
      type: 'REMOVE-FROM-BASKET',
      id:id,
    })
  }
  return (
    <div className="cproduct">
      <img className="cprod-img" src={img} alt="" />
      <div className="cprod-info">
          <p className='cprod-tittle'>{tittle}</p>
          <p className='cprod-prize'>
              <small>₹</small>
              <strong>{prize}</strong>
          </p>
          <div className="cprod-rating">
          {Array (rating).fill().map((_, i)=>(
              <p>⭐</p>
              ))}
          </div>
          <button onClick={removefromcart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct
