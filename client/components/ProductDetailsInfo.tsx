import { useAppSelector, RootState } from '../types/reduxTypes';

const ProductDetailsInfo = () => {
  const { currentProduct } = useAppSelector(
    (state: RootState) => state.inventory
  );

  return (
    <div>
      <h1>{currentProduct}</h1>
    </div>
  );
};

export default ProductDetailsInfo;
