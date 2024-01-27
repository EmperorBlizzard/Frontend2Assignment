import CartProductsContainer from "../individuals/CartProductsContainer";
import CartQuantityContainer from "../individuals/CartQuantityContainer";
import CartSubTotalContainer from "../individuals/CartSubTotalContainer";

const CartContainer = () => {
    return (
        <>
        <h1>CartContainer</h1>
            <CartProductsContainer />
            <CartQuantityContainer />
            <CartSubTotalContainer />
        </>);
}

export default CartContainer;