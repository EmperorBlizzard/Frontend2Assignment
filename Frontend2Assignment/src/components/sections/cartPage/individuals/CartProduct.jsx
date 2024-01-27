/*function CartProduct (imgSrc, imgAlt, productName) {
    return (
        <div>
            <img src={imgSrc} alt={imgAlt} />
            <p>{productName}</p>

        </div>        
    )
}

export default CartProduct*/


function CartProduct () {
    return (
        <StyledCartProduct>
            <img src="" alt="" />
            <h3>Name</h3>
            <p>Artikelnummer</p>
            <p>category</p>
            <p>sex</p>
            
            <p></p>
        </StyledCartProduct>        
    )
}

export default CartProduct;