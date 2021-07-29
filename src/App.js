import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {CustomerList} from './components/CustomerList';
import jsonapiClient from "ra-jsonapi-client";
import NotFound  from "./pages/NotFound";
import authProvider from "./authprovider";

import Dashboard from "./pages/Dashboard";

const dataProvider = jsonapiClient('https://apilogicserver.pythonanywhere.com');
// const dataProvider = jsonServerProvider('https://apilogicserver.pythonanywhere.com');

const App = () => (
      <Admin dashboard={Dashboard} dataProvider={dataProvider} catchAll={NotFound} authProvider={authProvider}>
          <Resource name="Customer" list={CustomerList} />
          
      </Admin>
  );
  
export default App;
