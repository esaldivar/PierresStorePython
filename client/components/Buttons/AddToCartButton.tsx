import {
  useAppDispatch,
  useAppSelector,
  RootState,
} from '../../types/reduxTypes';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../../redux/actionReferences';
import { addToCartBtnProps, productInCart } from '../../types/storeTypes';

const AddToCartButton = (props: addToCartBtnProps) => {
  const dispatch = useAppDispatch();
  const { addToCart, updateTotal } = bindActionCreators(
    inventoryActionCreator,
    dispatch
  );
  const { shoppingCart } = useAppSelector(
    (state: RootState) => state.inventory
  );

  const cartDetails: productInCart = {
    productName: props.productName,
    price: props.price,
    imageUrl: props.imageUrl,
  };

  const setCart = (product: productInCart): void => {
    let dontAdd = false;
    shoppingCart.forEach((cartItem: productInCart) => {
      if (cartItem.productName === props.productName) {
        dontAdd = true;
      }
    });
    if (dontAdd) {
      console.log(props.productName + ' not added!');
      return;
    }
    const newCart = shoppingCart;
    newCart.push(product);
    addToCart(newCart);
    updateTotal(parseInt(cartDetails.price));
  };

  return (
    <button
      className="flex px-4 py-2 m-auto text-white rounded bg-greenTitle hover:bg-green-600"
      onClick={() => {
        setCart(cartDetails);
      }}
    >
      {props.text}
    </button>
  );
};

export default AddToCartButton;
