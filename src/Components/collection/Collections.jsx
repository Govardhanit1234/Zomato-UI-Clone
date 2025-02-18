import React from 'react'
import Slider from 'react-slick'
import NextArrow from '../Courosel/NextArrow';
import PrevArrow from '../Courosel/PrevArrow';
import "./collection.css"

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

function Collections({list}) {
    
  return (
    <div className='collection-wrapper'>
        <div className='max-width collection'>
            <div className='collection-title'>Collections</div>
            <div className='collection-subtitle-row'>
                <div className='collection-subtitle-text'>
                Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends
                </div>
                <div className='collection-location'>
                  <div>All Collection Bengaluru</div>
                  <i className="fi fi-rr-caret-right absolute-center"></i>
                </div>
            </div>
            <Slider {...settings}>
                   {list.map((item)=>(
                    <div>
                        <div className='collection-cover'>
                            <img src={item.cover} className='collection-image' alt="cover" />
                            <div className='gradient-bg'>
                              <div className='collection-card-title'>
                                {item.title}
                              </div>
                              <div className='collection-card-subtitle'>
                                {item.places}
                                <i className="fi fi-rr-caret-right absolute-center"></i>
                              </div>
                            </div>
                        </div>
                    </div>
                   ))}
            </Slider>
        </div>
    </div>
  )
}

export default Collections