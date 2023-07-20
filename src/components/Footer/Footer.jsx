import React from 'react'
import { Link } from 'react-router-dom';
import payment from '../../assets/images/payment-logos.png';
import './Footer.css';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="items">
                <h2 className='tittle'>Category</h2>
                <Link className='link' to="/product/1">Women</Link>
                <Link className='link' to="/product/2">Men</Link>
                <Link className='link' to="/product/3">Shoes</Link>
                <Link className='link' to="/product/4">Accesories</Link>
                <Link className='link' to="/product/5">New Arrivals</Link>
            </div>
            <div className="items">
                <h2 className='tittle'>Links</h2>
                <Link className='link' to="/product/1">FAQ</Link>
                <Link className='link' to="/product/2">Pages</Link>
                <Link className='link' to="/product/3">Stores</Link>
                <Link className='link' to="/product/4">Compare</Link>
                <Link className='link' to="/product/5">Cookies</Link>
            </div>
            <div className="items">
                <h2 className='tittle'>About</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vitae omnis quis facere ut explicabo similique aut! Ullam laborum hic necessitatibus! Voluptatem itaque velit ex.</p>
            </div>
            <div className="items">
                <h2 className='tittle'>Contact</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vitae omnis quis facere ut explicabo similique aut! Ullam laborum hic necessitatibus! Voluptatem itaque velit ex.</p>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <h2 className="logo">Option Store</h2>
                <span className='copyright'>&copy; copyright 2023.All Rights Reserved</span>
            </div>
            <div className="right">
                <img className='payment' src={payment} alt="payment" />
            </div>
        </div>
    </div>
  )
}

export default Footer