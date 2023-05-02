import React from 'react';
import './companies.css';
import prologis from '../../public/prologis.png'
import tower from '../../public/tower.png'
import equinix from '../../public/equinix.png'
import realty from '../../public/realty.png'

const Companies = () => {
    return (
        <section className='c-wrapper'>
            <div className='paddings innerWidth flexCenter c-container'>
                <img src={prologis} alt='prologis' />
                <img src={tower} alt='tower' />
                <img src={equinix} alt='equinix' />
                <img src={realty} alt='realty' />
            </div>

        </section>
    )
}

export default Companies