import React from 'react'
import styles from "../../../../styling/StartPageStyle.module.css"
import ProductCard from '../../listingPage/sections/ProductCard';
import GetApi from '../../../../Products/api';

import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../listingPage/sections/ProductCardContainer";

const newProductFilter =  "products?filters[isNew][$eq]=True&populate=*";

function NewProductsContainer() {

  const [newProducts, setNewProducts] = useState(null)

  const prod = useContext(ProductContext)

  useEffect(() => {
    const fetchNewProductData = async () => {
      try {
        const result = await GetApi(newProductFilter);
        setNewProducts(result.data.data)
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchNewProductData();
    
  },[])

  
  const Kolla = () => {
    
    if (newProducts){
      return newProducts.map((newProduct) => (
        <ProductCard key={newProduct.id} value={prod.product}/>
      ))
    }
  }

  return (
    <div>
      <Kolla />
    </div>
  )
}

export default NewProductsContainer