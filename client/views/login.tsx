import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testActionCreator } from '../redux/actionReferences';

export const Login = () => {
  const dispatch = useDispatch();
  const { add, subtract, reset } = bindActionCreators(
    testActionCreator,
    dispatch
  );
  const { count } = useSelector((state: RootStateOrAny) => state.reduxTest);

  const plusOne = () => {
    add();
  };
  const resetCount = () => {
    reset();
  };

  const minOne = () => {
    if (count === 0) {
      return;
    }
    subtract();
  };

  return (
    <div className="m-auto">
      <div>
        <button
          onClick={plusOne}
          className="px-2 py-2 mr-2 text-white bg-green-600 border-solid rounded"
        >
          Increase Count
        </button>
        <button
          onClick={minOne}
          className="px-2 py-2 mr-2 text-white bg-yellow-600 border-solid rounded"
        >
          Decrease Count
        </button>
      </div>
      <div className="grid m-2 justify-items-center">
        <button
          onClick={resetCount}
          className="px-2 py-2 text-white bg-blue-600 border-solid rounded"
        >
          Reset Count
        </button>
      </div>
    </div>
  );
};
