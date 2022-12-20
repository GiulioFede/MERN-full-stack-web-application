import React from 'react'
import { useLocation } from 'react-router-dom'

import './styles/UserPlaces.css';

import ListPlaces from '../components/ListPlaces';

function UserPlaces(props){
    const location = useLocation();
    const username = (location.pathname.split("/").pop());

    const places = [
        {
            id: 'p1', 
            imageUrl: 'https://media.cntraveler.com/photos/60595e75c685cfec854722a8/master/w_1920%2Cc_limit/Azores-GettyImages-1183442594.jpg', 
            title:'The Azores, Portugal', 
            description: 'Roughly 900 miles off the coast of Lisbon, this Portuguese archipelago can inspire wanderlust with a single photo. The verdant valleys, steep oceanside cliffs, rows of blue hydrangeas, and scattering of waterfalls make the Azores a paradise worth exploring. Just make sure you visit before everyone you know beats you to it.',
            coordinates: {
                lat:38.3216753,
                lng: -29.4601083
            }
        },

        {
            id: 'p2', 
            imageUrl: 'https://media.cntraveler.com/photos/60596bca7ef97a43a1af2c99/master/w_1920%2Cc_limit/Kilimanjaro-GettyImages-1249566598.jpg', 
            title:'Mount Kilimanjaro, Tanzania', 
            description: 'Africa’s highest peak seems more striking than a lot of other famous mountains, because it’s an ancient stratovolcano that’s not part of any mountain range. That means the 19,000-foot summit drops down to vast, flat plains on all sides, making it a mirage-like blip on Tanzania’s widespread topography. As an added bonus, the peak requires no technical mountaineering skills to summit, so even novice hikers can cross this item off their bucket list.',
            coordinates: {
                lat:-3.0674031,
                lng: 37.3453276
            }
        },

        {
            id: 'p3', 
            imageUrl: 'https://media.cntraveler.com/photos/5cb63a5211a45eb1f830373c/master/w_1920%2Cc_limit/Wulingyuan-Scenic-Area-China_GettyImages-159228516.jpg', 
            title:'Wulingyuan Scenic Area, China', 
            description: '“Scenic’ might be an understatement here: This 100-square-mile attraction in China’s Hunan Province contains thousands of sandstone pillars that are nature’s version of skyscrapers—some even stretch taller than the Empire State Building’s midpoint.',
            coordinates: {
                lat:29.3357537,
                lng: 110.4787301
            }
        },

        ]

    
    return (
        
        <div className='main-container'>
            <h1 className='section-title'> Posti visitati da {username} </h1>
            <ListPlaces gallery={places} username={username}/>
        </div>
    )

}

export default UserPlaces;