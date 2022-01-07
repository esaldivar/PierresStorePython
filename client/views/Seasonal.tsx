import { useAppDispatch, useAppSelector, RootState } from '../types/reduxTypes';
import { bindActionCreators } from 'redux';
import { inventoryActionCreator } from '../redux/actionReferences';
import { useEffect } from 'react';
import axios from 'axios';
import { singleResult } from '../types/storeTypes';
import { seasonSetter } from '../utilities/seasonalData';
import { getAllProducts } from '../utilities/queries';
import { initialAlpha } from '../utilities/helperFuncs';
import ProductCard from '../components/ProductCard';
import SeasonalInfo from '../components/SeasonalInfo';

const Seasonal = () => {
  //detects the month and returns the season
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const season = seasonSetter();

  return (
    <div className="flex-col justify-center w-4/5 m-auto mb-6">
      <SeasonalInfo currentSeason={season} />
      <div className="flex-col w-10/12 px-2 m-auto mt-6">
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 mt-6">
          {store ? (
            store.map((product: singleResult, index: number) => {
              if (product.season?.includes(season)) {
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
              }
            })
          ) : (
            <h1>No seasonal results.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Seasonal;
