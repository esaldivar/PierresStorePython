import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const CategoeriesDropDown = () => {
  const categories: string[] = [
    'Favorites',
    'Cooking',
    'Fertilizers',
    'Flowers',
    'Fruits',
    'Grains',
    'Miscellaneous',
    'Plant Hormones',
    'Seeds',
    'Soils',
    'Storage',
    'Trees',
    'Vegetables',
  ];

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="text-3xl bg-transparent border-none text-primaryBrown"
      >
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-full h-64 py-0 overflow-y-auto bg-lightBrown text-greenTitle">
        {categories.map((el, index) => {
          if (index === categories.length - 1) {
            return (
              <Dropdown.Item
                className="py-0 m-auto text-greenTitle hover:text-white hover:bg-greenTitle"
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
                className="py-0 m-auto text-greenTitle hover:text-white hover:bg-greenTitle"
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

export default CategoeriesDropDown;
