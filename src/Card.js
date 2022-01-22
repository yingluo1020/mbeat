import React from 'react'
import './Card.css'

function Card({src, title, description, song}) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card_info">
                 <h2>{title}</h2>
                 <h4>{description}</h4>
            <audio autoPlay={false} controls={true}>
                <source type="audio/mp3" src={song} />
            </audio>
                 
            </div>
        </div>
    )
}

export default Card