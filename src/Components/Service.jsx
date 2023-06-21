import Image from "next/image";


const Service = () => {
    return (
        <div className="bg-[#e9f4ff] mt-7 ">

            <h1 className="font-bold text-center pt-4">Products on ZET

            </h1>
            <p className="font-semi-bold text-center">We are trusted by best brand in the country</p>
            <div className=" service flex justify-center mt-6">
                <div className="grid grid-cols-2 gap-6 container mx-auto mt-10 p-4">
                    <div className="bg-[#edffec]  hover:bg-slate-100 duration-300 relative">
                        <div className=" m-auto flex items-center justify-center overflow-hidden">
                            <div>
                                <Image width={500} height={500} 
                                    className="transform hover:scale-110 transition-transform duration-300"
                                    src="/Loan.webp"
                                    alt=''
                                />
                            </div>

                            <div>
                                <h1>LOANS</h1>
                                <p>100% online process. Instant offers. Affordable Rate of Interest on loans.</p>

                            </div>
                        </div>
                    </div>
                    <div className="bg-[#fff1ca] hover:bg-slate-100 duration-300 relative">
                        <div className="m-auto flex items-center justify-center overflow-hidden">
                            <div>
                                <Image width={500} height={500} 
                                    className="transform hover:scale-110 transition-transform duration-300"
                                    src="/BNPL.webp"
                                    alt=''
                                />
                            </div>
                            <div>
                                <h1>
                                    CREDIT CARDS
                                </h1>
                                <p>100% Contactless Application Process with Instant Approval From Top Banks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#ffeee7] hover:bg-slate-100 duration-300 relative">
                        <div className="m-auto flex items-center justify-center overflow-hidden">
                            <div>
                                <Image width={500} height={500} 
                                    className="transform hover:scale-110 transition-transform duration-300"
                                    src="/CC.webp"
                                    alt=''
                                />
                            </div>
                            <div>
                                <h1>BUY NOW PAY LATER

                                </h1>
                                <p>Short-term financing that allows consumers to make purchases and pay for them over time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#fff5e7] hover:bg-slate-100 duration-300 relative">
                        <div className="m-auto flex items-center justify-center overflow-hidden">
                            <div>
                                <Image width={500} height={500} 
                                    className="transform hover:scale-110 transition-transform duration-300"
                                    src="/AccountSave.webp"
                                    alt=''
                                />
                            </div>
                            <div>
                                <h1>SAVING ACCOUNTS

                                </h1>
                                <p>ZET offers range of savings account that suits your personal needs for the bankin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
