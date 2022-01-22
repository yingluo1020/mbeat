import React from 'react'
import Card from './Card';
import './Popular.css'

export default function Popular() {
    return (
        <div>
             <div className='hits_title'>
                <h1> Most Popular Songs of 2021</h1>
                <div className='line'></div>
                <h2> Top 3 most streamed worldwide</h2>
            </div>
            <div className='home_section'>
                
            <Card 
                    src="./music/Popular/a1.jpg"
                    title="Dynamite"
                    description="by BTS"
                    song= "./music/Popular/a1.mp3"
            />
            <Card 
                    src="./music/Popular/a2.jpg"
                    title="Driver's Licence"
                    description="by Olivia Rodrigo"
                    song = "./music/Popular/a2.mp3"
                    
            />
            <Card 
                    src="./music/Popular/a3.jpg"
                    title="Bad Habits"
                    description="by Ed Sheeran"
                    song = "./music/Popular/a3.mp3"
            />

            </div>
            
        </div>
    )
}
