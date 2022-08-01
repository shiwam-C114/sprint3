import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,

  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AuthContext } from "../context/AuthContext";


const Nav = () => {
  return <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  </div>;
};




export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLogin,toggleLogin] = useContext(AuthContext)

  function logOut() {
    toggleLogin(false)
    console.log("first", isLogin)
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <nav>
            <Button>

            <Link to="/">Home</Link> 
            </Button>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
          </nav>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                
                  <br />
                  <MenuDivider />
                  {
                    isLogin?<> <MenuItem onClick={logOut}>Logout</MenuItem></>:
                 <> </>
                  }
              
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
