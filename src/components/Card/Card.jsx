import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link className='bg-white drop-shadow-lg rounded-lg' to={`/product/${item.id}`}>
    <div className='w-full flex flex-col gap-2 p-2'>
      <div className="hover:scale-105 w-full h-56 overflow-hidden relative">
        {item?.attributes.isNew && <span className='absolute z-30 top-2 left-2 bg-white px-4 py-2 rounded-md text-green-700 font-semibold text-sm'>New Season</span>}
        <img src={import.meta.env.VITE_URL_BASE + item?.attributes.img.data.attributes.url} alt={item?.attributes.title} className="w-full h-full object-cover absolute rounded-lg" />
      </div>
      <h2 className='text-lg'>{item?.attributes.title}</h2>
      <div className="flex gap-4">
      <h2 className='line-through text-red-500'>Rp.{item?.attributes.oldPrice}.000</h2>
      <h2 className='font-semibold'>Rp.{item?.attributes.price}.000</h2>
      </div>
    </div>
    </Link>
  )
}

export default Card