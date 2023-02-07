import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiFillPhone} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id ='contact'>
      <h5>Let's Chat!</h5>
      <h1>CONTACT ME</h1>

      <div className='container container__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>raghadasfour.74@gmail.com</h5>
            <a href="mailto:raghadasfour.74@gmail.com" target="_blank">Send an email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option__icon'/>
            <h4>Messenger</h4>
            <h5>Raghad Asfour</h5>
            <a href="https://www.facebook.com/profile.php?id=100008281800338" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiFillPhone className='contact__option__icon'/>
            <h4>Phone Number</h4>
            <h5>+1(647) 809-9667</h5>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows='7' placeholder="Your Message" required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact