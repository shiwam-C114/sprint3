import { Box, Button , Center, chakra, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const [cart, setCart] = useContext(CartContext);


  async function updtCart() {
    let updatedCart = await fetch("http://localhost:8080/cartitems");
    updatedCart = await updatedCart.json();
    setCart(updatedCart);
    
  }

  async function addtocart(id) {
    let item = {
      productId: id,
      count: 1,
      id,
    };
    await fetch("http://localhost:8080/cartitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  
      },
      body: JSON.stringify(item)
    });

    updtCart()
  }

  async function increment(id, val) {
    const item = {
      productId: id,
      count: cart.find((ele) => ele.id === id).count + val,
      id,
    };
    if (item.count === 0) {
      rem(id);
    } else {
    await fetch(`http://localhost:8080/cartitems/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });


     updtCart()
    }
  }

  async function rem(id) {
    await fetch(`http://localhost:8080/cartitems/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

   updtCart()
  }

  return (
    <Center textAlign={"center"}>
      <Box margin={"20px"} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Heading textAlign={"center"} >

        {product.name}
        </ Heading>
        <chakra.p>

        {product.description}
        </chakra.p>
        <Button colorScheme={"teal"} margin={"10px"}
          disabled={cart.find((ele) => ele.id === product.id)}
          onClick={() => {
            addtocart(product.id);
          }}
        >
          add to cart
        </Button >
        <chakra.h1>
          status/count: &nbsp;
        {cart.find((ele) => ele.id === product.id) ? cart.find((ele) => ele.id === product.id).count : <>item not added</>}
        </chakra.h1>
        <Button colorScheme={"teal"} margin={"10px"}
          disabled={!cart.find((ele) => ele.id === product.id)}
          onClick={() => {
            increment(product.id, +1);
          }}
        >
          increment
        </Button >
        <Button colorScheme={"teal"} margin={"10px"}
          disabled={!cart.find((ele) => ele.id === product.id)}
          onClick={() => {
            increment(product.id, -1);
          }}
        >
          decrement
        </Button >
        <Button colorScheme={"teal"} margin={"10px"}
          disabled={!cart.find((ele) => ele.id === product.id)}
          onClick={() => {
            rem(product.id);
          }}
        >
          remove
        </Button >
      </Box>
    </Center>
  );
};

export default ProductItem;
