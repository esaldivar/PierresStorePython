import { useAppSelector, RootState } from '../types/reduxTypes';

const SpecificCategory = () => {
  const { currentCategory } = useAppSelector(
    (state: RootState) => state.layout
  );

  return (
    <div>
      <h1>{currentCategory}</h1>
    </div>
  );
};

export default SpecificCategory;
