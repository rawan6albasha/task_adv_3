import React from 'react'
import HeroPages from '../../Components/HeroPages/HeroPages'
import FeaturedDetails from '../../Components/FeaturedDetails/FeaturedDetails'

import style from './PropertyDetails.module.css'
import Accordion from '../../Components/Accordion/Accordion'
import property from '/src/assets/images/property-01.jpg'
import BestDeal from '../../Components/BestDeal/BestDeal'
const PropertyDetails = () => {
  const heroData = {
    Titel: "SINGLE PROPERTY",
    pargh: "Home/SINGLE PROPERTY"
  }
  const accordionItems = [
    {
      title: 'Best useful links?',
      content: "Dolor <b>almesit amet</b>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice chillwave vexillologist incididunt ut labore consectetur<span style='color: #e14d9a;'> adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: 'How does this work?',
      content: "Get <strong>the best villa </strong>website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href='#'> best free CSS templates </a> in the world. Please tell your friends about it."
    },
    {
      title: 'Why is Villa Agency the best?',
      content: "Get <strong>the best villa </strong>website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href='#'> best free CSS templates </a> in the world. Please tell your friends about it."
    },
  ];
  return (
    <div>
      <div>
        <HeroPages heroData={heroData} />
      </div>

      <div className='container '>

        <div className={style.first_part}>
          <div className={style.first_col}>
            <div className={style.img_dev}>
              <img src={property} alt='villa' />
              <span>Apparment</span>
              <h2>24 New Street Miami, OR 24560</h2>
              <hr />
            </div>
            <div className={style.pargh_dev}>
              <p>Get<b> the best villa agency </b>HTML CSS Bootstrap Template for your company website. TemplateMo provides
                you the <a href='#'>best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi
                bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably
                haven't heard of them ugh hella</p>
              <p>
                When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In
                addition, you can type TemplateMo Digital Marketing, emplateMo Corporate Layouts, etc. Master
                cardigan hoodie pop-up</p>
            </div>
            <Accordion items={accordionItems} />
          </div>
          <FeaturedDetails />
        </div>



      </div>

      <BestDeal />
    </div>
  )
}

export default PropertyDetails
