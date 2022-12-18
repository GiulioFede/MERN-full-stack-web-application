import React from 'react'
import {Link} from 'react-router-dom'


import './styles/UserItem.css';

function UserItem(props){

    function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }


    return (
        <div className='mainBox'>
                <h1 className='section-title'> {props.name} </h1>
                <Link to={`/${props.username}`}>
                    <img src={props.image} className='image' />
                </Link>
                <div className='description-area'>
                    <h3>Age: {calculate_age(new Date(props.date_of_birth))}</h3>
                    <h3>Places: {props.placeCount}</h3>
                </div>
        </div>
    )

}

export default UserItem;