import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import "./Banner.css"

function Banner() {
    return (
        <div className="banner">
             <AliceCarousel disableButtonsControls="false"  paddingLeft="1" autoPlay infinite="true" autoPlayInterval="3000">
             <img className="bannerImg" src="https://in.bmscdn.com/showcaseimage/eventimage/ranga-shankara-aha-s-summer-express-2021-30-03-2021-02-05-36-585.jpg"/>
            <img className="bannerImg" src="https://in.bmscdn.com/showcaseimage/eventimage/uncensored--live-11-04-2021-12-18-25-344.jpg"/>
            <img className="bannerImg" src="https://in.bmscdn.com/showcaseimage/eventimage/the-dineout-steppinout-night-market-30-03-2021-10-42-22-920.jpghttps://in.bmscdn.com/showcaseimage/eventimage/the-dineout-steppinout-night-market-30-03-2021-10-42-22-920.jpg"/>
            <img className="bannerImg" src="https://in.bmscdn.com/showcaseimage/eventimage/war-31-03-2021-07-24-05-456.jpg"/>
            <img className="bannerImg" src="https://in.bmscdn.com/showcaseimage/eventimage/sadhguru-live-with-chetan-bhagat--get-a-free-book-07-04-2021-04-24-11-530.jpg"/>
        
            </AliceCarousel>
           </div>
    )
}

export default Banner


// https://in.bmscdn.com/showcaseimage/eventimage/ranga-shankara-aha-s-summer-express-2021-30-03-2021-02-05-36-585.jpg
// https://in.bmscdn.com/showcaseimage/eventimage/uncensored--live-11-04-2021-12-18-25-344.jpg
// https://in.bmscdn.com/showcaseimage/eventimage/the-dineout-steppinout-night-market-30-03-2021-10-42-22-920.jpg
// https://in.bmscdn.com/showcaseimage/eventimage/war-31-03-2021-07-24-05-456.jpg
// https://in.bmscdn.com/showcaseimage/eventimage/sadhguru-live-with-chetan-bhagat--get-a-free-book-07-04-2021-04-24-11-530.jpg