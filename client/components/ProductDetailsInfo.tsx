import { productDetailsProps, singleResult } from '../types/storeTypes';

const ProductDetailsInfo = (productInfo: productDetailsProps) => {
  const currentProduct: singleResult | undefined = productInfo.productInfo;

  return (
    <div>
      <h1>{currentProduct?.productName}</h1>
      <h1>{currentProduct?.price}</h1>
    </div>
  );
};

export default ProductDetailsInfo;
