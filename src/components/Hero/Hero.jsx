// import React from 'react';
import "./Hero.css";
import Shoe from "../../assets/images/shoe_image.png";
import FlipKart from "../../assets/images/flipkart.png";
import Amazon from "../../assets/images/amazon.png";


const Hero = () => {
  return (
    <>
      <div className="Hero">
        <div className="Hero-Section1">
        <div className="Hero-Text">
          <h1 className="Hero-Heading">YOUR FEET DESERVE THE BEST</h1>
          <p className="Hero-Para">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>
        <div className="Hero-Buttons">
          <button className="Button1">Shop Now</button>
          <button className="Button2">Category</button>
        </div>
        <div className="Hero-Footer">
             <p>Also Available On</p>
             <img src={FlipKart} alt=""  />
             <img src={Amazon} alt=""  />
        </div>
        </div>
        <div className="Hero-Section2">
          <div className="Hero-Image">
            <img src={Shoe}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
