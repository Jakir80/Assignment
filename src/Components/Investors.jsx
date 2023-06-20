/* eslint-disable @next/next/no-img-element */
const Investors = () => {
    return (
        <div className="container m-auto">
            <h1 className="text-center m-5 text-4xl">Meet the investor</h1>

            <div className="flex justify-around gap-4 mb-6">
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <img src="manone.webp" alt="" />
                    </div>
                    <h1>Kunal Shah</h1>
                    <p>Founder, CRED</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <img src="mantwo.webp" alt="" />
                    </div>
                    <h1>Kunal Shah</h1>
                    <p>Founder, CRED</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <img src="manthree.webp" alt="" />
                    </div>
                    <h1>Kunal Shah</h1>
                    <p>Founder, CRED</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <img src="manfours.webp" alt="" />
                    </div>
                    <h1>Kunal Shah</h1>
                    <p>Founder, CRED</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <img src="manfive.webp" alt="" />
                    </div>
                    <h1>Kunal Shah</h1>
                    <p>Founder, CRED</p>
                </div>
            </div>

            <div className="flex justify-around">
                <div className="hover:scale-110 transform transition-transform">
                    <div className="w-[400px] h-[340px]">
                        <img src="mansix.webp" alt="" />
                    </div>
                    <h1>Kunal Shah</h1>
                    <p>Founder, CRED</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div className="w-[400px] h-[340px]">
                        <img src="manseven.webp" alt="" />
                    </div>
                    <h1>Kunal Shah</h1>
                    <p>Founder, CRED</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div className="w-[400px] h-[340px]">
                        <img src="maneight.webp" alt="" />
                    </div>
                    <h1>Kunal Shah</h1>
                    <p>Founder, CRED</p>
                </div>
            </div>
        </div>
    );
};

export default Investors;
