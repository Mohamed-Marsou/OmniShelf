import React from 'react';
import "../scss/main.scss";
import MySwiperComponent from './MySwiperComponent';
import Card from './Card';

function Main() {
   

    return (
        <main>
            <div className="swiperContainer">
                <div className="swiper-swipe">
                    {/* Pass the swiperRef to the Swiper component */}
                    <MySwiperComponent  />
                </div>
                <div className="custom-list"></div>
            </div>

            <div className="gamesContainer">
                < Card />
            </div>
        </main>
    );
}

export default Main;
