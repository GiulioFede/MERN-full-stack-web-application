import React from 'react'

import { NavLink } from 'react-router-dom';

import './components/styles/MainHeader.css';

function MainHeader(){

    return (
        <div className='main-box'>
            
            <div className='box-title'>
                <NavLink to="/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                    <h1>FromEverywhere</h1>
                </NavLink>
            </div>

            <div className='box-buttons'>
                
                <NavLink className='button' to="/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                    <h2 >Home</h2>
                </NavLink>
                
                <NavLink className='button' to="/users" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                    <h2 >Utenti</h2>
                </NavLink>
                
                <NavLink className='button' to="/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                    <h2 >Aggiugi Posto</h2>
                </NavLink>

                <NavLink className='button' to="/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                    <h2 >Accedi</h2>
                </NavLink>

            </div>
        </div>
    )


}

export default MainHeader;