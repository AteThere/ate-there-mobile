import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {hydrateStores, StoreContext, stores} from "./src/stores";
import 'mobx-react-lite/batchingForReactDom'
import {AppLoading} from 'expo';
import {Root} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import Navigation from "./src/navigation";

type State = {
    isReady: boolean,
};

type Props = {};
export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Promise.all([
            hydrateStores(),
            Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            })
        ]);
        await stores.categoryStore.download();
        await stores.locationStore.setInferredLocation();
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }

        return (
            <StoreContext.Provider value={stores}>
                <Root>
                    <Navigation/>
                </Root>
            </StoreContext.Provider>
        );
    }
}

