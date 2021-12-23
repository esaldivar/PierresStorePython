import { useAppSelector, useAppDispatch, RootState } from '../types/reduxTypes';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import { singleResult } from '../types/storeTypes';
import PierreButton from './Button';
import FavoriteBtn from './FavoriteBtn';
import { Seasons } from '../utilities/seasonalData';
import { upperCaseFirstChar, numberWithCommas } from '../utilities/helperFuncs';
import { Link } from 'react-router-dom';

const Product = ({
  productName,
  imageUrl,
  information,
  season,
  price,
}: singleResult) => {
  const dispatch = useAppDispatch();
  const { setProduct } = bindActionCreators(inventoryActionCreator, dispatch);
  const { heartedFavs } = useAppSelector((state: RootState) => state.layout);

  // console.log(heartedFavs)

  const toggleHeartFav = heartedFavs.includes(productName);

  return (
    <div className="flex items-center px-2 py-4 m-auto border-b-2 border-primary">
      <div className="flex w-2/12">
        <FavoriteBtn toggle={toggleHeartFav} product={productName} />
        <img
          className="w-1/3 m-auto"
          src={imageUrl}
          alt={productName}
          title={productName}
        />
      </div>
      <div className="flex w-2/12 ">
        <Link
          onClick={() => {
            setProduct(upperCaseFirstChar(productName));
          }}
          to={`productdetails/${productName.toLowerCase()}`}
        >
          <h2 className="m-auto">{upperCaseFirstChar(productName)}</h2>
        </Link>
      </div>
      <div className="flex items-center w-3/12 ">
        <p className="m-auto italic text-center">{information}</p>
      </div>
      <div className="flex content-center w-1/12 ">
        {season ? (
          season.map((el: string, index: number) => {
            if (Seasons[el.toLowerCase()]) {
              return (
                <img
                  className="flex h-6 m-auto"
                  src={Seasons[el.toLowerCase()]}
                  alt={el}
                  key={`${index}${el}season`}
                  title={el}
                />
              );
            }
            return (
              <h1
                className="m-auto italic text-center text-black"
                key={`${index}${el}season`}
              >
                Not seasonal.
              </h1>
            );
          })
        ) : (
          <h1 className="m-auto italic text-center text-black">
            Not seasonal.
          </h1>
        )}
      </div>
      <div className="flex items-center w-2/12 ">
        <p className="flex items-center m-auto text-center">
          {numberWithCommas(price)}
          <img
            className="w-5 h-5"
            title="gold"
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
            alt="gold"
          ></img>
        </p>
      </div>
      <div className="flex items-center w-2/12 ">
        <PierreButton text="Add to Cart" />
      </div>
    </div>
  );
};

export default Product;
