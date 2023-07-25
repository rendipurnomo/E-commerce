import React from 'react'
import Card from '../Card/Card'

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/7935666/pexels-photo-7935666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/9558762/pexels-photo-9558762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-Shirt",
            isNew: true,
            oldPrice: 49,
            price: 30,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Shoes",
            isNew: false,
            oldPrice: 249,
            price: 300,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Jacket",
            isNew: true,
            oldPrice: 99,
            price: 70,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/17191692/pexels-photo-17191692/free-photo-of-wanita-pintu-dandan-aula.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/17159133/pexels-photo-17159133/free-photo-of-wanita-jalan-bangunan-tembok.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Pant",
            isNew: false,
            oldPrice: 29,
            price: 20,
        },
    ]
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">{data?.map(item=>(
        <Card item={item} key={item.id} />
    ))}</div>
  )
}

export default List