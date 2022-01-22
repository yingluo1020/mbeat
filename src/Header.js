import React from 'react';
import './Header.css';
import { SiSpotify } from "react-icons/si";


function Header() {
    return (
        <div className='header'>
            <div className='page_title'></div>
            <div className='description'>
                <h1>Feel the music.</h1>
                
                <br />
                <h2> Come and join us to discover the latest hits </h2>
                <h2> of the century. Here you will find songs and </h2>
                <h2> artists from all genres. </h2>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Follow Us on Spotify <SiSpotify size='50px'/> </h2> 
                  
                {/* <button type="button">Contact Us</button>  */}
            </div>
            <div className='spotify_header' ></div>

           
        </div>
        
        
    )
}

export default Header