import { ScrollRestoration } from 'react-router-dom';
import React from 'react';
import Slider from '../../components/Slider/Slider';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import './home.scss';
import FooterBar from '../../components/FooterBar/FooterBar';

const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <FeaturedProducts/>
            <Categories/>
            <FooterBar/>
            <ScrollRestoration />
        </div>
    );
}

export default Home;