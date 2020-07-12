import React from 'react';
import {Button, Container, Content, Text} from 'native-base';
import AppHeader from "../../components/AppHeader";
import {JsonView} from "../../components/JsonView";

const RestaurantDetailsScreen = (props: { navigation: { goBack: () => void; }; }) => (
    <Container>
        <AppHeader title={'RestaurantDetails'}/>
        <Content padder>
            <Button onPress={() => props.navigation.goBack()}>
                <Text>Back</Text>
            </Button>
            <Text>Some Lorem Ipsum text</Text>
            <JsonView obj={props}/>
        </Content>
    </Container>
);

export default RestaurantDetailsScreen;