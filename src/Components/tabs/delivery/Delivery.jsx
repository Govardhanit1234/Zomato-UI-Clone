import React from 'react'
import "./delivery.css"
import Filters from '../../filters/Filters'
import DeliveryCollection from './deliveryCollection/DeliveryCollection'
import TopBrands from './topBrands/TopBrands'
import ExploreSection from '../../exploreSection/ExploreSection'
import { restaurents } from '../../data/restaurents'

const delivertFilters =[
  {
    id:1,
    icon:<i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title:"filters",
  },
  {
    id:2,
    title:"Rating 4.0",
  },
  {
    id:3,
    title: "safe and Hygenic",
  },
  {
    id:4,
    title: "Pure Veg",
  },
  {
    id:5,
    title: "Delivery Time",
    icon:<i class="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id:6,
    title: "Great Offers",

  }
]

const restaurentList = restaurents

function Delivery() {
  return (
    <>
    <div className='max-width'>
    <Filters filterList={delivertFilters}/>
 
    </div>
       <DeliveryCollection/>
       <TopBrands/>
       <ExploreSection list={restaurentList} collectionName="Delivery Restaurents in Bengaluru"/>
       </>
  )
}

export default Delivery