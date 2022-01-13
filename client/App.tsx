import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import NavBar from './views/Navbar';
import SearchResult from './views/SearchResult';
import InventoryHome from './views/InventoryHome';
import Seasonal from './views/Seasonal';
import SeasonalInfo from './components/SeasonalPage/SeasonalInfo';
import ProductDetails from './views/ProductDetails';
import ProductDetailsInfo from './components/ProductDetailsComponents/ProductDetailsInfo';
import Categories from './views/Categories';
import SpecificCategory from './components/Categories/SpecificCategory';
import AccountCreation from './views/AccountCreation';
import SignIn from './views/SignIn';
import Favorites from './views/Favorites';
import ShoppingCart from './views/ShoppingCart';

export const App = () => {
  return (
    <div className="flex flex-col m-auto">
      <Router>
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route index element={<InventoryHome />} />
            <Route path="/createaccount" element={<AccountCreation />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/productdetails" element={<ProductDetails />}>
              <Route path=":productName" element={<ProductDetailsInfo />} />
            </Route>
            <Route path="/category" element={<Categories />}>
              <Route path=":category" element={<SpecificCategory />} />
            </Route>
            <Route path=":productName" element={<SearchResult />} />
            <Route path="/season" element={<Seasonal />}>
              <Route path=":seasonName" element={<SeasonalInfo />} />
            </Route>
          </Routes>
        </Provider>
      </Router>
    </div>
  );
};
