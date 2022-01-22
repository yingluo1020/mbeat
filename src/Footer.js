import React from 'react'
import './Footer.css'
import { SiSpotify, SiFacebook, SiTwitter, SiInstagram, SiLinkedin } from "react-icons/si";


export default function Footer() {
    return (
        <div className='footer'>
            <h1>About Us</h1>
            <p>Our Mission is to provide you and everybody else with the latest songs worldwide.
                <br/> Join us and enjoy every moment of the journey</p>
            <div className='footer_icons'>
            <div className='footer_icon1'>
                <SiSpotify size='30px'/>
                </div>
                <div className='footer_icon2'>
                <SiFacebook size='30px' margin-right='30px'/>
                </div>
                <div className='footer_icon3'>
                <SiInstagram size='30px'/>
                </div>
                <div className='footer_icon4'>
                <SiTwitter size='30px'/>
                </div>
                <div className='footer_icon5'>
                <SiLinkedin size='30px'/>
                
            </div>
            </div>
        </div>
    )
}
