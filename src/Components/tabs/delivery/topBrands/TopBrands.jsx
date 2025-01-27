import React from 'react'
import "./topBrands.css"
import PrevArrow from '../../../Courosel/PrevArrow';
import NextArrow from '../../../Courosel/NextArrow';
import Slider from 'react-slick';

const topBrandList =[
    {
        id:"1",
        time:"19 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png"
    },
    {
        id:"2",
        time:"20 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/237f3335dcccc286c95adb04f1377706_1600336627.png"
    },
    {
        id:"3",
        time:"22 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png"
    },
    {
        id:"4",
        time:"25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/47f8ccc7ee4fa0230f9a2bbac7420648_1728976968.png"
    },
    {
        id:"5",
        time:"28 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726664096.png"
    },
    {
        id:"6",
        time:"31 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726606653.png"
    },
    {
        id:"7",
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png"
    },
    {
        id:"8",
        time:"40 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png"
    },


]
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


function TopBrands() {
  return (
    <div className='top-brnads max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
           {topBrandList.map((brand)=>{
            return <div className='top-brands-cover' >
               <img src={brand.cover} className='top-brands-image'  alt="top-brands" />
            </div>
           })}
        </Slider>
    </div>
  )
}

export default TopBrands