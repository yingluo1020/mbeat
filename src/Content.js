import React from 'react'
import './Content.css'

export default function Content() {
    return (
        <div className='content'>
            <div className='content_title'>
                <h1> How Albums are scaled?</h1>
                <div className='line'></div>
            </div>
    
            <div className='content_description'>
                <img src='./album.png'></img>
                <div className='content-text' >The UK Albums Chart is one of many music charts compiled by the Official Charts Company that calculates the best-selling albums of the week in the United Kingdom. Since 2004 the chart has been based on the sales of both physical albums and digital downloads. 
                <br/><br/> Since 2015, the album chart has been based on both sales and streaming. This list shows albums that peaked in the top ten of the UK Albums Chart during 2021, as well as albums which peaked in 2020 and 2022 but were in the top 10 in 2021. The entry date is when the album appeared in the top 10 for the first time (week ending, as published by the Official Charts Company, which is six days after the chart is announced).
                <br/><br/> Two hundred and eighteen albums were in the top ten this year.
    Two albums from 2019 and thirteen albums from 2020 remained in the top ten for several weeks at the beginning of the year. Olivia Rodrigo, Celeste and Arlo Parks are among the many artists who have achieved their first top 10 album in 2021.
                </div> 
            </div>
            
        </div>          
    )
}
