import {
    Container,
    Grid,
    GridItem,
    SimpleGrid,
    Flex,
    Box,
    Text,
    Heading,
    Button,
    useColorModeValue
  } from '@chakra-ui/react';
  
  function StatsTitleDescription() {
    return (
        <div>
            {/* <Flex> */}
                {/* <Container py={5} maxW={'100%'} alignContent={'center'}> */}
                    <SimpleGrid
                        // columns={{sm: 1, md: 2, lg:5}}
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            sm: 'repeat(3, 1fr)',
                            md: 'repeat(5, 1fr)',
                        }}
                        h='400px'
                        border='1px' 
                        // borderColor='black.200' 
                        // backgroundColor='#f5f4f2'
                        bg={useColorModeValue('gray.50', 'gray.900')}
                        color={useColorModeValue('gray.700', 'gray.200')}
                        gap={6}
                    >
                    <GridItem w="100%" >
                        <Flex flexDirection={'column'}>
                        <Text fontSize={'8xl'} fontWeight={'bold'}>
                            1
                        </Text>
                        <Box fontSize={'3xl'}>
                            THE BIGGEST SELECTION
                        </Box>
                        <Box fontSize={'sm'}>
                            Shop over 12,000 brands and stores in one place.
                            Find exactly what you want with powerful search and personal recommendations.
                        </Box>
                        </Flex>
                    </GridItem>
                    <GridItem w="100%">
                        <Flex flexDirection={'column'}>
                        <Text fontSize={'8xl'} fontWeight={'bold'}>
                            2
                        </Text>
                        <Box fontSize={'3xl'}>
                        THE HOTTEST PRODUCTS
                        </Box>
                        <Box fontSize={'sm'}>
                            See what’s new and what’s trending.
                            Hit the heart to receive alerts on the latest drops from your favourite brands.
                        </Box>
                        </Flex>
                    </GridItem>
                    <GridItem w="100%">
                        <Flex flexDirection={'column'}>
                        <Text fontSize={'8xl'} fontWeight={'bold'}>
                            3
                        </Text>
                        <Box fontSize={'3xl'}>
                            THE BEST PRICES
                        </Box>
                        <Box fontSize={'sm'}>
                            Compare prices and shipping options across thousands of stores.
                            Lyst members are notified when an item goes on sale.
                        </Box>
                        </Flex>
                    </GridItem>
                    <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }} padding={50}  border='1px' borderColor='black.200' backgroundColor='#cafc4f'>
                        <Heading as={'h2'}>SIGN UP FOR SMARTER SHOPPING</Heading>
                        <Button  backgroundColor='black' marginTop={8} color='white'>Join→</Button>
                        {/* marginLeft={-250} w={100} marginTop={8} */}
                    </GridItem>
                    </SimpleGrid>
        </div>
      
    );
  }
  
  export default StatsTitleDescription;