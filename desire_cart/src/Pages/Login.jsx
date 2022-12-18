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
  import { useState, useRef, useContext } from "react"
  import { useNavigate } from "react-router-dom";
  // import { AuthContext } from "../Context/AuthContext";


  
  export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const btnRef = useRef();
    const navigate = useNavigate();
    // const {authState, loginUser} = useContext(AuthContext);
  //   const [formData, setFormData] = useState({
  //     email: '', // required
  //     password: '' // required
  // })
  // const navigate = useNavigate();


  function handleSubmit(e) {
      e.preventDefault();
      btnRef.current.disabled = true;

      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
      console.log({user})
      // console.log({formData});
      fetch(`https://rohan-lyst-api.onrender.com/users`, {
        // /posts?title=json-server&author=typicode
          method: 'POST',
          body: JSON.stringify(user),
          headers: {'Content-Type' : 'application/json'},
          // body: JSON.stringify(formData)
      })
      .then(res => res.json())
    .then(res => {
      navigate("/allproducts");
    })
    .catch(err => console.log(err));
  }
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
                   <form data-testid="login-form" onSubmit={handleSubmit}>
                        <Stack spacing={4} >
                        <FormControl id="email">
                          <FormLabel>Email address</FormLabel>
                          <Input 
                            type='email' 
                            placeholder='Email' 
                            name='email' 
                            ref={emailRef}
                          />
                        </FormControl>
                        <FormControl id="password">
                          <FormLabel>Password</FormLabel>
                          <Input 
                            ref={passwordRef}
                            type='password' 
                            placeholder='Password' 
                            name='password'
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
                            <Button
                                ref={btnRef}
                                type='submit'
                                value="SUBMIT" 
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                  bg: 'blue.500',
                                  
                                }}>
                              Sign in
                            </Button>                          
                        </Stack>
                      </Stack>

                   </form>
                
              </Box>
            </Stack>
          </Flex>
      </div>
      </div>
      
      
    );
  }