import React, { useState } from 'react';
import './header.css';
import logo from '../../public/logo.png';
import { BiAlignJustify } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 780) {
            return { right: !menuOpened && "-100%" }
        }
    }
    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <p className='logoText'> Breed's <b className='Target'>H</b>omes</p>

                <OutsideClickHandler onOutsideClick={() => menuOpened(false)}>
                    <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
                        <a href=''>Residences</a>
                        <a href=''>Residences</a>
                        <a href=''>Our Values</a>
                        <a href=''>Contact Us</a>
                        <a href=''>Get Started</a>
                        <button className=' button h-btn'>
                            <a href=''>Contact</a>
                        </button>
                    </div>
                    <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
                        < BiAlignJustify size={35} /> </div>
                </OutsideClickHandler>
            </div>

        </section >
    )
}

export default Header