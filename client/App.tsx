import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Login } from './views/login';


export const App= () => {



  const [getMessage, setGetMessage] = useState<any>('');
  const [backendSuccess, setBackEndSuccess] = useState<any>('');
  
  useEffect(():any=>{
    axios.get('/login').then((response) => {
      console.log("SUCCESS", response)
      setGetMessage(response.data)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  const backEndTest = () => {
    axios.get('/backendtest').then((response) => {
      console.log("SUCCESS", response)
      setBackEndSuccess(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

    return (
      <div className="flex flex-col m-auto">
        
      <Provider store={store}>
        <h1 className="text-blue-600">Hello from Auroraa</h1>
        <p className="text-red-600">{getMessage}</p>
        <Login />
      </Provider>
    </div>
  )
}