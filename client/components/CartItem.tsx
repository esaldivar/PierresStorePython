import { useState } from 'react';
import { cartItemProps, productDetails } from '../types/utilityTypes';
import { upperCaseFirstChar, numberWithCommas } from '../utilities/helperFuncs';

const CartItem = (props: cartItemProps) => {
  const { productName, price, imageUrl } = props.props;
  const initialPrice = parseInt(price);
  const [productDetails, setProductDetails] = useState<productDetails>({
    quantity: 1,
    currentPrice: initialPrice,
    priceChange: false,
  });

  return (
    <div className="flex items-center w-full py-4">
      <div className="w-1/5">
        <img
          className="m-auto"
          src={imageUrl}
          alt={productName}
          title={productName}
        />
      </div>
      <div className="w-2/5">
        <h1 className="mb-6 font-semibold text-black">
          {upperCaseFirstChar(productName)}
        </h1>
        <label htmlFor="quantity">Quantity:</label>
        <select
          name="quantity"
          className="ml-4"
          value={productDetails.quantity}
          onChange={(e) => {
            console.log('changing number');

            if (
              parseInt(e.target.value) !== productDetails.quantity &&
              parseInt(e.target.value) !== 1
            ) {
              console.log('entering the conditional block');
              setProductDetails({
                ...productDetails,
                currentPrice: parseInt(e.target.value) * initialPrice,
                priceChange: true,
                quantity: parseInt(e.target.value),
              });
            } else if (parseInt(e.target.value) === 1) {
              setProductDetails({
                ...productDetails,
                currentPrice: initialPrice,
                priceChange: false,
                quantity: 1,
              });
            }
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="w-1/5 m-auto">
        <h1 className="flex items-center m-auto font-bold text-center text-black text-3x1">
          {numberWithCommas(productDetails.currentPrice.toString())}
          <img
            className="w-5 h-5"
            title="gold"
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
            alt="gold"
          />
        </h1>

        {productDetails.priceChange && (
          <h1 className="flex items-center ml-4 text-xs italic text-center text-gray-500">
            {numberWithCommas(initialPrice.toString())}
            <img
              className="w-5 h-5"
              title="gold"
              src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
              alt="gold"
            />
            each
          </h1>
        )}
      </div>
      <div className="w-1/5">
        <h1 className="text-black">Remove item</h1>
      </div>
    </div>
  );
};

export default CartItem;
