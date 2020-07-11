import React, {Component} from 'react';
import {store, StoreContext} from "./src/stores";
import 'mobx-react-lite/batchingForReactDom'
import {AppLoading} from 'expo';
import {Root} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import HomeScreen from "./src/screens/HomeScreen";

type Props = {};

type State = {
    isReady: boolean
};

export default class App extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
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
                    <HomeScreen/>
                </Root>
            </StoreContext.Provider>
        );
    }
}

