import { RootStateOrAny, useSelector } from 'react-redux';

const ProductCard = () => {
  const { singleResult } = useSelector(
    (state: RootStateOrAny) => state.inventory
  );

  console.log(singleResult.season);
  return (
    <div className="bg-red-400">
      <h1 className="text-center">{singleResult.productName}</h1>
      <div className="flex">
        <div className="flex flex-col w-1/3 px-6 py-4 m-auto align-middle bg-green-400">
          <img
            className="w-3/4 mb-2"
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
        <div className="flex flex-col px-6 py-4 bg-yellow-400">
          <h2>
            Categories:{' '}
            {singleResult.category.length > 0 ? (
              singleResult.category.map((el: string, index: number) => {
                return <span key={`${el}${index}`}> {el} </span>;
              })
            ) : (
              <span>No categories</span>
            )}
          </h2>
          <p>
            Seasons:{' '}
            {singleResult.season[0] !== '' ? (
              singleResult.season.map((el: string, index: number) => {
                return <span key={`${el}${index}`}> {el} </span>;
              })
            ) : (
              <span className="italic"> Not Seasonal.</span>
            )}
          </p>
          <p>{singleResult.information}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
