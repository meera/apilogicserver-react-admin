import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import {useEffect, useContext} from 'react'

export default function Logout() {
  const  { logout } = useContext( UserContext);

  useEffect(() => {

    logout();
  }, []);

  
  return (
    <div>
      Succesfully Logged Out! <br />
      <Link to="/">
        <button className="block px-4 py-3 font-medium rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
          Back to Login
        </button>
      </Link>
    </div>
  );
}
