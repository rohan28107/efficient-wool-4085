import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, GridItem, Heading, SimpleGrid, Box, useColorModeValue  } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";


const WomenPage = () =>{
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://rohan-lyst-api.onrender.com/womensproducts`)
        .then((res) => {
            setData(res.data);
        })
    },[]);

    console.log(data);
    return (
        <div>
            {/* #f5f4f2 */}
            <Box  h={100}  alignItems='center' p={5} border='3px' borderColor='black.200' bg={useColorModeValue('#f5f4f2', 'black')}>
                <Heading w={{base:200,sm:300, md:500, lg:1500}}  color={useColorModeValue('gray.700', 'gray.200')} as='h3' size='xl' marginRight={900}>WOMEN'S CLOTHING</Heading>
            </Box>
            
            <div>
                <SimpleGrid  columns={{sm: 2, md: 3, lg:4}} gap={8}>
                    
                    {data?.length > 0 && data.map((e) => {
                        return (<GridItem key={e.id}>
                            <ProductCard 
                                category={e.category} 
                                image={e.image} 
                                id={e.id}
                                description={e.description}
                                title={e.title}
                                price={e.price}
                                rating={e.rating.rate}
                                count={e.rating.count}
                            />
                        </GridItem>
                        )
                    })}

                </SimpleGrid>
            </div>
        </div>
    )
}

export default WomenPage;