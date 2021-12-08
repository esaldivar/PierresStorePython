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
    <div className="flex items-center text-white bg-greenTitle">
      <div></div>
      <div className="flex mr-2 content-evenly">
        <h3>Product Name</h3>
        <div className="flex-col m-0">
          <div className="flex-col m-0">
            <button
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
          <div>
            <button
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
      <div>
        <h3>Item Description</h3>
      </div>
      <div>
        <h3>Season</h3>
      </div>
      <div>
        <h3>Price</h3>
        <div>
          <div>
            <button
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
