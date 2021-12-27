import { useAppSelector, RootState } from '../types/reduxTypes';

const Cart = () => {
  const { shoppingCart } = useAppSelector(
    (state: RootState) => state.inventory
  );
  const totalPrice: number = shoppingCart.reduce(
    (totalPrice: number, product: shoppingCartProps): number => {
      totalPrice += parseInt(product.price);
      return totalPrice;
    },
    0
  );
  const numberOfItems: number = shoppingCart.length;
  return (
    <div className="flex-col w-4/5 bg-blue-200">
      <div className="flex items-center w-full py-4 bg-greenTitle">
        <h1 className="m-auto font-bold text-center">
          Cart: ${totalPrice} ({numberOfItems} items)
        </h1>
      </div>
    </div>
  );
};

export default Cart;
