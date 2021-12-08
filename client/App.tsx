import './style.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './views/Navbar';
import SearchResult from './views/SearchResult';
import InventoryHome from './views/InventoryHome';

export const App = () => {
  return (
    <div className="flex flex-col m-auto">
      <Provider store={store}>
        <NavBar />
        <InventoryHome />
        <SearchResult />
      </Provider>
    </div>
  );
};
