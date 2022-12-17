import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom";
  
  export default function WomensProductCard({ 
    image, 
    id, 
    description, 
    category,
    title, 
    price, 
    rating, 
    count}) {
    return (
      <Center py={12}>
        <RouterLink to={`/womensproducts/${id}`}>
        {/* console.log(id); */}
          <Box
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
                backgroundImage: `url(${image})`,
                // filter: 'blur(15px)',
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
                src={image}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {category}
              </Text>
              <Heading fontSize={'lg'} fontFamily={'body'} fontWeight={500}>
                {title}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={500} fontSize={'lg'}>
                  Price: ₹ {price}
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  {Math.floor(Math.random() * 150)}
                </Text>
                <Text  color={'gray.600'}>
                  {rating}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </RouterLink>
      </Center>
    );
  }

