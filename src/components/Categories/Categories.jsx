import React from 'react';
import {Link} from 'react-router-dom';

const Categories = () => {
  return (
    <div className='bg-gray-300'>
    <div className=' w-full h-screen mx-auto px-3 py-4 grid grid-cols-4 gap-3'>
        <div className='w-full h-full overflow-hidden bg-men bg-cover bg-center relative'>
            <Link to="/products/1" className='min-w-[100px]'>
                <button className='absolute top-0 bottom-0 right-0 left-0 m-auto w-fit h-fit min-w-[100px] bg-white outline-none py-2 px-4 text-blue-900 font-semibold rounded-md hover:scale-105'>Men</button>
            </Link>
        </div>
        <div className='row-span-2 w-full h-full overflow-hidden bg-shoes bg-cover bg-center relative'>
        <Link to="/products/2" className='min-w-[100px]'>
        <button className='absolute top-0 bottom-0 right-0 left-0 m-auto min-w-[100px] w-fit h-fit bg-white outline-none py-2 px-4 text-blue-900 font-semibold rounded-md hover:scale-105'>Shoes</button>
        </Link>
        </div>
        <div className='w-full h-full overflow-hidden bg-women bg-cover relative bg-center'>
        <Link to="/products/3" className='min-w-[100px]'>
        <button className='absolute top-0 bottom-0 right-0 left-0 m-auto min-w-[100px] w-fit h-fit bg-white outline-none py-2 px-4 text-blue-900 font-semibold rounded-md hover:scale-105'>Women</button>
        </Link>
        </div>
        <div className='w-full h-full overflow-hidden bg-accesoris bg-cover bg-center relative'>
        <Link to="/products/4" className='min-w-[100px]'>
        <button className='absolute top-0 bottom-0 right-0 left-0 m-auto min-w-[100px] w-fit h-fit bg-white outline-none py-2 px-4 text-blue-900 font-semibold rounded-md hover:scale-105'>Accesoriss</button>
        </Link>
        </div>
        <div className='w-full h-full relative overflow-hidden bg-sale bg-cover bg-center'>
        <Link to="/products/5" className='min-w-[100px]'>
        <button className='absolute top-0 bottom-0 right-0 left-0 m-auto min-w-[100px] w-fit h-fit bg-white outline-none py-2 px-4 text-blue-900 font-semibold rounded-md hover:scale-105'>Sale</button>
        </Link>
        </div>
        <div className='col-span-2 overflow-hidden w-full relative bg-newSeason bg-cover bg-center'>
        <Link to="/products/6" className='min-w-[100px]'>
        <button className='absolute top-0 bottom-0 right-0 left-0 m-auto min-w-[100px] w-fit h-fit bg-white outline-none py-2 px-4 text-blue-900 font-semibold rounded-md hover:scale-105'>New Season</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Categories