import React, { useContext, useState } from "react";
import { CartContext } from "../../../../App";

const QuantityButton = ({ productId }) => {
    const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleIncrease = () => {
        increaseQuantity(productId);
    };

    const handleDecrease = () => {
        decreaseQuantity(productId);
    };

    return (
        <div>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
};

export default QuantityButton;