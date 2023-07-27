import React from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/7935666/pexels-photo-7935666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Long Sleeve Graphic T-Shirt",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere rem sed id nemo officia officiis quisquam impedit voluptates. Necessitatibus ea nisi repellendus eos quas!",
      isNew: true,
      oldPrice: 49,
      price: 30,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere rem sed id nemo officia officiis quisquam impedit voluptates. Necessitatibus ea nisi repellendus eos quas!",
      title: "Shoes",
      isNew: false,
      oldPrice: 249,
      price: 300,
    },
  ];

  return (
    <div className="flex absolute w-96 h-auto bg-white flex-col right-[35px] top-[50px] p-4 rounded-md drop-shadow-md gap-5">
      <h1 className="text-lg font-semibold">Product in your cart</h1>
      {data?.map((item) =>(
          <div className="flex gap-5" key={item.id}>
            <img className="h-16 w-full object-cover rounded-md" src={item.img} alt="" />
            <div>
              <h1 className="font-medium">{item.title}</h1>
              <p className="text-sm">{item.desc.substring(0, 100)} ...</p>
              <div className="text-blue-500">1 X Rp.{item.price}.000</div>
            </div>
            <DeleteOutlineOutlinedIcon className="text-red-500 cursor-pointer"/>
          </div>
        ))}
        <div className="flex justify-between font-medium">
            <span>SubTotal</span>
            <span className="text-blue-500">Rp.500.000</span>
        </div>
        <div className="flex gap-5 items-center">
        <button className="bg-blue-500 w-1/2 p-2 text-sm font-medium text-white rounded-md">Proceed to checkout</button>
        <span className="text-red-600 font-medium cursor-pointer">Reset Cart</span>
        </div>
    </div>
  );
};

export default Cart;
