
'use client'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const SwiperSlider = () => {
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        let autoplayInterval;

        if (swiper) {
            autoplayInterval = setInterval(() => {
                if (swiper && swiper.activeIndex !== null && swiper.isEnd) {
                    swiper.slideTo(0, 600, true);
                } else if (swiper) {
                    swiper.slideNext();
                }
            }, 4000);
        }

        return () => {
            clearInterval(autoplayInterval);
        };
    }, [swiper]);

    return (
        <Swiper className='container mt-10 text-white font-bold '
            onSwiper={setSwiper}
            loop={true}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>

                <h1>
                    THE ZET EFFECT

                </h1>
                <p>more than 20core people use  This </p>
            </SwiperSlide>
            <SwiperSlide>

                <h1>
                    THE ZET EFFECT

                </h1>
                <p>more than 20core people use  This </p>
            </SwiperSlide>
            <SwiperSlide>

                <h1>
                    THE ZET EFFECT

                </h1>
                <p>more than 20core people use  This </p>
            </SwiperSlide>


        </Swiper>
    );
};

export default SwiperSlider;

