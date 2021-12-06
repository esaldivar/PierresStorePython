import { RootStateOrAny, useSelector } from 'react-redux';

const ProductCard = () => {
  const { singleResult } = useSelector(
    (state: RootStateOrAny) => state.inventory
  );

  console.log(singleResult.season);
  return (
    <div className="bg-white bg-opacity-75 rounded searchBorder">
      <h1 className="w-full py-2 text-lg text-center bg-greenTitle">
        {singleResult.productName}
      </h1>
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
            />
          </div>
        </div>
        <div className="flex flex-col px-6 py-4 bg-opacity-75">
          <p className="font-bold">
            Categories:{' '}
            {singleResult.category.length > 0 ? (
              singleResult.category.map((el: string, index: number) => {
                return (
                  <span className="font-normal" key={`${el}${index}`}>
                    {' '}
                    {el}{' '}
                  </span>
                );
              })
            ) : (
              <span className="font-normal">No categories</span>
            )}
          </p>
          <p className="font-bold">
            Seasons:{' '}
            {singleResult.season[0] !== '' ? (
              singleResult.season.map((el: string, index: number) => {
                return (
                  <span className="font-normal" key={`${el}${index}`}>
                    {' '}
                    {el}{' '}
                  </span>
                );
              })
            ) : (
              <span className="italic font-normal"> Not Seasonal.</span>
            )}
          </p>
          <p>{singleResult.information}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
