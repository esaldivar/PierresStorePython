import ProductCard from '../components/ProductCard';
import { useAppSelector, RootState } from '../types/reduxTypes';

const SearchResult = () => {
  const { singleResult } = useAppSelector(
    (state: RootState) => state.inventory
  );

  return (
    <div className="flex w-1/3 m-auto center">
      {singleResult.productName.length > 0 && <ProductCard />}
    </div>
  );
};

export default SearchResult;
