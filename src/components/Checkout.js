import React from 'react'
import { useStateValue } from './StateProvider'
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{basket},dispatch]=useStateValue();
  // console.log(basket.id)
  return (
    <div className='checkout'>
      <div className="checkout-left">
        <img className="checkout-add" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Naqia_DW/SummerAppliancesFest_2022/Stripes-1-_PC--_--Extra-coupon.jpg" alt="" />
        <div>
            <h2 className="checkout-tittle">Your shopping Basket</h2>
            {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              tittle={item.tittle}
              img={item.img}
              prize={item.prize}
              rating={item.rating}
              
            />
          ))}
            
        </div>
      </div>
      <div className="checkout-right">
          <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
