import React from "react";
import './Navbar.css';
import Flag from '../../assets/images/ind.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-screen h-20 sticky top-0 bg-white z-50">
      <div className="hidden lg:flex justify-between py-4 px-8 text-base items-center">
        <div className="flex flex-row gap-6">
            <div className="flex text-base items-center cursor-pointer hover:text-blue-500 transition">
                <img className="w-6 h-4" src={Flag} alt="flag" />
                <ExpandMoreIcon />
            </div>
            <div className="flex text-base items-center cursor-pointer hover:text-blue-500 transition">
                <span>IDN</span>
                <ExpandMoreIcon />
            </div>
            <div className="flex text-base items-center">
                <Link to="/products/1" className="cursor-pointer hover:text-blue-500 transition">Woman</Link>
            </div>
            <div className="flex text-base items-center">
                <Link to="/products/2" className="cursor-pointer hover:text-blue-500 transition">Man</Link>
            </div>
            <div className="flex text-base items-center">
                <Link to="/products/3" className="cursor-pointer hover:text-blue-500 transition">Children</Link>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <Link to="/" className="text-2xl font-bold uppercase">Option Store</Link>
        </div>
        <div className="flex flex-row gap-6">
            <div className="flex text-base items-center">
                <Link to="/" className="cursor-pointer hover:text-blue-500 transition">Home</Link>
            </div>
            <div className="flex text-base items-center">
            <Link to="/about" className="cursor-pointer hover:text-blue-500 transition">About</Link>
            </div>
            <div className="flex text-base items-center">
            <Link to="/contact" className="cursor-pointer hover:text-blue-500 transition">Contact</Link>
            </div>
            <div className="flex text-base items-center">
            <Link to="/store" className="cursor-pointer hover:text-blue-500 transition">Store</Link>
            </div>
            <div className="flex gap-6 text-gray-700 cursor-pointer items-center">
                <SearchIcon/>
                <PersonIcon/>
                <FavoriteIcon/>
            <div className="relative py-2 px-2">
                <ShoppingCartIcon/>
                <span className="absolute text-white text-sm bg-blue-500 w-4 h-4 rounded-full top-0 right-0 flex items-center justify-center overflow-hidden">0</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
