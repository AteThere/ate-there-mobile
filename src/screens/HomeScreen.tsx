import React from 'react';
import 'mobx-react-lite/batchingForReactDom'
import {Body, Container, Content, Header, Left, Right, Subtitle, Text, Title} from 'native-base';
import CounterUI from "../components/CounterUI";

const HomeScreen = () => (
    <Container>
        <Header>
            <Left/>
            <Body>
                <Title>Home</Title>
                <Subtitle>home screen</Subtitle>
            </Body>
            <Right/>
        </Header>
        <Content>
            <Text>Open up App.js to start working on your app!</Text>
            <CounterUI/>
        </Content>
    </Container>
);
export default HomeScreen;