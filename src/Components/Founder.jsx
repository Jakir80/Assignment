// /* eslint-disable @next/next/no-img-element */

// const Founder = () => {
//     return (
//         <div className="bg-[#f3f9ff] mt-6 pb-5 mb-6 pt-4 text-center">
//             <h1 className="text-4xl mb-4">Meet our Founders

//             </h1>
//             <p className="mb-4"> Few words from founders desk</p>
//             <div className="flex justify-between gap-4 container m-auto">
//                 <div>
//                     <div><img src="founerone.webp" alt="" /></div>
//                     <h1 className="mt-4">Manish Shara
//                     </h1>
//                     <p>Co- Founder & CEO</p>
//                 </div>
//                 <div>
//                     <div><img src="foundertwo.webp" alt="" /></div>
//                     <h1 className="mt-4"> Yeash Desai
//                     </h1>
//                     <p> CEO</p>
//                 </div>
//                 <div>
//                     <div><img src="founderthree.webp" alt="" /></div>
//                     <h1 className="mt-4">Lokesh Agrawl
//                     </h1>
//                     <p>Co- Founder & CEO</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Founder;
'use client'
import { animated, useSpring } from 'react-spring';

const Founder = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="bg-[#f3f9ff] mt-6 pb-5 mb-6 pt-4 text-center">
      <h1 className="text-4xl mb-4">Meet our Founders</h1>
      <p className="mb-4">Few words from the founder's desk</p>
      <div className="flex justify-between gap-4 container m-auto">
        <div>
          <div>
            <animated.img
              className="hover:scale-110 transition-all"
              src="founerone.webp"
              alt=""
              loading="lazy"
              style={fadeIn}
            />
          </div>
          <h1 className="mt-4">Manish Shara</h1>
          <p>Co-Founder & CEO</p>
        </div>
        <div>
          <div>
            <animated.img
              className="hover:scale-110 transition-all"
              src="foundertwo.webp"
              alt=""
              loading="lazy"
              style={fadeIn}
            />
          </div>
          <h1 className="mt-4">Yeash Desai</h1>
          <p>CEO</p>
        </div>
        <div>
          <div>
            <animated.img
              className="hover:scale-110 transition-all"
              src="founderthree.webp"
              alt=""
              loading="lazy"
              style={fadeIn}
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
