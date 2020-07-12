import React from 'react';
import {Container, Content, Text} from 'native-base';
import AppHeader from "../../components/AppHeader";

const SearchScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => (
    <Container>
        <AppHeader title={'Search'}/>
        <Content padder>
            <Text>Some Lorem Ipsum text</Text>
        </Content>
    </Container>
);

export default SearchScreen;