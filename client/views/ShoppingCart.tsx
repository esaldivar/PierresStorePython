import OrderSummary from '../components/OrderSummary';

const ShoppingCart = () => {
  const userId: number | null = localStorage.getItem('userId')
    ? parseInt(localStorage.getItem('userId'))
    : null;

  return (
    <div className="flex justify-center w-full m-auto">
      {userId !== null ? (
        <div className="flex w-10/12 bg-white bg-opacity-50 rounded searchBorder">
          <div className="flex-col w-4/5 bg-blue-200">Shopping Cart Layout</div>
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
