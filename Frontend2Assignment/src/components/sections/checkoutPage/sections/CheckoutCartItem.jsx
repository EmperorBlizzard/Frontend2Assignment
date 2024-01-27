import React from "react";

const CheckoutCartItem = ({product, price, quantity}) =>{
    return(
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>

        </div>

    );

}

export default CheckoutCartItem