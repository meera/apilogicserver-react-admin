import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import {CustomerList, CustomerEdit, CustomerShow} from './components/Customer';
import {OrderList, OrderShow} from './components/Order';
import { EmployeeList } from "./components/Employee";
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
          <Resource name="Customer" show={CustomerShow} edit={CustomerEdit} list={CustomerList} icon={ContactsIcon} />
          <Resource name="Order" show={OrderShow}  edit={EditGuesser} list={OrderList} icon={ShoppingCartIcon}/>
          {/* <Resource name="Employee" edit={EditGuesser} list={EmployeeList} icon={UserIcon}/>  */}
          <Resource name="Employee" show={ShowGuesser}  edit={EditGuesser} list={EmployeeList} icon={ContactsIcon}/>

      </Admin>
  );
  
export default App;
