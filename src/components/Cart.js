import {useSelector} from "react-redux";

const Cart =()=>{

    const cartItems = useSelector(state=>state.cart.items);
    return(
        <>      
        <div className="my-2 mx-4 px-8 text-2xl font-bold inline-block ">Cart Items</div>
         {cartItems.map((ele)=><div className="border-l-2 my-0 ml-16 p-4 text-lg font-semibold" key={`${cartItems.length}`+`${ele}`}>{ele}</div>)}
        </>
    )
}

export default Cart;