import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import TabOptions from './TabOptions'
import Delivery from '../tabs/delivery/Delivery'
import DiningOut from '../tabs/diningOut/DiningOut'
import NightLife from '../tabs/nightLife/NightLife'

function Apps() {
  const [activeTab, setActiveTab] = useState("Delivery")

  const setCurrentScreen =(tab)=>{
        switch (tab){
          case "Delivery":
            return <Delivery/>;
          case "Dining Out":
            return <DiningOut/>;
          case "Night Life":
        return <NightLife/>;
         default:
          return <Delivery/>;
        }
  }
  return (
    <div>
      <Header/>
       <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
       {setCurrentScreen(activeTab)}
        <Footer/>
    </div>

    
  )
}

export default Apps