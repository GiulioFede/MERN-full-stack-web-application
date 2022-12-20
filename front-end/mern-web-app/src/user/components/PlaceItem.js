import React from 'react'


import './styles/PlaceItem.css';

function PlaceItem(props){

    return (
        <div className='main-box-item'>

            <h1> {props.title} </h1>
            
            <div className='box-image'>
                <img className='img' src={props.imgurl} alt={props.title} />
            </div>

            <div className='text-content'>
                <h2> {props.address} </h2>
                <p> {props.description} </p>
            </div>
            
            <div className='interaction-box' >
                <button> VIEW ON MAP </button>
                <button> EDIT </button>
                <button> DELETE </button>
            </div>

        </div>
    )
}

export default PlaceItem;