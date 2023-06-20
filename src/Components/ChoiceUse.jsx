/* eslint-disable @next/next/no-img-element */

const ChoiceUse = () => {
    return (
        <div className="flex justify-evenly items-center container m-auto mt-5">
            <div className=" gap-6 m-auto bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: 'url("bgImg.webp") ',
            }}>
             
                    <img  src="man.webp" alt="" />
              

            </div>
            <div className="grid grid-cols-3 gap-12">
                <div>
                    <img src="1.svg" alt="" />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <img src="2.svg" alt="" />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <img src="3.svg" alt="" />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <img src="4.svg" alt="" />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <img src="5.svg" alt="" />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>


                <div>
                    <img src="6.svg" alt="" />
                    <h1>content coming soon</h1>
                    <p>content-coming soon-2</p>
                </div>

            </div>
        </div>


    );
};

export default ChoiceUse;