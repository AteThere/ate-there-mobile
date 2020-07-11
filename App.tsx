import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'mobx-react';
import counterStore from './src/stores/CounterStore';
import CounterUI from "./src/components/CounterUI";

export default function App() {
    return (
        <Provider counterStore={counterStore}>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto"/>
                <CounterUI/>
            </View>
        </Provider>
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
