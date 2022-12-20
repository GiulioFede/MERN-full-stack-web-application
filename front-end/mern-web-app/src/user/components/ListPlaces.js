import React from 'react'


import './styles/ListPlaces.css';
import PlaceItem from './PlaceItem'

function ListPlaces(props){

    {/* Se non ha foto */}
    if(props.gallery.length === 0){
        return (
            <div className='box-empty-gallery'>
                <p> Nessuna immagine postata da {props.username}</p>
            </div>
        )
    }

    {/* Se invece ci sono foto... */}
    return (
        <div className='box-gallery'>
            {props.gallery.map(place => (
                <PlaceItem 
                    key={place.id}
                    id = {place.id}
                    imgurl = {place.imageUrl}
                    title =  {place.title}
                    description = {place.description}
                    coordinates = {place.coordinates}
                />
            ))}
        </div>
    )

}

export default ListPlaces;