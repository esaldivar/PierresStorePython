import Searchbar from '../components/Searchbar';
import { Link } from 'react-router-dom';
import { seasonSetter } from '../utilities/seasonalData';
import CategoeriesDropDown from '../components/CategoriesDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const season = seasonSetter();
  return (
    <div className="sticky flex items-center mt-2 mb-10 justify-evenly text-primaryBrown">
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
        <CategoeriesDropDown />
      </div>
      <div className="text-3xl">
        <Link to={`season/${season.toLowerCase()}`}>
          <h4>In Season</h4>
        </Link>
      </div>
      <Searchbar />
      <div className="flex items-center align-middle">
        <div className="flex-col items-center mr-6 align-middle">
          <div className="flex items-center align-middle">
            <FontAwesomeIcon
              className="fill-current text-primaryBrown hover:text-white"
              icon={faUserCircle}
              size="3x"
            />
            <FontAwesomeIcon
              className="ml-2 fill-current text-primaryBrown hover:text-white"
              icon={faChevronDown}
              size="1x"
            />
          </div>
          <h1 className="mt-2 font-bold text-center text-primaryBrown">
            Sign in
          </h1>
        </div>
        <div className="w-32">
          <Link to="/">
            <img
              src="https://pierresstore.s3.us-east-2.amazonaws.com/Traveling_Cart.png"
              alt="Shopping Cart Icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
