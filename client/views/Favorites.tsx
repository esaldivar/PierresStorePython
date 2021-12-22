import { useAppDispatch, useAppSelector, RootState } from '../types/reduxTypes';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import { useEffect, useState } from 'react';
import { getFavorites } from '../utilities/queries';
import { singleResult } from '../types/storeTypes';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Favorites = () => {
  const dispatch = useAppDispatch();
  const { store, favorites } = useAppSelector(
    (state: RootState) => state.inventory
  );
  const { setFavorites } = bindActionCreators(inventoryActionCreator, dispatch);
  const [favoriteList, setFavoriteList] = useState<string[]>([]);
  const filteredArray: any = [];

  const objectCheck = (object: any, arrayofFavs: string[]): boolean => {
    return arrayofFavs.includes(object.productName);
  };

  const userId: number | null = localStorage.getItem('userId')
    ? parseInt(localStorage.getItem('userId'))
    : null;

  useEffect(() => {
    axios
      .post('/graphql', {
        query: getFavorites(userId),
      })
      .then((res) => {
        const favorite = res.data.data.favorites.favorites.map((el: any) => {
          return el.productName;
        });
        setFavoriteList(favorite);
        for (let i = 0; i < store.length; i++) {
          if (objectCheck(store[i], favoriteList)) {
            filteredArray.push(store[i]);
          }
        }
        setFavorites(filteredArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-col justify-center w-4/5 m-auto mb-6">
      <div className="flex-col w-10/12 px-2 m-auto mt-6">
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 mt-6">
          {favorites ? (
            favorites.map((product: singleResult, index: number) => {
              return (
                <ProductCard
                  productName={product.productName}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  category={product.category}
                  information={product.information}
                  season={product.season}
                  quantity={product.quantity}
                  key={`${product.productName}${index}`}
                />
              );
            })
          ) : (
            <h1>No favorites.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
