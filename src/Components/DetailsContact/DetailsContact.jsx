import React from 'react'
import style from './DetailsContact.module.css'


import phone from '/src/assets/images/phone-icon.png'
import email from '/src/assets/images/email-icon.png'

const DetailsContact = (props) => {
  return (
    <div className={`{${props.style}? ${style.contact_dets_col}: } ${style.contact_dets}`}>
    <div className={style.contact_det}>
        <img src={phone} />
        <div><b>010-020-0340</b><p>Phone Number</p></div>
    </div>
    <div className={style.contact_det}>
        <img src={email} />
        <div><b>Info@villa.co</b><p>Business Email</p></div>
    </div>
    </div>
  )
}

export default DetailsContact
