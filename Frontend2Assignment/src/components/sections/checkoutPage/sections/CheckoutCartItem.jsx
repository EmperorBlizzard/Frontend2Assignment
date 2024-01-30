import React from "react";

const CheckoutCartItem = ({product, price, quantity, isPacked}) =>{
    return(
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <p>{isPacked ?'yes' : 'No'}</p>

        </div>

    );

}

export default CheckoutCartItem;