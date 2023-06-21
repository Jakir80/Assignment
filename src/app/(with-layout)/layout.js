'use client'
import Banner from "@/Components/Banner";
import ChoiceUse from "@/Components/ChoiceUse";
import MySwiper from "@/Components/MySwiper";
import Service from "@/Components/Service";
import Shape from "@/Components/Shape";

const WithLayout = ({ children }) => {
    return (
        <div className="mx-auto m-auto">
          
            <Banner></Banner>
            <MySwiper></MySwiper>
            <Service></Service>
            <Shape></Shape>
            <ChoiceUse></ChoiceUse>
                
         
            {children}
        
        </div>
    );
};

export default WithLayout;