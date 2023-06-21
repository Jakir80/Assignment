
import Image from 'next/image';
import './banner.css';
const Banner = () => {
    return (
        <div className="flex justify-between mt-44 p-24 py-20 px-40 items-center bg-[#e9f4ff] container mx-auto relative">
            <div>
                <h1 className='text-4xl space-y-3 font-bold p-4'>Become a Financial Advisor and Earn <br /> <span className='text-blue-500'>Rs.1 Lakh/Month</span> </h1>
                <p className='text-2xl space-y-3 font-semibold p-4'>No investment required</p>
                <Image  className="w-[162px]  h-[48px] ml-4" src="/downloadBtnDark.a0f01343.svg" alt='' width={500} height={500}  />
            </div>
            <div className="absolute  top-[-10rem] right-2 bottom-3">
                <Image alt='' width={500} height={500}  className="man" src="/searching.png" />
            </div>

        </div>
    );
};

export default Banner;