import { RootStateOrAny, useSelector } from 'react-redux';

const SearchResult = () => {
  const { singleResult } = useSelector(
    (state: RootStateOrAny) => state.inventory
  );

  return (
    <div>
      {singleResult.productName.length > 0 && (
        <img src={singleResult.imageUrl} alt={singleResult.productName} />
      )}
    </div>
  );
};

export default SearchResult;
