import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);


    const handleClearCart =()=>{
        console.log("clicked");
    }

    return(
        <div className="text-center">
            <h1 className="m-4 p-4 text-lg font-bold">Cart</h1>
            <div className="w-6/12 mx-auto">

                <button className="m-2 p-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}>
                Clear Cart</button>
                {cartItems.length==0&&<h1>Cart is empty. Add something</h1>}
                <ItemLists items={cartItems}/>
            </div>  
        </div>
    )
}

export default Cart;