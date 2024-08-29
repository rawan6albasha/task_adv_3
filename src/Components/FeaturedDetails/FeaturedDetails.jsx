import React from 'react'
import style from './FeaturedDetails.module.css'

import info1 from '/src/assets/images/info-icon-01.png'
import info2 from '/src/assets/images/info-icon-02.png'
import info3 from '/src/assets/images/info-icon-03.png'
import info4 from '/src/assets/images/info-icon-04.png'

const FeaturedDetails = () => {
  return (
<div className={style.part3}>
            <div className={style.display_flex_col}>
                <div className={`${style.space} ${style.display_flex_row}`}>
                    <img src={info1} /> <div><b>250 m2</b> <p>Total Flat space</p></div>
                </div>
                <hr/>
                <div className={`${style.contract} ${style.display_flex_row}`}>
                    <img src={info2} /> <div><b>Contract</b> <p>Contract Ready</p></div>
                </div>
                <hr/>
                <div className={`${style.payment} ${style.display_flex_row}`}>
                <div> 
                   <img src={info3} />
                   <p>Process</p>
                   </div> <div><b>Payment</b> <p>Payment</p></div>
                </div>
                <hr/>
                <div className={`${style.safety} ${style.display_flex_row}`}>
                   <div> 
                   <img src={info4} />
                   <p>Control</p>
                   </div>
                    <div><b>Safety</b> <p>24/7 Under</p></div>
                </div>
            </div>
            </div>
  )
}

export default FeaturedDetails
