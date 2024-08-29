import React from 'react'
import style from './ContactForm.module.css'
const ContactForm = () => {
  return (
    <form>
    <div className={style.input}>
        <label htmlFor="name" name="name"  >Full Name</label>
        <input type='text' id="name" placeholder="Your Name..." />
    </div>
    <div className={style.input}>
        <label htmlFor="email" name="email" >Email Address</label>
        <input type="email" id="email" placeholder="Your E-mail..."/>
    </div>
    <div className={style.input}>
        <label htmlFor="sub" name="sub" >Subject</label>
        <input type='text' id="sub" placeholder="subject..."/>
    </div>
    <div className={style.input}>
        <label htmlFor="mess" name="mess" >Message</label>
        <textarea id="mess" rows="7" placeholder="Your Message"></textarea>

    </div>
    <button type="submit">Send Message</button>
    
</form>
  )
}

export default ContactForm
