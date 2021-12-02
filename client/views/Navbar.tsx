import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const dispatch = useDispatch();
  const { search } = bindActionCreators(inventoryActionCreator, dispatch);
  const { searchInput } = useSelector(
    (state: RootStateOrAny) => state.inventory
  );

  return (
    <div className="sticky flex items-center mt-2 justify-evenly text-primary">
      <div className="flex items-center">
        <img
          className="w-3/4 border-2 border-none rounded-full"
          src="https://pierresstore.s3.us-east-2.amazonaws.com/Pierre.png"
          alt="Website Icon Pierre Character"
        />
      </div>
      <div className="text-3xl">
        <a href="https://github.com/esaldivar/PierresStore/blob/main/server/models/store.sql">
          <h4>Favorites</h4>
        </a>
      </div>
      <div className="text-3xl">
        <a href="https://github.com/esaldivar/PierresStore/blob/main/server/models/store.sql">
          <h4>In Season</h4>
        </a>
      </div>
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
        />
      </div>
      <div className="w-32">
        <a href="https://sass-lang.com">
          <img
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Traveling_Cart.png"
            alt="Shopping Cart Icon"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
