import React, { useState,useEffect } from 'react';
import './FeaturedProducts.css';
import { Card } from "../../components";
import axios from 'axios';

const FeaturedProducts = ({type}) => {

    const [data,setData]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get( import.meta.env.VITE_URL + `/products?populate=*&[filters][type][$eqi]=${type}`, 
                    {
                    headers: {
                    Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
                },
                }
                );
                setData(res.data.data)
                console.log(res.data.data)
            } catch (error) {
                console.log(type)
            }
        }
        fetchData();
    },[])

  return (
    <div className='mx-2 sm:mx-6 md:mx-8 lg:mx-24 xl:mx-40 my-36'>
        <div className="flex-col md:flex-row flex-center mb-10">
            <h1 className='basis-1/2 font-bold text-3xl justify-center items-center overflow-hidden'>{type} Products</h1>
            <p className='basis-1/2 text-gray-500'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nulla explicabo fuga doloremque, officia repellat deserunt delectus sit quisquam eius ipsa a aliquid? Dolore pariatur alias error, nemo tempora doloribus tenetur eligendi aut blanditiis. Blanditiis?
            </p>
        </div>
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {data?.map(item=>(
            <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts