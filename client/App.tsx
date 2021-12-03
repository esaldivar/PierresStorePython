// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './style.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './views/Navbar';
import SearchResult from './views/SearchResult';

export const App = () => {
  // const [graphqlData, getGraphqlData] = useState<string[]>([]);

  // useEffect((): void => {
  //   graphQLTestFunc();
  // }, []);

  // const graphQLTestFunc = (): void => {
  //   axios
  //     .post('/graphql', {
  //       query: `query fetchAllProducts {
  //         products{
  //           success
  //           errors
  //           products {
  //           productName
  //           imageUrl
  //           price
  //           information
  //           season
  //           category
  //           quantity
  //           }
  //         }
  //       }
  //       `,
  //     })
  //     .then((res) => getGraphqlData(res.data.data.products.products))
  //     .catch(console.error);
  // };

  return (
    <div className="flex flex-col m-auto">
      <Provider store={store}>
        <NavBar />
        <SearchResult />
      </Provider>
    </div>
  );
};
