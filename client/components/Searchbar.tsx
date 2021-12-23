import { bindActionCreators } from 'redux';
import { useAppSelector, RootState, useAppDispatch } from '../types/reduxTypes';
import { inventoryActionCreator } from '../redux/actionReferences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { findProduct } from '../utilities/queries';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { search, searchView } = bindActionCreators(
    inventoryActionCreator,
    dispatch
  );
  const { searchInput } = useAppSelector((state: RootState) => state.inventory);

  const navigate = useNavigate();

  const onEnterButton = (e: any) => {
    if (e.key === 'Enter') {
      axios
        .post('/graphql', {
          query: findProduct(searchInput.toLowerCase()),
        })
        .then((res) => {
          search('');
          e.target.value = '';
          const product = res.data.data.product.product;
          if (product.productName.length > 0) {
            searchView(product);
            navigate(`${product.productName}`);
          }
        })
        .catch(console.error);
    }
    return;
  };

  return (
    <div className="px-1 py-1 rounded bg-lightBrown">
      <FontAwesomeIcon
        className="ml-2 text-gray-400 center fa fa-search"
        icon={faSearch}
        size="xs"
      />
      <input
        className="px-2 text-gray-500 rounded outline-none bg-lightBrown center"
        type="text"
        name="search"
        placeholder="Search Pierre's Store"
        id="searchInput"
        autoComplete="off"
        onChange={(e) => {
          search(e.target.value);
        }}
        onKeyDown={onEnterButton}
      />
    </div>
  );
};

export default SearchBar;
