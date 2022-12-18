import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom";

const AllProductCard = ({ data }) => {


    return (
        <Center py={12}>
          <RouterLink to={`/allproducts/${data.id}`}>
    
            <SimpleGrid
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              h={380}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${data.image})`,
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}>
                <Image
                  rounded={'lg'}
                  height={260}
                  width={282}
                  objectFit={'cover'}
                  src={data.image}
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  {data.category}
                </Text>
                <Heading fontSize={'lg'} fontFamily={'body'} fontWeight={500}>
                  {data.title}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                  <Text fontWeight={500} fontSize={'lg'}>
                    Price: ₹ {data.price}
                  </Text>
                  <Text textDecoration={'line-through'} color={'gray.600'}>
                    {Math.floor(Math.random() * 150)}
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </RouterLink>
        </Center>
      );
}
export default AllProductCard