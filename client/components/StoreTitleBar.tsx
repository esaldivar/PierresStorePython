import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { useAppSelector, useAppDispatch, RootState } from '../types/reduxTypes';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import { singleResult } from '../types/storeTypes';
import { alphabetize } from '../utilities/helperFuncs';

const StoreTitleBar = () => {
  const { store } = useAppSelector((state: RootState) => state.inventory);
  const dispatch = useAppDispatch();
  const { sortInventory } = bindActionCreators(
    inventoryActionCreator,
    dispatch
  );

  const reverseAlpha = () => {
    sortInventory(
      [...store].sort((a: singleResult, b: singleResult) => {
        const nameA = a.productName.toUpperCase();
        const nameB = b.productName.toUpperCase();
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      })
    );
  };

  const lowPrice = () => {
    sortInventory(
      [...store].sort((a: singleResult, b: singleResult) => {
        const priceA = parseInt(a.price);
        const priceB = parseInt(b.price);
        return priceA < priceB ? -1 : priceA > priceB ? 1 : 0;
      })
    );
  };

  const highPrice = () => {
    sortInventory(
      [...store].sort((a: singleResult, b: singleResult) => {
        const priceA = parseInt(a.price);
        const priceB = parseInt(b.price);
        return priceA > priceB ? -1 : priceA < priceB ? 1 : 0;
      })
    );
  };

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
            <button onClick={reverseAlpha}>
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
            <button onClick={lowPrice}>
              <FontAwesomeIcon
                className="searchIcon"
                icon={faCaretUp}
                size="2x"
              />
            </button>
          </div>
          <div>
            <button onClick={highPrice}>
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
