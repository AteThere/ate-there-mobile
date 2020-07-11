import React from "react";
import {Button, Text, View} from "react-native";
import {inject, observer} from "mobx-react";
import {CounterStore} from "../stores/CounterStore";

type CounterUIProps = {
    counterStore: CounterStore,
}

const CounterUI = ({counterStore}: CounterUIProps) => (
    <View>
        <Text>Counter: {counterStore.count}</Text>
        <Button title={'Increment'} onPress={() => counterStore.increment()}/>
        <Button title={'Decrement'} onPress={() => counterStore.decrement()}/>
    </View>
);

export default inject('counterStore')(observer(CounterUI))