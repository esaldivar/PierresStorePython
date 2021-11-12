import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActionCreator } from '../redux';



export const Login = () => {

    const  {isLoggedIn, logger}  = useSelector((state:RootStateOrAny) => state.auth)
    const dispatch = useDispatch();
    const { logIn, logOut } = bindActionCreators(authActionCreator, dispatch);
    const userLogsIn = () => {
        logIn();
    }

    return (
        <div>
            <button onClick={userLogsIn}>Login</button>
            {isLoggedIn && <p>{logger}</p>}
            
        </div>

    )
}