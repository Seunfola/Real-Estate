import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className='paddings innerWidth flexCenter f-container'>
                <div className='f-left'>
                    <p>Breed's<b className='Target'>H</b> ome</p>
                    <span className='f-left-span'>Our Vision is to make all people <br /> the best place to live</span>
                </div>
                <div className='flexColStart f-right'>
                    <span className='primaryText'>
                        Information
                    </span>
                    <span className='secondaryText'>
                        39, Jibowu Yaba, Lagos, Nigeria.
                    </span>
                    <div className='flexColCenter f-menu'>
                        <span>Properties</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer