import React from 'react';
import './deliveryCollection.css';
import NextArrow from '../../../Courosel/NextArrow';
import PrevArrow from '../../../Courosel/PrevArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem/DeliveryItem';

const deliveryItems = [
  { id: 1, title: 'Pizza', image: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' },
  { id: 2, title: 'Chicken', image: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' },
  { id: 3, title: 'Thali', image: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png' },
  { id: 4, title: 'Burger', image: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
  { id: 5, title: 'Veg Meal', image: 'https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg' },
  { id: 6, title: 'Dosa', image: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png' },
  { id: 7, title: 'North Indian', image: 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg' },
  { id: 8, title: 'Cake', image: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function DeliveryCollection() {
  return (
    <div className="delivery-collection">
      <div className='max-width'>
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          { deliveryItems && deliveryItems.map((item) => (
            <DeliveryItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default DeliveryCollection;
