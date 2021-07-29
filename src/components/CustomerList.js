import {React} from 'react';
import { List, Datagrid, TextField, EmailField, UrlField, NumberField } from 'react-admin';



export const CustomerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <TextField source="CompanyName" />
            <TextField source="ContactName" />
            <TextField source="ContactTitle" />
            <NumberField source="Balance" />
           
            <TextField source="Phone" />
            <TextField source="Region" />
        </Datagrid>
    </List>
);