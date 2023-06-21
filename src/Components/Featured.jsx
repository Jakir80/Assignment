import Image from "next/image";


const Featured = () => {
    return (
        <div className="bg-gray-200 p-5 mt-5 mb-5 m-auto">
            <h1 className=" font-bold text-4xl mb-10 container">get Featured</h1>
            <div className='flex justify-around gap-3 container m-auto mb-5'>
              <div>
              <Image width={250} height={250}  src="/one.webp" alt='' />
              </div>
              <div>
              <Image  width={250} height={250}   src="/two.webp" alt='' />
              </div>
              <div>
              <Image width={250} height={250}  src="/three.webp" alt='' />
              </div>
              <div>
              <Image width={250} height={250}  src="/four.webp" alt='' />
              </div>
              <div>
              <Image width={250} height={250}   src="/five.webp" alt='' />
              </div>
            </div>
            
        </div>
    );
};

export default Featured;