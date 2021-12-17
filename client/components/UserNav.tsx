import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const UserNav = () => {
  const signInOptions: string[] = ['Sign in', 'Create account', 'Orders'];

  return (
    <Dropdown className="flex items-center mr-4 align-middle cursor-pointer">
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="flex items-center text-3xl align-middle bg-transparent border-none text-primaryBrown hover:text-white"
      >
        <div className="flex-col ">
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

      <Dropdown.Menu className="w-full py-0 overflow-y-auto bg-lightBrown text-greenTitle">
        {signInOptions.map((el, index) => {
          if (index === signInOptions.length - 1) {
            return (
              <Dropdown.Item
                className="m-auto text-greenTitle hover:text-white hover:bg-greenTitle"
                key={`dropdownitem${el}${index}`}
                as={Link}
                to="/"
              >
                {el}
              </Dropdown.Item>
            );
          } else {
            return (
              <Dropdown.Item
                className="m-auto text-greenTitle hover:text-white hover:bg-greenTitle"
                key={`dropdownitem${el}${index}`}
                as={Link}
                to="/"
              >
                {el}

                <Dropdown.Divider
                  className="py-0 m-auto"
                  key={`divider${el}${index}`}
                />
              </Dropdown.Item>
            );
          }
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserNav;
