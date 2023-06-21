

// 'use client'

// import Image from "next/image";


// const Founder = () => {


//   return (
//     <div className="bg-[#f3f9ff] mt-6 pb-5 mb-6 pt-4 text-center">
//       <h1 className="text-4xl mb-4">Meet our Founders</h1>
//       <p className="mb-4"></p>
//       <div className="flex justify-between gap-4 container m-auto">
//         <div>
//           <div>
//             <Image width={500} height={500} 
//               className="hover:scale-110 transition-all"
//               src="/founerone.webp"
//               alt=''
            
//             />
//           </div>
//           <h1 className="mt-4">Manish Shara</h1>
//           <p>Co-Founder & CEO</p>
//         </div>
//         <div>
//           <div>
//             <Image width={500} height={500} 
//               className="hover:scale-110 transition-all"
//               src="/foundertwo.webp"
//               alt=''
           
//             />
//           </div>
//           <h1 className="mt-4">Yeash Desai</h1>
//           <p>CEO</p>
//         </div>
//         <div>
//           <div>
//             <Image width={500} height={500} 
//               className="hover:scale-110 transition-all"
//               src="/founderthree.webp"
//               alt=''
             
//             />
//           </div>
//           <h1 className="mt-4">Lokesh Agrawl</h1>
//           <p>Co-Founder & CEO</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Founder;
'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';

const Founder = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#f3f9ff] mt-6 pb-5 mb-6 pt-4 text-center">
      <h1 className="text-4xl mb-4">Meet our Founders</h1>
      <p className="mb-4"></p>
      <div className="flex justify-between gap-4 container m-auto">
        <div data-aos="fade-up">
          <div>
            <Image
              width={500}
              height={500}
              className="hover:scale-110 transition-all"
              src="/founerone.webp"
              alt=""
            />
          </div>
          <h1 className="mt-4">Manish Shara</h1>
          <p>Co-Founder & CEO</p>
        </div>
        <div data-aos="fade-up">
          <div>
            <Image
              width={500}
              height={500}
              className="hover:scale-110 transition-all"
              src="/foundertwo.webp"
              alt=""
            />
          </div>
          <h1 className="mt-4">Yeash Desai</h1>
          <p>CEO</p>
        </div>
        <div data-aos="fade-up">
          <div>
            <Image
              width={500}
              height={500}
              className="hover:scale-110 transition-all"
              src="/founderthree.webp"
              alt=""
            />
          </div>
          <h1 className="mt-4">Lokesh Agrawl</h1>
          <p>Co-Founder & CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Founder;

