import React from 'react';
import Card from './Card';
import './Hits.css'

export default function Hits() {
    return (
        <div>

            <div className='hits_title'>
                <h1> Greatest Songs of All Time</h1>
                <div className='line'></div>
                <h2> Top 5 most listened worldwide</h2>
            </div>
            <div className='home_section'>
                
            <Card 
                    src="./music/Hits/1.jpg"
                    title="Sweet Child O'Mine"
                    description="by Guns N' Roses"
                    song= "./music/Hits/1.mp3"
            />
            <Card 
                    src="./music/Hits/2.jpg"
                    title="Hotel California"
                    description="by The Eagles"
                    song = "./music/Hits/2.mp3"
                    
            />
            <Card 
                    src="./music/Hits/3.jpg"
                    title="Imagine"
                    description="by John Lennon"
                    song = "./music/Hits/3.mp3"
            />

            <Card 
                    src="./music/Hits/4.jpg"
                    title="Billie Jean"
                    description="by Michael Jackson"
                    song = "./music/Hits/4.mp3"
                    
            />
            <Card 
                    src="./music/Hits/5.jpg"
                    title="Smells Like Teen Spirit"
                    description="by Nirvana"
                    song = "./music/Hits/5.mp3"
                    
            />
            </div>
        </div>
    )
}
