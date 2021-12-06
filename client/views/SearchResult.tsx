import { RootStateOrAny, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const SearchResult = () => {
  const { singleResult } = useSelector(
    (state: RootStateOrAny) => state.inventory
  );

  return (
    <div className="flex w-1/3 m-auto center">
      {singleResult.productName.length > 0 && <ProductCard />}
    </div>
  );
};

export default SearchResult;
