import React from 'react';
import './Header.css';
import img from '../../assets/';

const Header = () => {
    return (
        <div className='header-section'>
            <div className="container">
                <h1>Knowledge Cafe</h1>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;