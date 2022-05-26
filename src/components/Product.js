import React from 'react'
import { useStateValue } from './StateProvider'
import "./product.css"


const Product = ({id,tittle,prize,rating,img}) => {
  const [{basket},dispatch]=useStateValue();
  const addtobasket=()=>{
    console.log("this is basket",basket)
    dispatch({
        type:'ADD-TO-BASKET',
        item:{
          id:id,
          tittle:tittle,
          img:img,
          prize:prize,
          rating:rating
        }
    })

  }
  return (
    <div className='product'>
      <div className="prod-info">
          <p>{tittle}</p>
          <p className="prod-prize">
              <small>₹</small>
              <strong>{prize}</strong>
            </p>
      <div className="prod-rating">
          
            {Array (rating).fill().map((_, i)=>(
              <p>⭐</p>
              ))}
          
      </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addtobasket}>Add to Cart</button>
    </div>
  )
}

export default Product
