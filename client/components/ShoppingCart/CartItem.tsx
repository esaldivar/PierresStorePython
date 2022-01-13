import {
  useAppDispatch,
  useAppSelector,
  RootState,
} from '../../types/reduxTypes';
import { productInCart } from '../../types/storeTypes';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../../redux/actionReferences';
import { useState } from 'react';
import { cartItemProps, productDetails } from '../../types/utilityTypes';
import {
  upperCaseFirstChar,
  numberWithCommas,
} from '../../utilities/helperFuncs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartItem = (props: cartItemProps) => {
  const dispatch = useAppDispatch();
  const { updateTotal, addToCart } = bindActionCreators(
    inventoryActionCreator,
    dispatch
  );
  const { shoppingCart } = useAppSelector(
    (state: RootState) => state.inventory
  );
  const { productName, price, imageUrl } = props.props;
  const initialPrice = parseInt(price);
  const [productDetails, setProductDetails] = useState<productDetails>({
    quantity: 1,
    currentPrice: initialPrice,
    priceChange: false,
  });

  const quantityChanger = (e: any): void => {
    const newPrice: number = parseInt(e.target.value) * initialPrice;
    const currentPrice: number = productDetails.currentPrice;
    const difference: number = newPrice - currentPrice;
    if (
      parseInt(e.target.value) !== productDetails.quantity &&
      parseInt(e.target.value) !== 1
    ) {
      updateTotal(difference);
      setProductDetails({
        ...productDetails,
        currentPrice: parseInt(e.target.value) * initialPrice,
        priceChange: true,
        quantity: parseInt(e.target.value),
      });
    } else if (parseInt(e.target.value) === 1) {
      updateTotal(difference);
      setProductDetails({
        ...productDetails,
        currentPrice: initialPrice,
        priceChange: false,
        quantity: 1,
      });
    }
  };

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
            quantityChanger(e);
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
        <button
          onClick={() => {
            console.log('removing item');
            const currentPrice: number = -productDetails.currentPrice;
            updateTotal(currentPrice);
            const newCart = shoppingCart.filter((product: productInCart) => {
              if (product.productName !== productName) {
                return product;
              }
            });
            addToCart(newCart);
          }}
        >
          <FontAwesomeIcon
            className="fill-current text-greenTitle"
            icon={faTrashAlt}
            size="2x"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
