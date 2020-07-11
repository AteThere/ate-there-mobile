import React from 'react';
import 'mobx-react-lite/batchingForReactDom'
import {Body, Container, Content, Header, Left, Right, Subtitle, Text, Title} from 'native-base';
import CounterUI from "../components/CounterUI";
import AppHeader from "../components/AppHeader";

const HomeScreen = () => (
    <Container>
        <AppHeader title={'Home'}/>
        <Content scrollEnabled={false}>
            <Text>Open up App.js to start working on your app!</Text>
        </Content>
    </Container>
);

HomeScreen.navigationOptions = {
    header: null,
};
export default HomeScreen;