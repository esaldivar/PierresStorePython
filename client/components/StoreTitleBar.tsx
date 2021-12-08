import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector, useAppDispatch, RootState } from '../types/reduxTypes';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import {
  alphabetize,
  reverseAlpha,
  lowPrice,
  highPrice,
} from '../utilities/helperFuncs';

const StoreTitleBar = () => {
  const { store } = useAppSelector((state: RootState) => state.inventory);
  const dispatch = useAppDispatch();
  const { sortInventory } = bindActionCreators(
    inventoryActionCreator,
    dispatch
  );

  return (
    <div className="flex content-center m-auto text-white bg-greenTitle">
      <div></div>
      <div className="flex items-center mr-2 bg-red-500 content-evenly">
        <h3>Product Name</h3>
        <div className="flex-col m-0">
          <div className="flex-col m-0">
            <button
              className="w-10 h-10 m-0 text-xs"
              onClick={() => {
                alphabetize(sortInventory, store);
              }}
            >
              <FontAwesomeIcon
                className="searchIcon"
                icon={faCaretUp}
                size="2x"
              />
            </button>
          </div>
          <div className="flex-col m-0">
            <button
              className="w-10 h-10 m-0 text-xs"
              onClick={() => {
                reverseAlpha(sortInventory, store);
              }}
            >
              <FontAwesomeIcon
                className="searchIcon"
                icon={faCaretDown}
                size="2x"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center mr-2 bg-blue-500 content-evenly">
        <h3>Item Description</h3>
      </div>
      <div className="flex items-center mr-2 bg-gray-500 content-evenly">
        <h3>Season</h3>
      </div>
      <div className="flex items-center mr-2 bg-purple-500 content-evenly">
        <h3>Price</h3>
        <div>
          <div>
            <button
              className="w-10 h-10 m-0 text-xs"
              onClick={() => {
                lowPrice(sortInventory, store);
              }}
            >
              <FontAwesomeIcon
                className="searchIcon"
                icon={faCaretUp}
                size="2x"
              />
            </button>
          </div>
          <div>
            <button
              className="w-10 h-10 m-0 text-xs"
              onClick={() => {
                highPrice(sortInventory, store);
              }}
            >
              <FontAwesomeIcon
                className="searchIcon"
                icon={faCaretDown}
                size="2x"
              />
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default StoreTitleBar;
