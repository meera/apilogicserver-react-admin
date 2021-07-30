import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {CustomerList} from './components/Customer';
import {EmployeeList} from './components/Employee';
import {OrderList} from './components/Order';

import jsonapiClient from "ra-jsonapi-client";
import NotFound  from "./pages/NotFound";
import authProvider from "./authprovider";

import Dashboard from "./pages/Dashboard";
import UserIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ContactsIcon from '@material-ui/icons/Contacts';
import LoginPage from './pages/LoginPage';

const dataProvider = jsonapiClient('https://apilogicserver.pythonanywhere.com');
// const dataProvider = jsonServerProvider('https://apilogicserver.pythonanywhere.com');

const App = () => (
      <Admin loginPage={LoginPage}  dashboard={Dashboard} dataProvider={dataProvider} catchAll={NotFound} authProvider={authProvider}>
          <Resource name="Customer" edit={EditGuesser} list={CustomerList} icon={ContactsIcon} />
          <Resource name="Order" edit={EditGuesser} list={OrderList} icon={ShoppingCartIcon}/>
          <Resource name="Employee" edit={EditGuesser} list={EmployeeList} icon={UserIcon}/>

      </Admin>
  );
  
export default App;
