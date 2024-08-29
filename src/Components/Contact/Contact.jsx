import React from 'react'
import style from './Contact.module.css'
import Title from '../Title/Title'
import DetailsContact from '/src/Components/DetailsContact/DetailsContact'


import backgroundImg from '/src/assets/images/contact-bg.jpg'
import ContactForm from '../ContactForm/ContactForm'
const Contact = () => {
    const TitleData={
        span:'CONTACT',
        pargh:"Git In Touch With Our Agents",
        direction:false,
        ColorP:true
    }
    return (
        <div className={style.contact}>
            <div className={style.background_div}>
                <img className={style.background_img} src={backgroundImg} />
            

            <div className={style.contact_absolute}>

            <Title TitleData={TitleData}/>

                <div className={`${style.contact_frame} container section_margin `}>
                    <div className={style.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45102.59623134312!2d11.55765867574764!3d45.047002236749876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f00bf7ae8bb97%3A0xeac9c73f3429a485!2zNDUwMjAgQ2FuZGEsINix2YHZiti62YjYjCDYpdmK2LfYp9mE2YrYpw!5e0!3m2!1sar!2srs!4v1723945375343!5m2!1sar!2srs"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <DetailsContact/>
                    </div>

<ContactForm/>
                </div>

            </div>
            
            </div>
     </div>

    )
}

export default Contact
