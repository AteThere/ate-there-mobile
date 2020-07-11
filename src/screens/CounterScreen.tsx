import React from 'react';
import {Container, Content} from 'native-base';
import CounterUI from "../components/CounterUI";
import AppHeader from "../components/AppHeader";
import NavButton from "../components/NavButton";

const CounterScreen = () => (
    <Container>
        <AppHeader title={'Counter'} LeftComponent={(
            <NavButton iconName={'home'} onPress={(navigation) => navigation.navigate('Home')}/>
        )}/>
        <Content>
            <CounterUI/>
        </Content>
    </Container>
);
export default CounterScreen;