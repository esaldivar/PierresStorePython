import './style.css';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import NavBar from './views/Navbar';
import SearchResult from './views/SearchResult';
import InventoryHome from './views/InventoryHome';
import Seasonal from './views/Seasonal';

export const App = () => {
  return (
    <div className="flex flex-col m-auto">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route index element={<InventoryHome />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="seasonal" element={<Seasonal />} />
        </Routes>
      </Provider>
    </div>
  );
};
