import React from 'react';
import './contact.css';
import contact from '../../public/contact.jpg';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
    return (
        <section className='c-wrapper'>
            <div className='paddings innerWidth flexCenter c-container'>
                <div className='flexColStart c-left'>
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Contact Us Via Here</span>
                    <span className='secondaryText'>We always ready to help by providing the best service we believe a good balance live can help you grow and accelerate progress.</span>
                    <div className='flexColStart contactModes'>
                        <div className='flexStart row'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <MdCall size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'> Call</span>
                                        <span className='secondaryText'>08152832520</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Call Now
                                </div>

                            </div>

                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'> Chat</span>
                                        <span className='secondaryText'>08152832520</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Whatsapp Us
                                </div>

                            </div>

                        </div>

{/* Second Row */}
                        <div className='flexStart  row'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'> Video </span>
                                        <span className='secondaryText'>08152832520</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Video Call Now
                                </div>

                            </div>

                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'> Message</span>
                                        <span className='secondaryText'>08152832520</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>
                                    Message Now
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className='c-right
'>
                    <div className='image-container'>
                        <img src={contact} alt='contact' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact