import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import SocialMedia from "../Components/SocialMedia";
  import { useState } from 'react';
  // import { Link as RouterLink} from "react-router-dom";
  import { useNavigate } from "react-router-dom";



  export default function Register() {
    const [formData, setFormData] = useState({
      email: '', // required
      password: '', // required
      // username: '' // optional
  })
  const navigate = useNavigate();

  function handleSubmit(e) {
    console.log("hello");
      e.preventDefault();
      console.log(formData);

      fetch('https://rohan-lyst-api.onrender.com/users', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(formData)
      })
      .then(res =>{console.log({res}); res.json()})
        navigate("/login")

      // .then(data => {console.log({data}); console.log(data)})
      // console.log(formData);
  }

  function handleChange(e) {
      setFormData({...formData, [e.target.name] : e.target.value})
  }

// console.log(formData);
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Create Account</Heading>
            <form onSubmit={handleSubmit}>
              <FormControl id="email">        
                <FormLabel>Email address</FormLabel>
                <Input 
                  type="email" 
                  value={formData.email} 
                  name='email' 
                  onChange={e => handleChange(e)} 
                />
                
              </FormControl>
            {/* <FormControl id="password"> */}
              <FormLabel>Password</FormLabel>
              <Input 
                type="password" 
                value={formData.password} 
                name='password' 
                onChange={e => handleChange(e)}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
               />
            {/* </FormControl> */}
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              {/* <RouterLink to="/login"> */}
                <Button colorScheme={'blue'} variant={'solid'} type='submit'>
                  Sign Up
                </Button>
              {/* </RouterLink> */}
              
              
            </Stack>
              </form>
            <SocialMedia />
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://cdna.lystit.com/cms/LYST_600x600_2_1_43b30fb898.jpg'
              // https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80
            }
          />
        </Flex>
      </Stack>
    );
  }