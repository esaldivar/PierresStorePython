import Searchbar from '../components/Searchbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="sticky flex items-center mt-2 justify-evenly text-primary">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-3/4 border-2 border-none rounded-full"
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Pierre.png"
            alt="Website Icon Pierre Character"
          />
        </Link>
      </div>
      <div className="text-3xl">
        <a href="https://github.com/esaldivar/PierresStore/blob/main/server/models/store.sql">
          <h4>Favorites</h4>
        </a>
      </div>
      <div className="text-3xl">
        <Link to="seasonal">
          <h4>In Season</h4>
        </Link>
      </div>
      <Searchbar />
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
