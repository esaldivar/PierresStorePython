import { useAppSelector, RootState } from '../types/reduxTypes';
import CheckOutButton from './CheckOutButton';
import { totalInterface } from '../types/utilityTypes';

const OrderSummary = () => {
  const { total } = useAppSelector((state: RootState) => state.inventory);
  //   const totalSum = total.total;
  const tax = Math.ceil(0.08 * total);
  const actualPrice = total + tax;

  return (
    <div className="flex-col w-1/5 px-2 bg-lightBrown">
      <div className="flex mt-2">
        <h1 className="font-bold text-gray-700">Order Summary</h1>
      </div>
      <div className="flex justify-between mt-4">
        <p>Subtotal</p>
        <p className="flex items-center">
          {total}
          <img
            className="w-5 h-5"
            title="gold"
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
            alt="gold"
          />
        </p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Estimated tax</p>
        <p className="flex items-center">
          {tax}
          <img
            className="w-5 h-5"
            title="gold"
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
            alt="gold"
          />
        </p>
      </div>
      <hr className="mt-2"></hr>
      <div className="flex justify-between mt-4 mb-6">
        <h1 className="font-bold text-gray-700">Total</h1>
        <p className="flex items-center font-bold text-gray-700">
          {actualPrice}
          <img
            className="w-5 h-5"
            title="gold"
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
            alt="gold"
          />
        </p>
      </div>
      <CheckOutButton />
    </div>
  );
};

export default OrderSummary;
