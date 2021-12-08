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
    <div className="storeTitle">
      <div className="titleSixth"></div>
      <div className="titleSixth titleName">
        <h3>Product Name</h3>
        <div>
          <div>
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
      <div className="titleThird">
        <h3>Item Description</h3>
      </div>
      <div className="titleSixth titleName">
        <h3>Season</h3>
      </div>
      <div className="titleTwelve titlePrice">
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
      <div className="titleTwelve"></div>
    </div>
  );
};

export default StoreTitleBar;
