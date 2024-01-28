import styled from "styled-components";

const StyledQuantitySelector = styled.div`
display: flex;
width: 9.375rem;
align-items: flex-start;
`

const CartQuantity  = () => {

function handleplus () {
  console.log('+')
}



    return ( 
        <StyledQuantitySelector>
        <button>-</button>
        <input text="number"  placeholder="Kolla lite"/>
        <button onClick={handleplus}>+</button>
       </StyledQuantitySelector>
     );
}
 
export default CartQuantity ;