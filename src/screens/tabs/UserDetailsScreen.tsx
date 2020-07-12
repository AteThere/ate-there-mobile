import React from 'react';
import {Container, Content, Text} from 'native-base';
import AppHeader from "../../components/AppHeader";

const UserDetailsScreen = () => (
    <Container>
        <AppHeader title={'UserDetails'}/>
        <Content padder>
            <Text>Some Lorem Ipsum text</Text>
        </Content>
    </Container>
);

export default UserDetailsScreen;