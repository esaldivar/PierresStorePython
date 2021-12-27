import OrderSummary from '../components/OrderSummary';
import Cart from '../components/Cart';
import { useAppSelector, RootState } from '../types/reduxTypes';
import { shoppingCartProps } from '../types/storeTypes';

const ShoppingCart = () => {
  const { shoppingCart } = useAppSelector(
    (state: RootState) => state.inventory
  );
  const userId: number | null = localStorage.getItem('userId')
    ? parseInt(localStorage.getItem('userId'))
    : null;

  console.log(shoppingCart);

  const totalPrice = shoppingCart.reduce(
    (totalPrice: number, product: shoppingCartProps): number => {
      totalPrice += parseInt(product.price);
      return totalPrice;
    },
    0
  );

  return (
    <div className="flex justify-center w-full m-auto">
      {userId !== null ? (
        <div className="flex w-10/12 bg-white bg-opacity-50 rounded searchBorder">
          <Cart />
          <OrderSummary total={totalPrice} />
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
