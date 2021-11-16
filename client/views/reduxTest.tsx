import { RootStateOrAny, useSelector } from 'react-redux';

export const ReduxTester = () => {
  const { count } = useSelector((state: RootStateOrAny) => state.reduxTest);

  return (
    <div className="flex flex-col py-2 m-auto">
      <h1 className="text-xl text-center">Counter</h1>
      <p>
        Changes based on redux state. The count is{' '}
        <span className="text-red-500">{count}</span>{' '}
      </p>
    </div>
  );
};
