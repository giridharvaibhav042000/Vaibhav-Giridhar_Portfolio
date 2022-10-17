import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from "../../assets/vaibhav1.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <div className='header' id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vaibhav Giridhar</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down </a>
      </div>
    </div>
    // <div>
    //   app
    // </div>
  )
}

export default Header
