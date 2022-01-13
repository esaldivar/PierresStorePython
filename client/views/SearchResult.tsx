import ProductCard from '../components/SearchDetails/ProductCard';
import { useAppSelector, RootState } from '../types/reduxTypes';

const SearchResult = () => {
  const { singleResult } = useAppSelector(
    (state: RootState) => state.inventory
  );

  return (
    <div className="flex items-center justify-center w-2/4 m-auto">
      {singleResult ? (
        <ProductCard
          productName={singleResult.productName}
          imageUrl={singleResult.imageUrl}
          price={singleResult.price}
          category={singleResult.category}
          information={singleResult.information}
          season={singleResult.season}
          quantity={singleResult.quantity}
        />
      ) : (
        <h1>No results.</h1>
      )}
    </div>
  );
};

export default SearchResult;
