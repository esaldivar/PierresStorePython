import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import {
  inventoryActionCreator,
  layoutActionCreator,
} from '../redux/actionReferences';
import axios from 'axios';
import { getAllProducts, getFavorites } from '../utilities/queries';
import { singleResult } from '../types/storeTypes';
import StoreTitleBar from '../components/HomePage/StoreTitleBar';
import { useAppSelector, useAppDispatch, RootState } from '../types/reduxTypes';
import { initialAlpha } from '../utilities/helperFuncs';
import Product from '../components/HomePage/Product';

const InventoryHome = () => {
  const dispatch = useAppDispatch();
  const { getInventory } = bindActionCreators(inventoryActionCreator, dispatch);
  const { changeFavs } = bindActionCreators(layoutActionCreator, dispatch);
  const { store } = useAppSelector((state: RootState) => state.inventory);

  const userId: string | null = localStorage.getItem('userId');

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (typeof userId === 'number') {
      axios
        .post('/graphql', {
          query: getFavorites(parseInt(userId)),
        })
        .then((res) => {
          const favoriteArr = res.data.data.favorites.favorites.map(
            (el: any) => {
              return el.productName;
            }
          );
          const uniqueFavs = [...new Set(favoriteArr)];
          if (Array.isArray(uniqueFavs)) {
            changeFavs(uniqueFavs);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex-col w-3/4 m-auto mt-10 mb-10 bg-white bg-opacity-50 rounded searchBorder">
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
