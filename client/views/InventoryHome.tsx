import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import axios from 'axios';
import { getAllProducts } from '../utilities/queries';
import { singleResult } from '../types/storeTypes';
import StoreTitleBar from '../components/StoreTitleBar';
import { useAppSelector, useAppDispatch, RootState } from '../types/reduxTypes';
import { initialAlpha } from '../utilities/helperFuncs';
import Product from '../components/Product';

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
        const allProducts = initialAlpha(res.data.data.products.products);
        getInventory(allProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex-col w-3/4 m-auto bg-white bg-opacity-50 rounded searchBorder">
      <StoreTitleBar />
      {store ? (
        store.map((el: singleResult, index: number) => {
          return (
            <Product
              productName={el.productName}
              imageUrl={el.imageUrl}
              price={el.price}
              season={el.season}
              information={el.information}
              category={el.category}
              quantity={el.quantity}
              key={`${index}${el}`}
            />
          );
        })
      ) : (
        <h1> loading products</h1>
      )}
    </div>
  );
};

export default InventoryHome;
