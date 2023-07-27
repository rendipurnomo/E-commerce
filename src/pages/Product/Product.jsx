import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";

const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [count, setCount] = useState(1);

  const images = [
    "https://images.pexels.com/photos/12205060/pexels-photo-12205060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9154716/pexels-photo-9154716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="w-full px-14 py-5 flex gap-12 h-screen">
      <div className="flex-1 flex gap-5">
        <div className="flex-1">
          <img
            className="w-full h-36 object-cover mb-6 cursor-pointer rounded-md"
            src={images[0]}
            alt=""
            onClick={(e) => setSelectImg(0)}
          />
          <img
            className="w-full h-36 object-cover cursor-pointer rounded-md"
            src={images[1]}
            alt=""
            onClick={(e) => setSelectImg(1)}
          />
        </div>
        <div className="flex-[5_5_%]">
          <img
            className="w-full max-h-[600px] object-cover rounded-md"
            src={images[selectImg]}
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <h1>Title</h1>
        <span className="text-lg font-semibold">30000</span>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          commodi reprehenderit numquam nam debitis id ut aliquam tempora
          dolores! Nihil voluptates veritatis quaerat cum ex aperiam maxime
          magnam dolorum, sequi dicta fugiat doloribus quo corrupti.
        </p>
        <div className="flex items-center gap-1">
          <button
            className="bg-blue-500 w-8 h-8 text-white rounded-md"
            onClick={(e) => setCount((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span className="w-8 h-8 flex items-center justify-center">{count}</span>
          <button
            onClick={(e) => setCount((prev) => prev + 1)}
            className="bg-blue-500 w-8 h-8 text-white rounded-md"
          >
            +
          </button>
        </div>
        <button className="w-64 p-2 bg-blue-500 text-white rounded-md drop-shadow-md hover:scale-105 flex items-center justify-center gap-2">
          <ShoppingCartIcon />
          Add To Cart
        </button>
        <div className="flex gap-3">
          <div className="flex gap-2 text-blue-500 text-sm cursor-pointer">
            <FavoriteBorderOutlinedIcon />
            Add To Wish List
          </div>
          <div className="flex gap-2 text-blue-500 text-sm cursor-pointer">
            <BalanceOutlinedIcon />
            Add To Compare
          </div>
        </div>
        <div className="flex flex-col text-gray-500 gap-2">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr className="text-gray-800 border-2"/>
        <div className="flex flex-col text-gray-500 gap-2">
          <span>Description</span>
          <hr className="w-60 text-gray-800 border-2"/>
          <span>Additional Information</span>
          <hr className="w-60 text-gray-800 border-2"/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
