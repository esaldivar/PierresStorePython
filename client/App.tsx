import './style.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import NavBar from './views/NavBar';
import SearchResult from './views/SearchResult';
import InventoryHome from './views/InventoryHome';
import Seasonal from './views/Seasonal';
import SeasonalInfo from './components/SeasonalInfo';

export const App = () => {
  return (
    <div className="flex flex-col m-auto">
      <Router>
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route index element={<InventoryHome />} />
            <Route path="search" element={<SearchResult />} />
            <Route path="season" element={<Seasonal />}>
              <Route path=":seasonName" element={<SeasonalInfo />} />
            </Route>
          </Routes>
        </Provider>
      </Router>
    </div>
  );
};
