import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { findProduct } from '../utilities/queries';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { search, searchView } = bindActionCreators(
    inventoryActionCreator,
    dispatch
  );
  const { searchInput } = useSelector(
    (state: RootStateOrAny) => state.inventory
  );

  const onEnterButton = (e: any) => {
    if (e.key === 'Enter') {
      axios
        .post('/graphql', {
          query: findProduct(searchInput.toLowerCase()),
        })
        .then((res) => {
          console.log(res);
          const product = res.data.data.product.product;
          if (product.productName.length > 0) {
            searchView(product);
            search('');
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
        value={searchInput}
        onChange={(e) => {
          search(e.target.value);
        }}
        onKeyDown={onEnterButton}
      />
    </div>
  );
};

export default SearchBar;
