import styled from 'styled-components'

const Styleheadrow = styled.div`
 
display: flex;
padding-bottom: 0.625rem;
align-items: flex-start;
align-self: stretch;

`

const CartHeadRow = () => {
    return ( <Styleheadrow>
        
            <p>Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            
            
        
    </Styleheadrow> );
}
 
export default CartHeadRow;