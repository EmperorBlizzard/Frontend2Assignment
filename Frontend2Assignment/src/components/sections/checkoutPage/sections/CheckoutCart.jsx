import React from "react";
import CheckoutCartItem from "./CheckoutCartItem";

const CheckoutCart = ({CheckoutCartItems}) =>{
    return(
        <div>
            <h2>Checkout cart</h2>
           {CheckoutCartItems && CheckoutCartItems.length >0 && CheckoutCartItems.map((item) =>(
            <CheckoutCartItem key={item.product.id} product={item.product} quantity ={item.quantity} />
        ))}

        </div>

    );

};
    export default CheckoutCart;