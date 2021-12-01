import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="iconDiv">
        <img
          className="pierreIcon"
          src="https://pierresstore.s3.us-east-2.amazonaws.com/Pierre.png"
          alt="Website Icon Pierre Character"
        />
        <h4>Pierre&rsquo;s Store</h4>
      </div>
      <div>
        <a href="https://github.com/esaldivar/PierresStore/blob/main/server/models/store.sql">
          <h4>Favorites</h4>
        </a>
      </div>
      <div>
        <a href="https://github.com/esaldivar/PierresStore/blob/main/server/models/store.sql">
          <h4>In Season</h4>
        </a>
      </div>
      <div className="search">
        <FontAwesomeIcon className="searchIcon" icon={faSearch} size="xs" />
        <input
          className="navSearch"
          type="search"
          name="search"
          placeholder="Search Pierre's Store"
          id="searchInput"
          autoComplete="off"
        />
      </div>
      <div>
        <a href="https://sass-lang.com">
          <img
            className="shoppingCartIcon"
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Traveling_Cart.png"
            alt="Shopping Cart Icon"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
