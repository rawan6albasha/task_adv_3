import React from 'react'
import style from './HeroPages.module.css'
import head from '/src/assets/images/page-heading-bg.jpg'
const HeroPages = (props) => {
  return (
    <div className={style.HeroPages}>
      {/* <img src={head}/> */}
      <p>{props.heroData.pargh}</p>
      <h2>{props.heroData.Titel}</h2>

    </div>
  )
}

export default HeroPages
