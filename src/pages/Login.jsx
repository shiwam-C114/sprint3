import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
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
import { useNavigate } from "react-router-dom";

const Login = () => {

  const  n = useNavigate()
  const [isLogin,toggleLogin] = useContext(AuthContext)
  const [data, setData] = useState({
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  })
  function handleLogin() {
    console.log(isLogin);
    console.log(data);
    fetch('https://reqres.in/api/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res=>res.json()).then(data=>{
      if (data.token) {
        toggleLogin(true)
       
        n("/")
      }
      else{
        toggleLogin(false)
      }
    })

  }
  return <Flex
  minH={'100vh'}
  align={'center'}
  justify={'center'}
  bg={useColorModeValue('gray.50', 'gray.800')}>
  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    <Stack align={'center'}>
      <Heading fontSize={'4xl'}>Sign in to your account</Heading>
     
    </Stack>
    <Box
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'lg'}
      p={8}>
      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input onChange={(e)=>setData({...data, email:e.target.value})} value={data.email} name="email" id="email" type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input onChange={(e)=>setData({...data, password:e.target.value})} value={data.password}  name="password" id="password" type="password" />
        </FormControl>
        <Stack spacing={10}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={'start'}
            justify={'space-between'}>
           
            <Link color={'blue.400'}>use Email: eve.holt@reqres.in </Link>
          </Stack>
          <Button
          onClick={handleLogin}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Stack>
</Flex>

};

export default Login;


