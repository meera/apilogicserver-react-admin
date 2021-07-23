import React from 'react';
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'

import logo from '../../images/ApiLogicServerLogo.png';
import { NavLink} from 'react-router-dom';


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Layout = ({children} ) => {

    return( 

        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none ">
              {/* Page title & actions */}


              <div className="px-4 py-4 border-b border-gray-200 h-14 bg-gradient-to-r from-teal-200 to-cyan-400 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <div className="flex-1 min-w-0">
                <div className="flex items-center flex-shrink-0 px-6">
                <img
                  className="w-auto h-8"
                  src={logo}
                  alt="Workflow"
                />
              </div>
                  {/* <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Home</h1> */}
                </div>
                <div className="flex mt-4 sm:mt-0 sm:ml-4">
                 
                  <NavLink
                    to="/logout"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md shadow-sm order-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
                  >
                    Logout
                  </NavLink>
                </div>
              </div>
              <div className="mx-auto max-w-7xl sm:px-6 lg:mt-12 lg:px-8">


         {children}

</div>

</main>
        
    )
}

export default Layout;
