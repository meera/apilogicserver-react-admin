import {React} from 'react';
import { List, Datagrid, DateField, TextField, EmailField, ReferenceField, NumberField, EditButton} from 'react-admin';
import {

    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateInput,
    NumberInput
} from 'react-admin';

const orderFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const OrderList = props => (
    <List filters={orderFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="AmountTotal" />
            {/* <ReferenceField source="CustomerId" reference="Customers"><TextField source="id" /></ReferenceField>
            <ReferenceField source="EmployeeId" reference="Employees"><TextField source="id" /></ReferenceField> */}
            <TextField source="Freight" />
            {/* <ReferenceField source="Id" reference="s"><TextField source="id" /></ReferenceField> */}
            <DateField source="OrderDate" />
            <DateField source="RequiredDate" />
            <TextField source="ShipAddress" />
            <TextField source="ShipCity" />
            <TextField source="ShipCountry" />
            <TextField source="ShipName" />
            <TextField source="ShipPostalCode" />
            <TextField source="ShipRegion" />
            <NumberField source="ShipVia" />
            <DateField source="ShippedDate" />
        </Datagrid>
    </List>
);


export const CustomerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <DateInput source="Address" />
            <TextInput source="Balance" />
            <TextInput source="City" />
            <TextInput source="CompanyName" />
            <TextInput source="ContactName" />
            <TextInput source="ContactTitle" />
            <TextInput source="Country" />
            <TextInput source="CreditLimit" />
            <TextInput source="Fax" />
            <ReferenceInput source="Id" reference="s">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <NumberInput source="OrderCount" />
            <TextInput source="Phone" />
            <DateInput source="PostalCode" />
            <TextInput source="Region" />
            <NumberInput source="UnpaidOrderCount" />
        </SimpleForm>
    </Edit>
);