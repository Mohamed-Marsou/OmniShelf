import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiperComponent = ()=> {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <img src="https://wallpapercave.com/wp/wp3363181.jpg" alt="" />
                <div className="sliderInfo">
                    <h2>Read Dead Red V5 </h2>
                    <a href="#">Discover</a>
                </div>
                <div className="tag">NEW</div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://wallpapercave.com/wp/wp4251700.jpg" alt="" />
                <div className="sliderInfo">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veniam..</h2>
                    <a href="#">Discover</a>
                </div>
                <div className="tag">NEW</div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images3.alphacoders.com/110/thumb-1920-1109850.jpg" alt="" />
                <div className="sliderInfo">
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                    <a href="#">Discover</a>
                </div>
                <div className="tag">NEW</div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.redd.it/zhe9osykkkh41.png" alt="" />
                <div className="sliderInfo">
                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                    <a href="#">Discover</a>
                </div>
                <div className="tag">NEW</div>
            </SwiperSlide>
        </Swiper>
    );
};

export default MySwiperComponent;
