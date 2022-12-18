import React from 'react'

import UserItem from './UserItem';

import './styles/UserList.css';

function UserList(props){

    {/* Se non ci sono utenti... */}
    if(props.items.length === 0) {
        return (
            <div className="user-list">
                <h2> Nessun utente </h2>
            </div>
        )
    }

    {/* Se ci sono utenti */}
    return (
        <div className='user-list'>
            {props.items.map(user => (
                <UserItem
                    key = {user.username}
                    username  = {user.username}
                    date_of_birth = {user.date_of_birth}
                    image = {user.image}
                    name = {user.name}
                    placeCount = {user.places}
            />
            ))}
        </div>
    )
}

export default UserList;