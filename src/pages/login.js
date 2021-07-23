import logo from '../images/ApiLogicServerLogo.png';
import React from 'react'
import {useState} from "react"
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import {useContext} from 'react'
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const  { login } = useContext( UserContext);
  const history = useHistory();
  const handleSubmit = async (event ) => {
    console.log( ' Handle Submit', name, password);

    event.preventDefault();
    
    console.log( name, password);
    
    try { 
      if (name === 'admin' && password === 'p') {
        // When backend auth is ready change this.
        const user = { name: 'admin', password: 'p'};

          login(user);
          history.push('/')
     
         return;
      }else  {

      }

    }catch( error ) {
      console.log(' Error ', error);
      setError( error.message);
      //setError(response.data.message[0].messages[0].message);
    }
}


    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-24 w-auto"
            src={logo}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">ApiLogicServer Dashboard</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
           
           Abracadabra: username: 'admin' password: 'p'
            </p>
          <p className="mt-2 text-center text-sm text-gray-600">
           
          Enter your login and password below

          </p>
         
        </div>
  
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) =>setName(event.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) =>setPassword(event.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
  
              <div>
                <button
                  onSubmit={handleSubmit}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
  

          </div>
        </div>
      </div>
    )
  }
  