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

const employeeFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const EmployeeList = props => (
    <List filters={employeeFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="Address" />
            <DateField source="BirthDate" />
            <TextField source="City" />
            <TextField source="Country" />
            <DateField source="Extension" />
            <TextField source="FirstName" />
            <DateField source="HireDate" />
            <TextField source="HomePhone" />
            {/* <ReferenceField source="Id" reference="s"><TextField source="id" /></ReferenceField> */}
            <NumberField source="IsCommissioned" />
            <TextField source="LastName" />
            <TextField source="Notes" />
            <TextField source="Photo" />
            <TextField source="PhotoPath" />
            <TextField source="PostalCode" />
            <TextField source="ProperSalary.comparator" />
            <TextField source="Region" />
            <NumberField source="ReportsTo" />
            <TextField source="Salary" />
            <TextField source="Title" />
            <TextField source="TitleOfCourtesy" />
        </Datagrid>
    </List>
);