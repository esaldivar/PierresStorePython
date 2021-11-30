import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Login } from './views/login';
import { ReduxTester } from './views/reduxTest';

export const App = () => {
  const [getMessage, setGetMessage] = useState<string>('');
  const [graphqlData, getGraphqlData] = useState<string[]>([]);

  useEffect((): void => {
    axios
      .get('/login')
      .then((response) => {
        console.log('SUCCESS', response);
        setGetMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect((): void => {
    graphQLTestFunc();
  }, []);

  const graphQLTestFunc = (): void => {
    axios
      .post('/graphql', {
        query: `query fetchAllProducts {
          products{
            success
            errors
            products {
            id
            productName
            imageUrl
            price
            information
            season
            category
            quantity
            }
          }
        }
        `,
      })
      .then((res) => getGraphqlData(res.data.data.products.products))
      .catch(console.error);
  };

  return (
    <div className="flex flex-col m-auto">
      <Provider store={store}>
        <h1 className="text-blue-600">Hello from Auroraa</h1>
        <p className="text-red-600">{getMessage}</p>
        <h1>Graphql responses from Flask below </h1>
        <ul>
          {graphqlData ? (
            graphqlData.map((el: any, index: number) => {
              return (
                <div key={index}>
                  <li key={`${el.productName}${index}`}>{el.productName}</li>
                  <li key={`${el.information}${index}`}>{el.information}</li>
                  <li key={`${el.price}${index}`}>{el.price}</li>
                  <li key={`${el.imageUrl}${index}`}>{el.imageUrl}</li>
                </div>
              );
            })
          ) : (
            <li> not loaded yet </li>
          )}
        </ul>
        <ReduxTester />
        <Login />
      </Provider>
    </div>
  );
};
