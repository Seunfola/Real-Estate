import React from 'react';
import'./header.css';
import logo from '../../public/logo.png'

const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <p> Breed's <b className='Target'>H</b>omes</p>


                <div className='flexCenter h-menu'>
                    <a href=''>Residences</a>
                    <a href=''>Residences</a>
                    <a href=''>Our Values</a>
                    <a href=''>Contact Us</a>
                    <a href=''>Get Started</a>
                    <button className=' button h-btn'>
                        <a href=''>Contact</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header