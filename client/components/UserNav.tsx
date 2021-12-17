import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const UserNav = () => {
  return (
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
      <h1 className="mt-2 font-bold text-center text-primaryBrown">Sign in</h1>
    </div>
  );
};

export default UserNav;
