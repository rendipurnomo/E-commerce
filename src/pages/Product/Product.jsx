import React,{useState} from 'react';

const Product = () => {
  const [selectImg, setSelectImg]=useState(0);
  const [count, setCount]= useState(1)

  const images = [
    "https://images.pexels.com/photos/12205060/pexels-photo-12205060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9154716/pexels-photo-9154716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]
  return (
    <div className='w-full px-14 py-5 flex gap-12'>
      <div className="flex-1 flex gap-5">
        <div className="flex-1">
          <img className='w-full h-36 object-cover mb-6 cursor-pointer' src={images[0]} alt="" onClick={e=>setSelectImg(0)}/>
          <img className='w-full h-36 object-cover cursor-pointer' src={images[1]} alt="" onClick={e=>setSelectImg(1)} />
        </div>
        <div className="flex-[5_5_%]">
          <img className='w-full max-h-[600px] object-cover' src={images[selectImg]} alt="" />
        </div>
      </div>
      <div className="flex-1">
        <h1>Title</h1>
        <span>30000</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum commodi reprehenderit numquam nam debitis id ut aliquam tempora dolores! Nihil voluptates veritatis quaerat cum ex aperiam maxime magnam dolorum, sequi dicta fugiat doloribus quo corrupti.</p>
        <div className="quantity">
          <button className='bg-blue-500 w-8 h-8 text-white rounded-md' onClick={e=>setCount(prev=>prev === 1 ? 1 : prev-1)}>-</button>
          <span className='mx-3'>{count}</span>
          <button onClick={e=>setCount(prev=>prev+1)} className='bg-blue-500 w-8 h-8 text-white rounded-md'>+</button>
        </div>
      </div>
    </div>
  )
}

export default Product