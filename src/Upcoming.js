import React from 'react'
import Card1 from './Card1';
import './Upcoming.css'

export default function Upcoming() {
    return (
        <div>
            <div className='hits_title'>
                <h1> Upcoming Songs in 2022</h1>
                <div className='line'></div>
                <h2> Top 4 most waited in January 2022</h2>
            </div>
            <div className='home_section'>
                
            <Card1 
                    src="./music/Upcoming/b1.jpg"
                    title="Dawn FM"
                    description="by The Weekend"
                    
            />
            <Card1 
                    src="./music/Upcoming/b2.jpg"
                    title="What are we waiting for?"
                    description="by For King & Country"
                    
                    
            />
            <Card1 
                    src="./music/Upcoming/b3.jpg"
                    title="Hard Skool"
                    description="by GNR"
                    
            />
            <Card1 
                    src="./music/Upcoming/b4.jpg"
                    title="Transparency"
                    description="by Twin Atlantic"
                    
            />
            </div>
        </div>
    )
}
