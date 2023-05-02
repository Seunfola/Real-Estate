import React, { useState } from 'react';
import './value.css';
import value from '../../public/value.png'
import { Accordion, AccordionItemButton, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../accordion';

const Values = () => {
    return (
        <section className='v-container'>
            <div className='paddings innerWidth flexCenter v-wrapper'>
                <div className='v-left'>
                    <div className='image-container'>
                        <img src={value} alt='value' />
                    </div>
                </div>
                <div className='flexColStart v-right'>
                    <span className='orangeText'>
                        Our Values
                    </span>
                    <span className='primaryText'>
                        Values We Give Our Clients
                    </span>
                    <span className='secondaryText'>
                        We always ready to help by providing the best services for you .<br />
                        We believe a good balance live and an enabling environment can make your life and living better.
                    </span>
                    <Accordion className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            const [className, setClassName] = useState(null)
                            return (
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className=' flexCenter accordionButton'>
                                            <AccordionItemState>
                                                {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                                            </AccordionItemState>

                                            <div className='flexCenter icon'>
                                                {item.icon}
                                            </div>
                                            <span className="primaryText icon">
                                                {item.heading}
                                            </span>
                                            <div className='flexCenter icon'>
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}



                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Values