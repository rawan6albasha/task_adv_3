import React from 'react'
import Hero from '../Components/Hero/Hero'
import Featured from '../Components/Featured/Featured'
import VideoView from '../Components/VideoView/VideoView'
import BestDeal from '../Components/BestDeal/BestDeal'
import Properties from '../Components/Properties/Properties'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
        <header>
       
       <Hero/>
     </header>
     <main>
 <Featured/>
 <VideoView/>
 <BestDeal/>
 <Properties/>
 <Contact/> 
     </main>
    </div>
  )
}

export default Home
