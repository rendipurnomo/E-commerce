import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
    <div className='w-full flex flex-col gap-2'>
      <div className="w-full h-56 overflow-hidden relative">
        {item.isNew && <span className='absolute z-30 top-2 left-2 bg-white px-4 py-2 rounded-md text-green-700 font-semibold text-sm'>New Season</span>}
        <img src={item.img} alt={item.title} className="hover:z-0 z-20 w-full h-full object-cover absolute rounded-lg" />
        <img src={item.img2} alt={item.title}className="z-10 w-full h-full object-cover absolute rounded-lg" />
      </div>
      <h2 className='text-lg'>{item.title}</h2>
      <div className="flex gap-4">
      <h2 className='line-through text-red-500'>Rp.{item.oldPrice}.000</h2>
      <h2 className='font-semibold'>Rp.{item.price}.000</h2>
      </div>
    </div>
    </Link>
  )
}

export default Card