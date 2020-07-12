import React from 'react';
import {Container, Content, Text} from 'native-base';
import AppHeader from "../../components/AppHeader";

const RestaurantDetailsScreen = (props: { navigation: { goBack: () => void; }; }) => (
    <Container>
        <AppHeader title={'RestaurantDetails'}/>
        <Content padder>
            <Text>Some Lorem Ipsum text</Text>
        </Content>
    </Container>
);

export default RestaurantDetailsScreen;