import { useState } from 'react';
import { cartItemProps, productDetails } from '../types/utilityTypes';
import Dropdown from 'react-bootstrap/Dropdown';

const CartItem = (props: cartItemProps) => {
  const { productName, price, imageUrl } = props.props;
  const initialPrice = parseInt(price);
  const [productDetails, setProductDetails] = useState<productDetails>({
    quantity: 0,
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
        <h1 className="text-black">{productName}</h1>
        <Dropdown className="flex items-center mr-4 align-middle cursor-pointer">
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="flex items-center mt-2 text-3xl text-white align-middle border-none hover:text-primaryBrown bg-greenTitle"
          >
            <div className="flex-col ">
              <h1 className="text-sm text-center ">Quanity {quantity}</h1>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu className="py-0 overflow-y-auto ">
            <Dropdown.Item className="m-auto text-greenTitle">2</Dropdown.Item>
            <Dropdown.Item className="m-auto text-greenTitle">3</Dropdown.Item>
            <Dropdown.Item className="m-auto text-greenTitle">4</Dropdown.Item>
            <Dropdown.Item className="m-auto text-greenTitle">5</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="w-1/5 m-auto">
        <h1 className="flex items-center m-auto font-bold text-center text-black">
          {currentPrice}
          <img
            className="w-5 h-5"
            title="gold"
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
            alt="gold"
          />
        </h1>
      </div>
      <div className="w-1/5">
        <h1 className="text-black">Remove item</h1>
      </div>
    </div>
  );
};

export default CartItem;
