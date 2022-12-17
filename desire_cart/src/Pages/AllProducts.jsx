import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, useColorModeValue  } from "@chakra-ui/react";
import SearchBar from '../Components/SearchBar';
import ListPage from '../Components/ListPage';


const AllProducts = () =>{
    const [datas, setData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
        axios.get(`https://rohan-lyst-api.onrender.com/allproducts`)
        .then((res) => {
            setData(res.data);
            setSearchResults(res.data);
        })
    },[]);

    console.log(datas);
    return (
        <div>
            <Box  h={100} alignItems='center' p={5} border={1} borderColor='black' bg={useColorModeValue('#f5f4f2', 'black')}>
                <Heading w={{base:200,sm:300, md:500, lg:1500}} color={useColorModeValue('gray.700', 'gray.200')}  as='h3' size='xl' marginRight={900}>All Products</Heading>
            </Box>
            <div>
                <SearchBar datas={datas} setSearchResults={setSearchResults} />                
                <ListPage searchResults={searchResults} />
            </div>
        </div>
    )
}

export default AllProducts;