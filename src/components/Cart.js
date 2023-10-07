import { useSelector } from "react-redux";
import chef from "../../chef.png";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="flex justify-start">
        <img
          className="logo ml-40 mr-10 my-20 p-2 w-80"
          alt="Chef Logo"
          src={
            chef /*to insert a local image first import it from - "../../logo.png"*/
          }
        />
        {/* <div className=" w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-200 to-transparent opacity-20 dark:opacity-100"></div> */}
        <div className="m-10">
          <div className="my-6 mx-10 px-8 text-2xl font-bold inline-block  ">
            Cart Items - {`${cartItems.length}`}
          </div>
          {cartItems.map((ele) => (
            <div
              className=" border-l-2 my-0 ml-28 py-2 px-4 text-lg font-semibold"
              key={`${cartItems.length}` + `${ele}` + Math.random()}
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
