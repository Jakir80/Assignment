/* eslint-disable @next/next/no-img-element */

const Featured = () => {
    return (
        <div className="bg-gray-200 p-5 mt-5 mb-5 m-auto">
            <h1 className=" font-bold text-4xl mb-10 container">get Featured</h1>
            <div className='flex justify-around gap-3 container m-auto mb-5'>
              <div>
              <img src="one.webp" alt="" />
              </div>
              <div>
              <img src="two.webp" alt="" />
              </div>
              <div>
              <img src="three.webp" alt="" />
              </div>
              <div>
              <img src="four.webp" alt="" />
              </div>
              <div>
              <img src="five.webp" alt="" />
              </div>
            </div>
            
        </div>
    );
};

export default Featured;