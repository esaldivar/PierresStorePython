import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import axios from 'axios';
import { getAllProducts } from '../utilities/queries';
import { singleResult } from '../types/storeTypes';
import StoreTitleBar from '../components/StoreTitleBar';
import { useAppSelector, useAppDispatch, RootState } from '../types/reduxTypes';

const InventoryHome = () => {
  const dispatch = useAppDispatch();
  const { getInventory } = bindActionCreators(inventoryActionCreator, dispatch);
  const { store } = useAppSelector((state: RootState) => state.inventory);

  useEffect(() => {
    axios
      .post('/graphql', {
        query: getAllProducts(),
      })
      .then((res) => {
        const allProducts = res.data.data.products.products;
        getInventory(allProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <StoreTitleBar />
      <ul>
        {store.length > 2 ? (
          store.map((el: singleResult, index: number) => {
            console.log(el.productName);
            return <li key={`${el}${index}`}>{el.productName} </li>;
          })
        ) : (
          <li>Nothing rendered yet. </li>
        )}
      </ul>
    </div>
  );
};

export default InventoryHome;
