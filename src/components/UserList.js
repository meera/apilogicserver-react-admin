import {React} from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyURLField from '../URLField';
export const UserList = props => (
    <List {...props}>
        <Datagrid onClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="email"/>
            <TextField source="phone" />
            <MyURLField source="website" />
            <TextField source="company.name"/>

        </Datagrid>
    </List>
)