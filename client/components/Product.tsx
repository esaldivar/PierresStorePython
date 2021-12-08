import { singleResult } from '../types/storeTypes';
import PierreButton from './AddToCardBtn';
import FavoriteBtn from './FavoriteBtn';
import { Seasons } from '../utilities/seasonImages';

const Product = ({
  productName,
  imageUrl,
  information,
  season,
  price,
}: singleResult) => {
  return (
    <div className="flex items-center px-2 py-4 m-auto border-b-2 border-primary">
      <div className="flex w-2/12 items-evenly">
        <FavoriteBtn />
        <img
          className="w-1/3"
          src={imageUrl}
          alt={productName}
          title={productName}
        />
      </div>
      <div className="flex w-2/12 ">
        <h2 className="m-auto">{productName}</h2>
      </div>
      <div className="flex items-center w-3/12 ">
        <p className="m-auto italic text-center">{information}</p>
      </div>
      <div className="flex content-center w-1/12 ">
        {season[0] ? (
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
          })
        ) : (
          <h1 className="m-auto italic text-center text-black">
            Not seasonal.
          </h1>
        )}
      </div>
      <div className="flex items-center w-2/12 ">
        <p className="flex items-center m-auto text-center">
          {price}
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