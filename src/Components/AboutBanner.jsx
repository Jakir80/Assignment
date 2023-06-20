const AboutBanner = () => {
    return (
        <div
            className="bg-cover bg-no-repeat h-screen w-screen flex justify-center items-center"
            style={{ backgroundImage: 'url("OurMission.webp")' }}
        >
            <div className="text-white text-center">
                <h1 className="text-4xl font-bold">Our Mission</h1>
                <p>
                    Enabling financial inclusion for the next billion Indians <br /> 
                    & making their Zindagi Set. <br /> Building a platform that enables you to sell
                    financial products & earn up to Rs. 1 lakh every month. <br />
                    EARN BETTER. LIVE BETTER.</p>
            </div>
        </div>
    );
};

export default AboutBanner;

