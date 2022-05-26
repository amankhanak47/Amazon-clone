import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='header'>
      <Link to="/">
      <img className='header-logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      <div className="header-search">
          <input type="text" className="header-search-input" />
          <SearchIcon className='header-search-icon'/>
      </div>
      <div className="header-nav">
      <div className="header-option">
          <span className="optionlineone">Hello Guest</span>
            <Link to="/login">
            <span className="optionlinetwo white">Sign In</span>
            </Link>
          </div>
          <div className="header-option">
          <span className="optionlineone">Returns</span>
            <span className="optionlinetwo">& Orders</span>
          </div>
          <div className="header-option">
          <span className="optionlineone">Your</span>
            <Link to="/">
            <span className="optionlinetwo white">Prime</span>
            </Link>
          </div>
          <div className="header-option-basket">
            <Link to="/checkout">
              <ShoppingCartIcon className='shopcart'/>
              <span className='optionlinetwo shopcart header-basketcount'>{basket?.length}</span>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Header
