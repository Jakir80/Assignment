'use client'
import AboutBanner from "@/Components/AboutBanner";
import Featured from "@/Components/Featured";
import Founder from "@/Components/Founder";
import Growth from "@/Components/Growth";
import Investors from "@/Components/Investors";

const About = () => {
    return (
        <div>
          <AboutBanner></AboutBanner>
          <Growth></Growth>
          <Featured></Featured>
          <Investors></Investors>
          <Founder></Founder>
          {/* <FooterImage></FooterImage> */}
        
        </div>
    );
};

export default About;