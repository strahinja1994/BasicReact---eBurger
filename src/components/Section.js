import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Section() {
    return(
        <section className='section'>
            <div className='section__message'>
                <h1 className='section__message-title'>Day starts with a piece of <span>pizza</span></h1>
                <h3 className='section__message-text'>and ends with one more piece of pizza</h3>
                <div className='section__message-buttons'>
                    <button className='section__message-buttons--button'>Discover</button>
                    <button className='section__message-buttons--button'>Menu</button>
                </div>
            </div>
            <div className='section__about'>
                    <p className='section__about-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti sit asperiores accusantium quidem recusandae voluptates vero? Molestias reprehenderit placeat rerum pariatur corporis repellendus, quam ea magni, molestiae aliquam consequuntur!</p>
                    <button className='section__about-button'>more
                    <FontAwesomeIcon icon={faArrowRight} className='section__about-icon'></FontAwesomeIcon>
                    </button>
                </div>
        </section>
    )
}