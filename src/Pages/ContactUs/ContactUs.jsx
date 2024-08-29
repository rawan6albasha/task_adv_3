import React from 'react'
import HeroPages from '../../Components/HeroPages/HeroPages'
import style from './ContactUs.module.css'
import Title from '../../Components/Title/Title'
import ContactForm from '../../Components/ContactForm/ContactForm'
import DetailsContact from '../../Components/DetailsContact/DetailsContact'

const ContactUs = () => {
  const heroData={
    Titel:"CONTACT US",
    pargh:"Home/CONTACT US"
  }

  const TitleData={
    span:'CONTACT US',
    pargh:"Git In Touch With Our Agents",
    direction:true,
    ColorP:false
}
  return (
    <div className={style.cont_us}>

      <HeroPages heroData={heroData}/>
     
<div className='container '>
    <section className={style.s1}>
<div className={style.part1}>
<div className={style.titel_us}>
<Title TitleData={TitleData}  />
</div>
<p className={style.p} >When you really need to download free CSS templates, please remember our
website TemplateMo. Also, tell your friends about our website. Thank you for
visiting. There is a variety of Bootstrap HTML CSS templates on our website. If
you need more information, please contact us.</p>

<DetailsContact style={true}/>
</div>
<ContactForm/>
    </section>
    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45102.59623134312!2d11.55765867574764!3d45.047002236749876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f00bf7ae8bb97%3A0xeac9c73f3429a485!2zNDUwMjAgQ2FuZGEsINix2YHZiti62YjYjCDYpdmK2LfYp9mE2YrYpw!5e0!3m2!1sar!2srs!4v1723945375343!5m2!1sar!2srs"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        </div>

    </div>

  )
}

export default ContactUs
