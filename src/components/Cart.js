import {useSelector} from "react-redux";

const Cart =()=>{

    const cartItems= useSelector(state=>state.cart.items);
    return(
        cartItems.map((ele)=><div className='p-2 m-5 rounded-xl text-lg font-semibold' key={`${cartItems.length}`+`${ele}`}>{ele}</div>)
    )
}

export default Cart;