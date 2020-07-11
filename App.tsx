import React, {Component} from 'react';
import CounterUI from "./src/components/CounterUI";
import {store, StoreContext} from "./src/stores";
import 'mobx-react-lite/batchingForReactDom'
import {AppLoading} from 'expo';
import {Body, Container, Header, Left, Right, Root, Subtitle, Text, Title} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

export default class App extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }

        return (
            <StoreContext.Provider value={store}>
                <Root>
                    <Container>
                        <Header>
                            <Left/>
                            <Body>
                                <Title>Title</Title>
                                <Subtitle>Subtitle</Subtitle>
                            </Body>
                            <Right/>
                        </Header>
                        <Text>Open up App.js to start working on your app!</Text>
                        <CounterUI/>
                    </Container>
                </Root>
            </StoreContext.Provider>
        );
    }
}

