import React from 'react';
import {Button, Container, Content, Text} from 'native-base';
import AppHeader from "../../components/AppHeader";
import {JsonView} from "../../components/JsonView";

const SearchScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => (
    <Container>
        <AppHeader title={'Search'}/>
        <Content padder>
            <Button small onPress={() => props.navigation.navigate('Restaurant')}>
                <Text>Detail</Text>
            </Button>

            <Button small onPress={() => props.navigation.navigate('Locations')}>
                <Text>Locations</Text>
            </Button>
            <Text>Some Lorem Ipsum text</Text>
            <JsonView obj={props}/>
        </Content>
    </Container>
);

export default SearchScreen;