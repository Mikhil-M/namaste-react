import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items || []);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto text-center p-4">
      <h1 className="font-bold text-2xl p-4">Cart</h1>
      <div className="text-right p-2">
        <button
          className="p-2 bg-orange-500 text-white rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <h1>Your cart is empty. Please add items to the cart!</h1>
      )}
      <ItemList itemCards={cartItems} />
    </div>
  );
};

export default Cart;
