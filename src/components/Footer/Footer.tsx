import React from 'react';
import styles from './Footer.module.css'
import Button from '../UI/Button/Button';
import Dotes from '../UI/Dotes/Dotes';
import {Slide} from '../../data/data';

interface FooterProps {
    nextSlide: () => void,
    currentSlideIndex: number,
    slides: Slide[]
}

const Footer: React.FC<FooterProps> = ({nextSlide, slides, currentSlideIndex }) => {
    return (
        <div className={styles.container}>
            <Button nextSlide={nextSlide}>
                {currentSlideIndex === slides.length - 1 ? 'Done' : 'Next'}
            </Button>
            <Dotes slides={slides} currentSlideIndex={currentSlideIndex}/>
        </div>
    )
}
export default Footer;