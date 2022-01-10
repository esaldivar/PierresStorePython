import OrderSummary from '../components/OrderSummary';
import Cart from '../components/Cart';
import { useAppSelector, RootState } from '../types/reduxTypes';

const ShoppingCart = () => {
  const { shoppingCart } = useAppSelector(
    (state: RootState) => state.inventory
  );
  const userId: number | null = localStorage.getItem('userId')
    ? parseInt(localStorage.getItem('userId'))
    : null;

  console.log(shoppingCart);

  return (
    <div className="flex justify-center w-full m-auto">
      {userId !== null ? (
        <div className="flex w-10/12 bg-white bg-opacity-50 rounded searchBorder">
          <Cart />
          <OrderSummary />
        </div>
      ) : (
        <div>
          <h1>Not Logged In</h1>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
