import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Input,
  InputGroup, 
  InputLeftElement,
  SimpleGrid,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, Search2Icon } from '@chakra-ui/icons';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link as RouterLink} from "react-router-dom";
import Desire_Cart from "../Images/Desire_Cart.png"


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <RouterLink to="/">
              <Box>
                <img
                  // src='https://www.canva.com/design/DAFUqd5imSs/fLPeiKfkjy1ythQ2fILu0A/view' 
                  src={Desire_Cart}
                  alt='image'
                  width={60}
                />
              </Box>
            </RouterLink>
          </Box>
          <Box>
            {/* <RouterLink to="/allproducts">
              <Text>All Products</Text>
            </RouterLink> */}
          </Box>
          {/* <Box>
            <RouterLink to="/womensproducts">
              <Text>WOMEN</Text>
            </RouterLink>
          </Box>
          <Box>
            <RouterLink to="/mensproducts">
              <Text>MEN</Text>
            </RouterLink>
          </Box> */}
          <Box>
            <Stack spacing={3}>
                {/* <InputGroup border={20} w='100%'>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<Search2Icon color='black.300' />}
                    
                  />
                  <Input type='text' placeholder='SEARCH PRODUCTS'  w={900} id="search" />
                </InputGroup>               */}
            </Stack>
          </Box>
          <Box>
            <Flex alignItems={'center'}>
              <RouterLink to="/allproducts">
                <Button>All Products</Button>
              </RouterLink>
              <RiShoppingCart2Fill size={25} />
              <RouterLink to="/login">
                <Button >Login</Button>
              </RouterLink>
              <RouterLink to="/register">
                <Button>Register</Button>
              </RouterLink>
              
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
