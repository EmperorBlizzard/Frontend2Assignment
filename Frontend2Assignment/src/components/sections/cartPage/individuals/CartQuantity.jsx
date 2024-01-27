import styled from "styled-components";



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

