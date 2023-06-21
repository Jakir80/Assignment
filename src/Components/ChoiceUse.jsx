import Image from "next/image";


const ChoiceUse = () => {
    return (
        <div className="flex justify-evenly items-center container m-auto mt-10 mb-10">
            <div className=" gap-6 m-auto bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: 'url("/bgman.jpg") ',
            }}>
             
                    <Image  width={300} height={200}  src="/man.webp" alt='' />
              

            </div>
            <div className="grid grid-cols-3 gap-12">
                <div>
                    <Image  width={150} height={150}  src="/1.jpg" alt='' />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <Image width={150} height={150}  src="/2.jpg" alt='' />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <Image width={150} height={150}  src="/3.jpg" alt='' />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <Image width={150} height={150}  src="/4.svg" alt='' />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <Image width={150} height={150}  src="/5.svg" alt='' />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <Image width={150} height={150}  src="/6.svg" alt='' />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>

            </div>
        </div>


    );
};

export default ChoiceUse;