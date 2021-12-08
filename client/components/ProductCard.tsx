import { RootStateOrAny, useSelector } from 'react-redux';
import FavoriteBtn from './FavoriteBtn';
import { upperCaseFirstChar } from '../utilities/helperFuncs';
import { Categories } from '../utilities/categoryImages';
import { Seasons } from '../utilities/seasonImages';
import PierreButton from './AddToCardBtn';

const ProductCard = () => {
  const { singleResult } = useSelector(
    (state: RootStateOrAny) => state.inventory
  );

  const productNameFormatted = upperCaseFirstChar(singleResult.productName);

  return (
    <div className="bg-white bg-opacity-50 rounded searchBorder">
      <div className="flex w-full px-2 py-2 bg-greenTitle">
        <FavoriteBtn />
        <h1 className="w-11/12 py-2 text-lg text-center justify-self-center">
          {productNameFormatted}
        </h1>
      </div>

      <div className="flex m-auto">
        <div className="flex flex-col w-1/3 px-6 py-4 m-auto align-middle bg-opacity-75 border-r-2 border-primary">
          <img
            className="h-auto mb-2"
            src={singleResult.imageUrl}
            alt={singleResult.productName}
          />
          <div className="flex items-center">
            <h2 className="text-center">{singleResult.price}</h2>
            <img
              className="w-1/3 item-bottom"
              src="https://pierresstore.s3.us-east-2.amazonaws.com/Gold+(1).png"
              alt="gold coin"
              title="gold coin"
            />
          </div>
        </div>
        <div className="flex-col px-6 py-4 bg-opacity-75">
          <div className="flex-row">
            <p className="flex font-bold">
              Categories:{' '}
              {singleResult.category.length > 0 ? (
                singleResult.category.map((el: string, index: number) => {
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
              {singleResult.season[0] !== '' ? (
                singleResult.season.map((el: string, index: number) => {
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

          <p className="italic">{singleResult.information}</p>
        </div>
      </div>
      <div className="flex mt-4 mb-4">
        <PierreButton text={'Add to Cart'} />
      </div>
    </div>
  );
};

export default ProductCard;
