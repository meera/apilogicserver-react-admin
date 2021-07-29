import React from 'react';
import { List, SimpleList, Datagrid, TextField, ReferenceField, EditButton, Edit, Create, SimpleForm, ReferenceInput, SelectInput, TextInput} from 'react-admin';
import { useMediaQuery} from '@material-ui/core';

const PostTitle = ({record }) => {
    return <span> {record  ? `${record.title}`: null}</span>
}


const postFilters = [
    <TextInput source='q' label='Search' alwaysOn/>,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name"/>
    </ReferenceInput>
]
export const PostEdit = props => (
    <Edit {...props}  title={<PostTitle/>}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
export const PostList = props => {
    const isSmall = useMediaQuery( theme => theme.breakpoints.down('sm'));
    return (
        <List filters = {postFilters} {...props}>

        {isSmall ? 
        (<SimpleList primaryText={record => record.title}
        secondaryText={record => `${record.views} Views`}
        tertiaryText={record => new Date(record.published_at).toLocaleDateString()}>

        </SimpleList>)
        :
       ( <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />

            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>)
            }
       
    </List>
)
}