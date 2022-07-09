import React from 'react';
import './Banner.css';
import Search from './Search';

const Banner = () => {
    return (
        <div className='banner flex items-center justify-center mb-10'>
            <Search></Search>
        </div>
    );
};

export default Banner;