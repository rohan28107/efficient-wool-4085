import React, {useState, useEffect} from "react";
import ImageSlider from "../Components/ImageSlider";
import {Footer, LargeWithAppLinksAndSocial} from "../Components/Footer"
import CategoryHeading from "../Components/CategoryHeading"
import MainCard from "../Components/MainCard";
import axios from "axios";
import { GridItem, Grid, SimpleGrid } from "@chakra-ui/react";
import StatsTitleDescription from "../Components/StatsTitleDescription";


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

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://rohan-lyst-api.onrender.com/main`)
            .then((res) => {
                setData(res.data);
                // console.log(res.data);
            },[]);
    })
    
    return (
        <div>
            {/* <Image src="https://cdna.lystit.com/cms/YIF_Banner_XL_Desktop_76bdba2aa5.jpg" alt='carosal1'/> */}
            {/* <Image src="https://cdna.lystit.com/cms/EN_XL_1be4462434.png" alt='carosal1'/> */}
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
            <div>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg:4 }} gap={4}>
                    {data?.length > 0 && data.map((e) => {
                        return (
                            <GridItem key={e.id} h='60%'>
                                <MainCard 
                                    id={e.id}
                                    title={e.title}
                                    image={e.image}
                                /> 
                            </GridItem>
                        )
                    })}
                </SimpleGrid>
            </div>
            <div>
                <StatsTitleDescription />
            </div>
            <div>
                <CategoryHeading />
            </div>
        </div>
    )
}
  

export default HomePage;    

