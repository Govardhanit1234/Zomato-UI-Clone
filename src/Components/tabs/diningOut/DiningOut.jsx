import React from 'react'
import "./diningOut.css"
import Collections from '../../collection/Collections'
import { diningOut } from '../../data/diningOut'
import Filters from '../../filters/Filters'
import ExploreSection from '../../exploreSection/ExploreSection'

const collectionList =[
  {
    id:1,
    title:"Top Trending Places",
    cover:"https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810207.png",
    places: "30 paces"
  },
  {
    id:2,
    title:"Best Rooftop Places",
    cover:"https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810493.png",
    places: "48 paces"
  },
  {
    id:3,
    title:"Newly Opened Places",
    cover:"https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171292.png",
    places: "33 paces"
  },
  {
    id:4,
    title:"Strawberry Sweet Treats",
    cover:"https://b.zmtcdn.com/data/collections/bb911f91fcd0049494b664752d28b740_1733211787.png",
    places: "10 paces"
  },
  {
    id:5,
    title:"It's a Date",
    cover:"https://b.zmtcdn.com/data/collections/2e8b954961d07f927802853d5944d67b_1709812883.png",
    places: "30 paces"
  },
  {
    id:6,
    title:"Best Insta-worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/a5e6d123ac773de6d33250da4bb3b93f_1731309686.png",
    places: "13 paces"
  },
]

const diningFilters =[
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

const diningList = diningOut

function DiningOut() {
  return (
    <div>
      <Collections list={collectionList}/>
      <div className='max-width'>
         <Filters filterList={diningFilters}/>
      </div>
      <ExploreSection list={diningList} collectionName="Dine-out Restaurents In Bengaluru"/>
    </div>
  )
}

export default DiningOut