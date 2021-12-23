import OrderSummary from '../components/OrderSummary';
import Cart from '../components/Cart';

const ShoppingCart = () => {
  const userId: number | null = localStorage.getItem('userId')
    ? parseInt(localStorage.getItem('userId'))
    : null;

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
