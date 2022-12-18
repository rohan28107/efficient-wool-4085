import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Box, Flex, Heading, useColorModeValue,Spacer, Text, FormControl, Select, FormLabel, Button, Square, Center  } from "@chakra-ui/react";
import SearchBar from '../Components/SearchBar';
import ListPage from '../Components/ListPage';
import LoadingIndicator from "../Components/LoadingIndicator";
import { Link as RouterLink} from "react-router-dom";



const getDatasPage = async (page = 1) => {
    let response = await axios.get(`https://rohan-lyst-api.onrender.com/allproducts?_page=${page}`)
    return response;
} 

const AllProducts = () =>{
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true);
        // axios.get(`https://rohan-lyst-api.onrender.com/allproducts?_page=${page}`)
        getDatasPage(page)
        .then((res) => {
            setData(res.data);
            setSearchResults(res.data);
            setLoading(false);
            // console.log(sortPrice);
        })
        .catch((err) => {
            setLoading(false);
            console.log(err);
        })
    },[page]);
    

    const nextPage = () => setPage(prev => prev + 1)

    const prevPage = () => setPage(prev => prev - 1)

    return (
        <div>
            <Box  h={100} alignItems='center' p={5} border={1} borderColor='black' bg={useColorModeValue('#f5f4f2', 'black')}>
                <Heading w={{base:200,sm:300, md:500, lg:1500}} color={useColorModeValue('gray.700', 'gray.200')}  as='h3' size='xl' marginRight={900}>All Products</Heading>
            </Box>
            <div>
                    <Flex w='80%'>
                        <Box w='50%'>
                            <SearchBar  datas={datas} setSearchResults={setSearchResults} />
                        </Box>
                        <Box>
                            <Flex>
                                <Center w='70px'><Text as='h1'>Filter By:</Text></Center>
                                <Spacer />
                                <Box w='100px'>
                                    <RouterLink to="/womensproducts">
                                        <Button>WOMEN</Button>
                                    </RouterLink>
                                </Box>
                                <Spacer />
                                <Box w='100px'> 
                                    <RouterLink to="/mensproducts">
                                        <Button>MEN</Button>
                                    </RouterLink>
                                </Box>
                            </Flex>
                            
                        </Box>
                        
                        {/* <Box>
                                <Heading as='h5'>Price Sort</Heading>
                                <Button onClick={handleLowToHigh()}>Low to High</Button>
                                <Button onClick={handleHighToLow()}>High to Low</Button>
                        </Box> */}
                    </Flex>

                    {loading ? (<LoadingIndicator/>) : (<ListPage searchResults={searchResults} loading={loading} page={page}/>)}
                        
                    <Box>
                        <Button onClick={prevPage} disabled={page === 1}>Prev Page</Button>
                        <Button>{page}</Button>
                        <Button onClick={nextPage} disabled={page == 4}>Next Page</Button>
                    </Box>
                
            </div>
        </div>
    )
}

export default AllProducts;