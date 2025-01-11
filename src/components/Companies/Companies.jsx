import React from 'react';
import './companies.css';

// Consolidate image imports into a single object
const companyLogos = [
  { src: require('../../public/prologis.png'), alt: 'Prologis' },
  { src: require('../../public/tower.png'), alt: 'Tower' },
  { src: require('../../public/equinix.png'), alt: 'Equinix' },
  { src: require('../../public/realty.png'), alt: 'Realty' },
];

const Companies = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        {companyLogos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
};

export default Companies;
