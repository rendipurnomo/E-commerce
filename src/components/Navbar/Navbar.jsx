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
    <div className="navbar">
      <div className="nav__wrapper">
        <div className="left">
            <div className="item">
                <img className="flag" src={Flag} alt="flag" />
                <ExpandMoreIcon />
            </div>
            <div className="item">
                <span>IDN</span>
                <ExpandMoreIcon />
            </div>
            <div className="item">
                <Link to="/products/1">Woman</Link>
            </div>
            <div className="item">
                <Link to="/products/2">Man</Link>
            </div>
            <div className="item">
                <Link to="/products/3">Children</Link>
            </div>
        </div>
        <div className="center">
            <Link to="/">Option Store</Link>
        </div>
        <div className="right">
            <div className="item">
                <Link to="/">Home</Link>
            </div>
            <div className="item">
            <Link to="/about">About</Link>
            </div>
            <div className="item">
            <Link to="/contact">Contact</Link>
            </div>
            <div className="item">
            <Link to="/store">Store</Link>
            </div>
            <div className="icons">
                <SearchIcon/>
                <PersonIcon/>
                <FavoriteIcon/>
            </div>
            <div className="cart_icons">
                <ShoppingCartIcon/>
                <span>0</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
