import { createContext, useState, useEffect } from "react";

import Cartheadrow from "../individuals/CartHeadRow";
import CartProductCardContainer from "./CartProductCardContainer";
import InputPlusLink from "../individuals/Inputpluslink";
import products from "../../../../Products/Products.json"
import CartProductDescription from "../individuals/CartProductDescription";
import SummaryContainer from "./SummaryContainer";

export const TempCartContext = createContext(null)

function CartContent() {



    return (
        <>
            <Cartheadrow />
            {
                products.products.map(product => {
                    return (
                        <TempCartContext.Provider id={product.id} value={product}>
                            <CartProductCardContainer />
                        </TempCartContext.Provider>
                    )
                })
            }
           
            <InputPlusLink />
            
        </>
    )
}

export default CartContent;