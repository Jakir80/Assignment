/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const MySwiper = () => {
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
        <Swiper className='container mt-10 '
            onSwiper={setSwiper}
            loop={true}
            slidesPerView={5}
            centeredSlides={true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="1.webp" alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>

                <img  className='border-gray-400 px-2 rounded-lg border-2'  src="Amex.webp" alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="Bajaj.webp" alt="Image 3" />
            </SwiperSlide>
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="Axis.webp" alt="Image 4" />
            </SwiperSlide>
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="Icici.webp" alt="Image 5" />
            </SwiperSlide>
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="IndusInd.webp" alt="Image 6" />
            </SwiperSlide>
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="Aufin.webp" alt="Image 7" />
            </SwiperSlide>
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="Icici.webp" alt="Image 8" />
            </SwiperSlide>
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="1.webp" alt="Image 9" />
            </SwiperSlide>
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="Axis.webp" alt="Image 10" />
            </SwiperSlide>
            <SwiperSlide>

                <img className='border-gray-400 px-2 rounded-lg border-2' src="IndusInd.webp" alt="Image 10" />
            </SwiperSlide>

        </Swiper>
    );
};

export default MySwiper;

