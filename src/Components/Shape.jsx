/* eslint-disable @next/next/no-img-element */

import SwiperSlider from "./SwiperSlider";


const Shape = () => {
  return (
    <div className="bg-blue-300 p-5">
      <div className="flex justify-between gap-6 items-center container m-auto bg-blue-600 ">
      <div className="w-full">
          <img src="peeps1.webp" alt="" />
        </div>
        <SwiperSlider />
       
      </div>
    </div>
  );
};

export default Shape;

  

  