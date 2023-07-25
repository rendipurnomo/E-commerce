import React, { useState } from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="w-full flex px-8 py-12">
      <div className="flex-1 h-full sticky top-20">
        <div className="flex flex-col mb-6">
          <h2 className="text-xl font-semibold">Product Categories</h2>
          <div className="flex gap-2">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirt</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <h2 className="text-xl font-semibold">Filter by price</h2>
          <div className="flex">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Sort by</h2>
          <div className="flex">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="flex">
            <input
              type="radio"
              id="desc"
              value="asc"
              name="price"
              onChange={(e) => setSort("dsc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col flex-[3_3_0%]">
        <img
          className="w-full h-72 object-cover mb-10 rounded-md"
          src="https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
