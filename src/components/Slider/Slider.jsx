import React from 'react';
import './slider.scss';
import WestOutlined from '@mui/icons-material/WestOutlined';
import EastOutlined from '@mui/icons-material/EastOutlined';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const data = [
        'img/header1_2.jpg',
        'img/header2.jpg',
        'img/header3.jpg',
      ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2);
    };
    
    const nextSlide = () => {
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlined/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlined/>
                </div>
            </div>
        </div> 
    )

}

export default Slider;
