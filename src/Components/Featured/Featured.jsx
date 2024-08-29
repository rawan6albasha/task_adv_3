import React from 'react'
import style from './Featured.module.css'


import featured_img from '/src/assets/images/featured.jpg'
import featured_icon from '/src/assets/images/featured-icon.png'

import Title from '../Title/Title'
import FeaturedDetails from '../FeaturedDetails/FeaturedDetails'
import Accordion from '../Accordion/Accordion'
const Featured = () => {
    const TitleData={
        span:'FEATURED',
        pargh:"Best Appartment & Sea View",
        direction:true
    }
    const accordionItems = [
        {
            title: 'Best useful links?',
            content: "Get <strong>the best villa </strong>website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href='#'> best free CSS templates </a> in the world. Please tell your friends about it."
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
    
  // للتحقق من القيمة

    return (
        <div className={`${style.featured} container section_margin `}>
            <div className={style.part1}>
                <img src={featured_img} className={style.img_part1} />
                <span><img src={featured_icon} /></span>
            </div>


            <div className={`${style.part2} ${style.display_flex_col}`}>
            <Title TitleData={TitleData}/>

               {/*  <div className={style.featured_card}>
                    <span className={`${style.featured_span2} ${style.padding_left}`} >Best useful links?</span>
                    <hr />
                    <p className={ style.padding_left}>Get <strong>the best villa </strong>website template in HTML CSS
                        and Bootstrap for your business. TemplateMo
                        provides you the<a href='#'> best free CSS templates </a>in the
                        world. Please tell your friends about it.</p>
                    <div className={style.featured_q }>
                        <h4 className={style.padding_left}>How does this work ?</h4>
                        <hr className={style.hr_padd} />
                        <h4 className={style.padding_left}>Why is Villa Agency the best ?</h4>
                    </div>
                </div> */}
                <Accordion items={accordionItems} />


            </div>
            <div className={style.featured_div}>
<FeaturedDetails/>
</div>

        </div>
    )
}

export default Featured
