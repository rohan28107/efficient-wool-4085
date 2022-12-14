import React, {useState} from "react";
import ImageSlider from "../Components/ImageSlider";
import {Footer, LargeWithAppLinksAndSocial} from "../Components/Footer"


const HomePage = () =>{
    const slides = [
        {url: "https://cdna.lystit.com/cms/YIF_Banner_XL_Desktop_76bdba2aa5.jpg", title:"img1"},
        {url: "https://cdna.lystit.com/cms/EN_XL_1be4462434.png", title: 'img2'},
    ];

    const containerStyles = {
        width: "100%",
        height: "520px",
        margin: "0 auto",
      };
    
    return (
        <div>
            {/* <Image src="https://cdna.lystit.com/cms/YIF_Banner_XL_Desktop_76bdba2aa5.jpg" alt='carosal1'/> */}
            {/* <Image src="https://cdna.lystit.com/cms/EN_XL_1be4462434.png" alt='carosal1'/> */}
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>

            <div>
                <Footer />
                <LargeWithAppLinksAndSocial />
            </div>
        </div>
    )
}
  

export default HomePage;    

