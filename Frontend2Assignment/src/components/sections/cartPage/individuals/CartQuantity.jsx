
const CartQuantity  = () => {

function handleplus () {
  console.log('+')
}



    return ( 
        <div>
        <button>-</button>
        <input text="number"  placeholder="Kolla lite"/>
        <button onClick={handleplus}>+</button>
       </div>
     );
}
 
export default CartQuantity ;

