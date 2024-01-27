import CartProductsContainer from "../individuals/CartProductsContainer";
import CartQuantityContainer from "../individuals/CartQuantityContainer";
import CartSubTotalContainer from "../individuals/CartSubTotalContainer";

const CartContainer = () => {
    return (
        <>
        
            <CartProductsContainer />
            <CartQuantityContainer />
            <CartSubTotalContainer />
        </>);
}

export default CartContainer;