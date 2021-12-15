import FavoriteBtn from './FavoriteBtn';
import { upperCaseFirstChar, numberWithCommas } from '../utilities/helperFuncs';
import { Categories } from '../utilities/categoryImages';
import { Seasons } from '../utilities/seasonalData';
import PierreButton from './AddToCardBtn';
import { singleResult } from '../types/storeTypes';

const ProductCard = ({
  productName,
  imageUrl,
  price,
  category,
  information,
  season,
}: singleResult) => {
  const productNameFormatted = upperCaseFirstChar(productName);

  return (
    <div className="flex-col bg-white bg-opacity-50 rounded searchBorder ">
      <div className="flex w-full px-2 py-2 bg-greenTitle h-1/5">
        <FavoriteBtn />
        <h1 className="w-11/12 py-2 text-lg text-center justify-self-center">
          {productNameFormatted}
        </h1>
      </div>

      <div className="flex h-3/5">
        <div className="flex-col px-6 py-4 bg-opacity-75">
          <div className="flex-col float-left mr-4">
            <img className="h-1/4" src={imageUrl} alt={productName} />
            <div className="flex mt-4">
              <h2 className="text-center">{numberWithCommas(price)}</h2>
              <img
                className="w-5 h-5 item-bottom"
                src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
                alt="gold coin"
                title="gold coin"
              />
            </div>
          </div>

          <div className="flex-row">
            <p className="flex flex-wrap font-bold">
              Categories:{' '}
              {category.length > 0 ? (
                category.map((el: string, index: number) => {
                  if (Categories[el]) {
                    return (
                      <img
                        className="flex h-6 ml-2"
                        src={Categories[el]}
                        alt={el}
                        key={`${index}${el}category`}
                        title={el}
                      />
                    );
                  }
                })
              ) : (
                <span className="font-normal">No categories</span>
              )}
            </p>
          </div>
          <div className="flex-row">
            <p className="flex font-bold ">
              Seasons:{' '}
              {season ? (
                season?.map((el: string, index: number) => {
                  if (Seasons[el.toLowerCase()]) {
                    return (
                      <img
                        className="flex h-6 ml-2"
                        src={Seasons[el.toLowerCase()]}
                        alt={el}
                        key={`${index}${el}season`}
                        title={el}
                      />
                    );
                  }
                })
              ) : (
                <span className="ml-4 italic font-normal"> Not Seasonal.</span>
              )}
            </p>
          </div>

          <p className="italic">{information}</p>
        </div>
      </div>
      <div className="flex items-end py-2 h-1/5">
        <PierreButton text={'Add to Cart'} />
      </div>
    </div>
  );
};

export default ProductCard;
