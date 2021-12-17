import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const UserNav = () => {
  return (
    <div className="flex items-center mr-4 align-middle cursor-pointer">
      <Dropdown className="flex ">
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="flex items-center text-3xl align-middle bg-transparent border-none text-primaryBrown"
        >
          <div className="flex-col">
            <FontAwesomeIcon
              className="fill-current text-primaryBrown "
              icon={faUserCircle}
              size="1x"
            />
            <h1 className="text-sm font-bold text-center text-primaryBrown">
              Sign in
            </h1>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="py-0 overflow-y-auto bg-lightBrown text-greenTitle">
          <Dropdown.Item className="py-0 m-auto text-greenTitle hover:text-white hover:bg-greenTitle">
            LAFDsadfasdf
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserNav;
