import { useEffect } from 'react';
import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import axios from 'axios';
import { getAllProducts } from '../utilities/queries';
import { singleResult } from '../types/storeTypes';

const InventoryHome = () => {
  const dispatch = useDispatch();
  const { getInventory } = bindActionCreators(inventoryActionCreator, dispatch);
  const { store } = useSelector((state: RootStateOrAny) => state.inventory);

  useEffect(() => {
    axios
      .post('/graphql', {
        query: getAllProducts(),
      })
      .then((res) => {
        console.log(res.data.data.products.products);
        getInventory(res.data.data.products.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
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
