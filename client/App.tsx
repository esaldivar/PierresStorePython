import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const App= () => {

  const [getMessage, setGetMessage] = useState<any>('')
  
  useEffect(():any=>{
    axios.get('http://localhost:5000/login').then((response) => {
      console.log("SUCCESS", response)
      setGetMessage(response.data)
    }).catch(error => {
      console.log(error)
    })

  }, [])

    return (
    <div className="flex flex-col m-auto">
        <h1 className="text-blue-600">Hello from Auroraa</h1>
        <p className="text-red-600">{getMessage}</p>

    </div>
  )
}