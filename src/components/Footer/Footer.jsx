import React from 'react'
import { Link } from 'react-router-dom';
import payment from '../../assets/images/payment-logos.png';
import './Footer.css';


const Footer = () => {
  return (
    <div className='w-full flex flex-col px-8 py-4'>
        <div className="flex pb-10 flex-col md:flex-row">
            <div className="basis-1/4 flex flex-col">
                <h2 className='text-xl font-bold'>Category</h2>
                <Link className='link' to="/product/1">Women</Link>
                <Link className='link' to="/product/2">Men</Link>
                <Link className='link' to="/product/3">Shoes</Link>
                <Link className='link' to="/product/4">Accesories</Link>
                <Link className='link' to="/product/5">New Arrivals</Link>
            </div>
            <div className="basis-1/4 sm:basis-1/2 flex flex-col">
                <h2 className='text-xl font-bold'>Links</h2>
                <Link className='link' to="/product/1">FAQ</Link>
                <Link className='link' to="/product/2">Pages</Link>
                <Link className='link' to="/product/3">Stores</Link>
                <Link className='link' to="/product/4">Compare</Link>
                <Link className='link' to="/product/5">Cookies</Link>
            </div>
            <div className="basis-1/4 flex flex-col">
                <h2 className='text-xl font-bold'>About</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vitae omnis quis facere ut explicabo similique aut! Ullam laborum hic necessitatibus! Voluptatem itaque velit ex.</p>
            </div>
            <div className="basis-1/4 flex flex-col">
                <h2 className='text-xl font-bold'>Contact</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vitae omnis quis facere ut explicabo similique aut! Ullam laborum hic necessitatibus! Voluptatem itaque velit ex.</p>
            </div>
        </div>
        <div className="flex items-center justify-between flex-col">
            <div className="w-full flex justify-center">
                <img className='min-w-[300px] w-96' src={payment} alt="payment" />
            </div>
            <div className="flex justify-center items-center flex-col md:flex-row">
                <h2 className="text-center text-2xl font-bold text-blue-500">Option Store</h2>
                <span className='lex text-center items-center'>&copy; copyright 2023.All Rights Reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer