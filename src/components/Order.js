import {React} from 'react';
import { List, Datagrid, DateField, TextField, EmailField, ReferenceField, NumberField, EditButton, SimpleShowLayout} from 'react-admin';
import {

    Edit,
    Show,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateInput,
    NumberInput,
    useRecordContext
} from 'react-admin';
import { Typography } from "@material-ui/core";


const orderFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];

export const OrderList = props => (
    <List filters={orderFilters} {...props}>
        <Datagrid rowClick="show">
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

const ShowFullName = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        
        <Typography variant="body2" component="p">
          {`${record['FirstName']} ${record['LastName']}`}
        </Typography>
    ) : null;
  };
export const OrderShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="AmountTotal" />
            <ReferenceField source="CustomerId" reference="Customer"><TextField source="ContactName" /></ReferenceField>
            <ReferenceField source="EmployeeId" reference="Employee"><ShowFullName source="FirstName" /></ReferenceField>
            <TextField source="Freight" />
            <DateField source="OrderDate" />
            <DateField source="RequiredDate" />
            <DateField source="ShipAddress" />
            <TextField source="ShipCity" />
            <TextField source="ShipCountry" />
            <TextField source="ShipName" />
            <DateField source="ShipPostalCode" />
            <TextField source="ShipRegion" />
            <NumberField source="ShipVia" />
            <DateField source="ShippedDate" />
        </SimpleShowLayout>
    </Show>
);

