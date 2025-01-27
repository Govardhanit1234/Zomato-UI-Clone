import React from 'react'
import "./exploreSection.css"
import ExploreCard from './ExploreCard'

function ExploreSection({list,collectionName}) {
  return (
    <div className='max-width explore-section'>
      <div className='collection-title'>{collectionName}</div>
      <div className='explore-grid'>
    {list.map((restaurent)=>{
        return <ExploreCard restaurent={restaurent}/>
    })}
      </div>
    </div>
  )
}

export default ExploreSection