import React from 'react'
import './Footer.css'
import youtube_icon  from '../../assets/youtube_icon.png'
import twitter_icon  from '../../assets/twitter_icon.png'

import facebook_icon  from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-icons-container">
        <img src={ youtube_icon} alt="" />
        <img src={ twitter_icon} alt="" />
        <img src={  facebook_icon } alt="" />
    </div>
    <ul>
        <li>audio description</li>
        <li>Help section</li>
        <li>Gift cards</li>
        <li>Media center</li>
        <li>Investor relation</li>
        <li>Jobs</li>
        <li>Terms of use </li>
        <li>Privacy</li>
        <li>Legal notice </li>
        <li>Corporation information</li>
        <li>Coockies preferences </li>
        <li>Contact</li>
    </ul>
   <div className="copy-rit-text">&copy; 1995-2024 Netflix,Inc</div>
   </div>
  )
}

export default Footer
