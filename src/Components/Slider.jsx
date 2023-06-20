// import SwiperCore, { Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';

// // Initialize Swiper's autoplay module
// SwiperCore.use([Autoplay]);

// const Slider = () => {
//     const slides = [
//         {
//             title: "Slide 1",
//             content: "This is the content for Slide 1.",
//             videoSrc: "Step3.mp4"
//         },
//         {
//             title: "Slide 2",
//             content: "This is the content for Slide 2.",
//             videoSrc: "Step3.mp4"
//         },
//         // Add more slides as needed
//     ];
// // 
//     return (
//         <div className="flex items-center">
//             <div>
//                 <Swiper
//                     spaceBetween={0}
//                     slidesPerView={1}
//                     autoplay={{ delay: 3000 }}
//                     loop={true}
//                 >
//                     {slides.map((slide, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="p-8">
//                                 <h2 className="text-3xl font-bold mb-4 text-white">{slide.title}</h2>
//                                 <p className="text-white">{slide.content}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//             <div style={{ width:'629px',height:'540px'}} className=" flex justify-center items-center bg-blue-500">
//                 <video style={{ width:'629px',height:'540px'}}  autoPlay controls>
//                     {slides.map((slide, index) => (
//                         <source key={index} src={slide.videoSrc} type="video/mp4" />
//                     ))}
//                     Your browser does not support the video tag.
//                 </video>
//             </div>
//         </div>
//     );
// };

// export default Slider;
