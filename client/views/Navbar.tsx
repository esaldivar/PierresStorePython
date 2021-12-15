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
        <Link to="/">
          <h4>Favorites</h4>
        </Link>
      </div>
      <div className="text-3xl">
        <Link to="season">
          <h4>In Season</h4>
        </Link>
      </div>
      <Searchbar />
      <div className="w-32">
        <Link to="/">
          <img
            src="https://pierresstore.s3.us-east-2.amazonaws.com/Traveling_Cart.png"
            alt="Shopping Cart Icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
