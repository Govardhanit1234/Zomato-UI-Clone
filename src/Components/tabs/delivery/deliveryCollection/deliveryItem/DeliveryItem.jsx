import React from 'react'
import "./deliveryItem.css"

function DeliveryItem({item}) {
  return (
    <div>
        <div className='delivery-item-cover'>
              <img src={item.image} className='delivery-item-image' alt="item" />
        </div> 
        <div className='delivery-item-title'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem