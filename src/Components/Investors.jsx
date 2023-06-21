import Image from "next/image";

const Investors = () => {
    return (
        <div className="container m-auto">
            <div className="mb-8 mt-8">
                <div className="flex justify-center items-center gap-8 w-full ">
                <div>
                        <Image width={250} height={250}   src="/inone.webp" alt='' />
                    </div>
                <div>
                        <Image width={250} height={250}   src="/intwo.webp" alt='' />
                    </div>
                <div>
                        <Image width={250} height={250}   src="/inthree.webp" alt='' />
                    </div>
                <div>
                        <Image width={250} height={250}   src="/infour.webp" alt='' />
                    </div>
                </div>
            </div>
            <h1 className="text-center m-5 text-4xl">Meet the investor</h1>

            <div className="flex justify-around gap-4 mb-6 text-center">
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <Image width={250} height={250}   src="/manone.webp" alt='' />
                    </div>
                    <h1>Kunal Shah</h1>
                    <p>Founder & CEO, MEESHO</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <Image width={250} height={250}  src="/mantwo.webp" alt='' />
                    </div>
                    <h1>Manish Shah Shah</h1>
                    <p>Founder, RAZORPAY</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <Image width={250} height={250}   src="/manthree.webp" alt='' />
                    </div>
                    <h1>lalit Keshri </h1>
                    <p>Founder, CRED</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <Image width={250} height={250}   src="/founderone.webp" alt='' />
                    </div>
                    <h1>Amrit Shah</h1>
                    <p>Founder, CRED</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div>
                        <Image width={250} height={250}   src="/manfive.webp" alt='' />
                    </div>
                    <h1>Co-Founder, HAPTIK</h1>
                    <p>Co-Founder, HAPTIK</p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="hover:scale-110 transform transition-transform">
                    <div >
                        <Image width={250} height={250}   src="/mansix.webp" alt='' />
                    </div>
                    <h1>Amrish Bao </h1>
                    <p>Founder, UNACADEMY</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div >
                        <Image width={250} height={250}  src="/manseven.webp" alt='' />
                    </div>
                    <h1>Harshib Mathor</h1>
                    <p>CEO PINLABS</p>
                </div>
                <div className="hover:scale-110 transform transition-transform">
                    <div >
                        <Image width={250} height={250}  src="/maneight.webp" alt='' />
                    </div>
                    <h1>Gokul Razarman</h1>
                    <p>Product, DOORDASH</p>
                </div>
            </div>
        </div>
    );
};

export default Investors;
