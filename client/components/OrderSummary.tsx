import CheckOutButton from './CheckOutButton';

const OrderSummary = () => {
  return (
    <div className="flex-col w-1/5 bg-red-400">
      <h1>Order Summary</h1>
      <p>Subtotal # of items here</p>
      <p>Estimated tax</p>
      <hr></hr>
      <CheckOutButton />
    </div>
  );
};

export default OrderSummary;
