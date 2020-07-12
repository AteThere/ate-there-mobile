import React from 'react';
import {Container, Content, Text} from 'native-base';
import AppHeader from "../components/AppHeader";
import NavButton from "../components/NavButton";

const HomeScreen = () => (
    <Container>
        <AppHeader title={'Home'} LeftComponent={(
            <NavButton iconName={'clock'} onPress={(navigation) => navigation.navigate('Counter')}/>
        )}/>
        <Content scrollEnabled={false}>
            <Text>Open up App.js to start working on your app!</Text>
        </Content>
    </Container>
);

export default HomeScreen;