import { useAppSelector, RootState } from '../types/reduxTypes';
import ProductDetailsInfo from '../components/ProductDetailsComponents/ProductDetailsInfo';
import { singleResult } from '../types/storeTypes';

const ProductDetails = () => {
  const { currentProduct, store } = useAppSelector(
    (state: RootState) => state.inventory
  );

  const productInfo = store.find((product: singleResult) => {
    console.log(product);
    if (product.productName === currentProduct.toLowerCase()) {
      return product;
    }
  });

  return (
    <div className="w-full m-auto">
      <ProductDetailsInfo productInfo={productInfo} />
    </div>
  );
};

export default ProductDetails;
