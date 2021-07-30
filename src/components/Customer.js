import {React} from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField, NumberField, EditButton} from 'react-admin';
import {

    Edit,
    Show,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateInput,
    NumberInput,
    SimpleShowLayout,
    ReferenceManyField
} from 'react-admin';
import Grid from '@material-ui/core/Grid';


  
const customerFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];


export const CustomerList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid expand={<CustomerShow />} rowClick="show">
            
        <TextField source="CompanyName" />
            <TextField source="ContactName" />
            <TextField source="Phone" />
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
const CustomerTitle = ({ record }) => {
    return <span>Post {record ? `ID: "${record.id}" ContactName: "${record.ContactName}"` : ''}</span>;
};

export const CustomerShow = props => { 

    return (

    <Show title={<CustomerTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" /> 
            <DateField source="Address" />
            <TextField source="Balance" />
            <TextField source="City" />
            <TextField source="CompanyName" />
            <TextField source="ContactName" />
            <TextField source="ContactTitle" />
            <TextField source="Country" />
            <TextField source="CreditLimit" />
            <TextField source="Fax" />
            {/* <ReferenceField source="Id" reference="s"><TextField source="id" /></ReferenceField> */}
            <NumberField source="OrderCount" />
            <TextField source="Phone" />
            <DateField source="PostalCode" />
            <TextField source="Region" />
            <NumberField source="UnpaidOrderCount" />
            <ReferenceManyField reference="Order" target="CustomerId" addLabel={false}>
                    <Datagrid>
                    <TextField source="id" />
                        <TextField source="AmountTotal" />
                       <TextField source="Freight" />
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
            </ReferenceManyField>


        
        </SimpleShowLayout>
    </Show>
);
    }