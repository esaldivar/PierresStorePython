import Searchbar from '../components/NavBar/Searchbar';
import { Link } from 'react-router-dom';
import { seasonSetter } from '../utilities/seasonalData';
import CategoeriesDropDown from '../components/NavBar/CategoriesDropDown';
import UserNav from '../components/NavBar/UserNav';

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
      <div className="flex items-center align-middle ">
        <UserNav />
        <div className="w-32">
          <Link to="/cart">
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
