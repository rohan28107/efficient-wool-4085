import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from "react"
  // import { Link as RouterLink} from "react-router-dom";
  import { Navigate } from "react-router-dom";

  
  export default function Login() {
    const [formData, setFormData] = useState({
      email: '', // required
      password: '' // required
  })

  function handleSubmit(e) {
      // e.preventDefault();
      // console.log({formData});
      fetch(`https://rohan-lyst-api.onrender.com/users?email=${formData.email}&password=${formData.password}`, {
        // /posts?title=json-server&author=typicode
          method: 'GET',
          headers: {'Content-Type' : 'application/json'},
          // body: JSON.stringify(formData)
      })
      .then(res =>
        {console.log(res.body);
         return res.json()}
         )
      .then(data => console.log(data))
  }

  function handleChange(e) {
      setFormData({...formData, [e.target.name] : e.target.value})
  }

  // console.log(formData);
    return (
      <div>
        <div>
          <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                  to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                </Text>
              </Stack>
              <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                  {/* <form onSubmit={handleSubmit}>

                  </form> */}
                <Stack spacing={4} >
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input 
                      type='text' 
                      placeholder='Email' 
                      value={formData.email} 
                      name='email' 
                      onChange={e => handleChange(e)} 
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input 
                      type='text' 
                      placeholder='Password' 
                      value={formData.password} 
                      name='password'
                      onChange={e => handleChange(e)} 
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Checkbox>Remember me</Checkbox>
                      <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack>
                    {/* <RouterLink to="/login"> */}
                      <Button
                        onClick={handleSubmit}
                          type='submit'
                          bg={'blue.400'}
                          color={'white'}
                          _hover={{
                            bg: 'blue.500',
                            
                          }}>
                        Sign in
                      </Button>
                    {/* </RouterLink> */}

                    
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
      </div>
      </div>
      
      
    );
  }