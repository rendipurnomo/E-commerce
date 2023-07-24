import React, { useState } from "react";
import "./Slider.css";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Slider = () => {

  const [currentSlide, setCurrentSlide]= useState(0);

  const data = [
    "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1126935/pexels-photo-1126935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const prevSlide =()=>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev -1)
  }
  const nextSlide=()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1)
  }

  return (
    <div className="slider">
      <div className="contener" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="hero" className="hero" />
        <img src={data[1]} alt="hero" className="hero" />
        <img src={data[2]} alt="hero" className="hero" />
      </div>
      <div className="icons">
        <div className="icon">
          <ArrowCircleLeftOutlinedIcon onClick={prevSlide}/>
          </div>
          <div className="icon">
            <ArrowCircleRightOutlinedIcon onClick={nextSlide} />
            </div>
        </div>
      </div>
  );
};

export default Slider;
