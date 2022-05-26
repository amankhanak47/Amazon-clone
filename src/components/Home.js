import React from "react";
import "./home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-img"
          src="https://m.media-amazon.com/images/I/719hk-l-0XL._SX3000_.jpg"
          alt=""
        />
        <div className="home-row">
          <Product
            id={903081}
            tittle="HP Envy 11th Gen Intel Core i5 14-inch(35.6 cm) WUXGA Thin & Light Laptop (16GB RAM/512GB SSD/4GB Graphics/Windows 10/MS Office/Finger Print Reader/Natural Silver/1.59 Kg), 14-eb0019TX"
            prize={87390}
            img="https://m.media-amazon.com/images/I/81hJrSLyu4L._SL1500_.jpg"
            rating={4}
          />
          <Product
            id={903097}
            tittle={`ASUS TUF Gaming NVIDIA GeForce GTX 1650 OC Edition Graphics Card (PCIe 3.0, 4GB GDDR6 Memory, HDMI, DisplayPort, DVI-D, 1x 6-pin Power Connector, IP5X Dust Resistance, Space-Grade Lubricant)`}
            prize={28990}
            img={`https://m.media-amazon.com/images/I/81YOpThfvuL._AC_UY327_FMwebp_QL65_.jpg`}
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id={903083}
            tittle={`World’s Greatest Classics (Box Set of 4 Books)`}
            prize={3999}
            img={`https://images-na.ssl-images-amazon.com/images/I/51eyNnHQyDL._SX451_BO1,204,203,200_.jpg`}
            rating={5}
          />
          <Product
            id={903084}
            img={`https://m.media-amazon.com/images/I/61GA4qjhf5L._AC_UL480_FMwebp_QL65_.jpg`}
            tittle={`Vfashion Men,s Superhero Ironman Zipper rad Hoodie Cotton Marvel Alan Superhero Hooded Jacket`}
            prize={1200}
            rating={3}
          />
          <Product
            id={903085}
            img={`https://images-eu.ssl-images-amazon.com/images/I/41bT3VTWDKL._AC_SR400,600_.jpg`}
            tittle={`TRAWOC 65 L Travel Backpack for Hiking Trekking Bag Camping Rucksack with Rain Cover / Shoe Compartment MHK002, 1 Year Warranty`}
            prize={1876}
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            img={`https://m.media-amazon.com/images/I/61M2XfImKML._AC_UL480_FMwebp_QL65_.jpg`}
            id={903089}
            tittle={`Bhumika Overseas Low Back PU Leather Desk Office Executive Chair in Brown Colour`}
            rating={3}
            prize={8765}
          />
          <Product
            id={903086}
            tittle={`Centrino Men's 6113 Fisherman Sandals`}
            img={`https://m.media-amazon.com/images/I/71+W47qWwwL._SY695._SX._UX._SY._UY_.jpg`}
            prize={999}
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id={903082}
            tittle={`GOQii Smart Vital Fitness SpO2 1.3" HD Full Touch, Smart Notification Waterproof Smart Watch for Android Phones Blood Oxygen, Fitness, Sports & Sleep Tracking with 3 Months Personal Coaching (Black)`}
            prize={2499}
            img="https://m.media-amazon.com/images/I/51UUJpcldDL._SX679_.jpg"
            rating={4}
          />
             <Product
            id={903067}
            tittle={`Flexnest® Flexbike Plus | India's 1st 22" HD Touchscreen Smart Exercise Spin Bike With Classes on App - Fitness cycle for Home Gym Workout For Men & Women Exercise bike for Cardio - Black`}
            prize={54999}
            img="https://m.media-amazon.com/images/I/61ZFCdON+fL._SX679_.jpg"
            rating={5}
          />

        </div>
      </div>
    </div>
  );
};

export default Home;
