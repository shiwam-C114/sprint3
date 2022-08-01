import { Center } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductItem from "./ProductItem";


const Products = () => {

  const [cart, setCart] = useContext(CartContext)

  async function fetchProducts() {
    try {
      let res = await fetch("http://localhost:8080/products")
      res = await res.json()
      console.log(res)
      setData(res)
      // setCart(res)
    
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchCart() {
    try {
      let res = await fetch("http://localhost:8080/cartitems")
      res = await res.json()
      console.log(res)
      // setData(res)
      setCart(res)
    
    } catch (error) {
      console.log(error)
    }
  }

  const [Data, setData] = useState([])

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])
  

  return <>
    {
      Data.map(ele=>(
        <ProductItem key={ele.id} product={ele} />
      ))
    }

  </>;
};

export default Products;
