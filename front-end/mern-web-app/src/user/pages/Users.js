import React from 'react'
import UserList from '../components/UserList';

import './styles/Users.css';

function User(){


    console.log(new Date(1971,6,28).toString())

    const USERS =[{username:'elonMusk', name: 'Elon Musk', date_of_birth: new Date(1971,6,28).toString(), image: 'https://static01.nyt.com/images/2022/04/22/business/25musk-twitter-what-musk-wants/21economy-briefing-musk-sec-mediumSquareAt3X.jpg', places: 3 },
                  {username:'jeffBezos', name: 'Jeff Bezos', date_of_birth: new Date(1964,1,12).toString(), image: 'https://pyxis.nymag.com/v1/imgs/64c/5f5/aa7bad8c89acf39949cea29f2218bb8da5-26-jeff-bezos.rsquare.w700.jpg', places: 2 },
                  {username:'larryPage', name: 'Larry Page', date_of_birth: new Date(1973,3,26).toString(), image: 'https://i0.wp.com/wikibiostars.in/wp-content/uploads/2021/05/Larry-Page.png?resize=396%2C373&ssl=1', places: 3 }]

    return (
        <div className='main-container'>
            <h1 className='section-title'> Sezione utenti </h1>
            <UserList items={USERS}/>
        </div>
    )

}

export default User;