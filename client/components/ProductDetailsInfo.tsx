import { useAppSelector, RootState } from '../types/reduxTypes';
import { productDetailsProps } from '../types/storeTypes';
import AddToCartButton from './AddToCartButton';
import FavoriteBtn from './FavoriteBtn';
import { upperCaseFirstChar } from '../utilities/helperFuncs';

const ProductDetailsInfo = (productInfo: productDetailsProps) => {
  const currentProduct = productInfo?.productInfo;
  const { heartedFavs } = useAppSelector((state: RootState) => state.layout);

  const toggleHeartFav = heartedFavs.includes(currentProduct?.productName);
  const capName =
    currentProduct !== undefined
      ? upperCaseFirstChar(currentProduct.productName)
      : 'Product not found';

  return (
    <div className="flex-col w-1/2 m-auto bg-white bg-opacity-50 rounded searchBorder">
      <div className="flex items-center w-full py-2 m-auto bg-greenTitle">
        <h1 className="m-auto text-center">{capName}</h1>
      </div>
      <div className="flex">
        <div className="w-1/4 px-2 py-6 m-auto ">
          <img
            className="w-24 h-24 mb-"
            src={currentProduct?.imageUrl}
            alt={currentProduct?.productName}
            title={currentProduct?.productName}
          />
          <p className="flex items-center justify-center mb-4 font-bold text-center">
            {currentProduct?.price}
            <img
              className="w-5 h-5"
              title="gold"
              src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
              alt="gold"
            />
          </p>
        </div>
        <div className="flex-col w-3/4 px-2 m-auto">
          <p className="mb-6 italic">{currentProduct?.information}</p>
          <div className="flex">
            {currentProduct !== undefined && (
              <FavoriteBtn
                toggle={toggleHeartFav}
                product={currentProduct.productName}
              />
            )}
            {currentProduct !== undefined && (
              <AddToCartButton
                text="Add to Cart"
                productName={currentProduct.productName}
                price={currentProduct.price}
                imageUrl={currentProduct.imageUrl}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
