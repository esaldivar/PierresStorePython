import { useAppSelector, RootState } from '../types/reduxTypes';
import { singleResult } from '../types/storeTypes';
import ProductCard from './ProductCard';

const SpecificCategory = () => {
  const { currentCategory } = useAppSelector(
    (state: RootState) => state.layout
  );
  const { store } = useAppSelector((state: RootState) => state.inventory);

  const categoryFilter: string = currentCategory.toLowerCase();
  const categoryStringEnd: number = categoryFilter.length - 1;

  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2">
      {store.map((product: singleResult, index: number) => {
        if (
          product.category.includes(categoryFilter) ||
          product.category.includes(
            categoryFilter.substring(0, categoryStringEnd)
          )
        ) {
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
      })}
    </div>
  );
};

export default SpecificCategory;
