import { useAppDispatch, useAppSelector, RootState } from '../types/reduxTypes';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import { useEffect } from 'react';
import { singleResult } from '../types/storeTypes';
import ProductCard from '../components/SearchDetails/ProductCard';

const Favorites = () => {
  const dispatch = useAppDispatch();
  const { store, favorites } = useAppSelector(
    (state: RootState) => state.inventory
  );
  const { heartedFavs } = useAppSelector((state: RootState) => state.layout);
  const { setFavorites } = bindActionCreators(inventoryActionCreator, dispatch);
  const filteredArray: any = [];

  const objectCheck = (object: any, arrayofFavs: string[]): boolean => {
    return arrayofFavs.includes(object.productName);
  };

  useEffect(() => {
    for (let i = 0; i < store.length; i++) {
      if (objectCheck(store[i], heartedFavs)) {
        filteredArray.push(store[i]);
      }
    }
    setFavorites(filteredArray);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex-col justify-center w-4/5 m-auto mb-6">
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
  );
};

export default Favorites;
