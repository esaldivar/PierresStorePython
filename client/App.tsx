import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Login } from './views/login';
import { ReduxTester } from './views/reduxTest';

export const App = () => {
  const [getMessage, setGetMessage] = useState<any>('');
  const [graphqlData, getGraphqlData] = useState<any>([]);

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

  const graphQLTestFunc = () => {
    axios
      .post('/graphql', {
        query: `query 
          fetchAllTodos {
            todos {
              success
              errors
              todos {
                description
                completed
                id
              }
            }
          }
        `,
      })
      .then((res) => getGraphqlData(res.data.data.todos.todos))
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
              return <li key={`${el}${index}`}>{el.description}</li>;
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
