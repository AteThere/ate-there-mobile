import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CounterUI from "./src/components/CounterUI";
import {store, StoreContext} from "./src/stores";
import 'mobx-react-lite/batchingForReactDom'

export default function App() {
    return (
        <StoreContext.Provider value={store}>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto"/>

                <CounterUI/>
            </View>
        </StoreContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
