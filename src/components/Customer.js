import {React} from 'react';
import { List, Datagrid, TextField, EmailField, ReferenceField, NumberField, EditButton} from 'react-admin';
import {

    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateInput,
    NumberInput
} from 'react-admin';

const customerFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const CustomerList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="edit">
            
        <TextField source="CompanyName" />
            <TextField source="ContactName" />
            <TextField source="ContactTitle" />
            <NumberField source="Balance" />
           
            <TextField source="Phone" />
            <TextField source="Region" />
            <EditButton />

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