import { Box, Center, Flex, Highlight, StatNumber } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Products from "../components/Products";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [cart] = useContext(CartContext)
  const [islogin] = useContext(AuthContext)

  function count(cart) {
    let c = 0
    for (let i = 0; i < cart.length; i++) {
      c += cart[i].count
    }
    return c
  }



  {
    if (!islogin) {
      return <Navigate to="/login" replace />;
    }
    else {

      return <>
        <Center>


          cart: {count(cart)}

        </Center>
        <Flex flexDir={"column"}>
          <Products />
        </Flex>

      </>;
    }
  }
};

export default Home;
