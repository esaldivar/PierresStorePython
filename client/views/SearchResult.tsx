import { RootStateOrAny, useSelector } from 'react-redux';
import axios from 'axios';

const SearchResult = () => {
  const { searchViewPage } = useSelector(
    (state: RootStateOrAny) => state.inventory
  );

  return <div>{searchViewPage.length > 0 && <h1>{searchViewPage}</h1>}</div>;
};

export default SearchResult;
