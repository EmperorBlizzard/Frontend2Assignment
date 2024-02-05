import { createContext } from "react";
import {CartContext} from "../App.jsx";
import Cartheadrow from "../individuals/CartHeadRow";
import CartProductCardContainer from "./CartProductCardContainer";
import InputPlusLink from "../individuals/Inputpluslink";
import products from "../../../../Products/Products.json"
import SummaryContainer from "./SummaryContainer";

export const TempCartContext = createContext(null)

function CartContent() {



    return (
        <>
            <Cartheadrow />
            <CartProductCardContainer />
            <InputPlusLink />
            
        </>
    )
}

export default CartContent;