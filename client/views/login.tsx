import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActionCreator } from '../redux';



export const Login = () => {

    const dispatch = useDispatch();
    const { add, reset } = bindActionCreators(authActionCreator, dispatch);
    const plusOne = () => {
        add();
    }
    const resetCount = () => {
        reset();
    }

    return (
        <div className="m-auto">
            <button onClick={plusOne} className="px-2 py-2 mr-2 text-white bg-red-600 border-solid rounded">Increase Count</button>
            <button onClick={resetCount} className="px-2 py-2 text-white bg-blue-600 border-solid rounded">Reset Count</button>     
        </div>

    )
}