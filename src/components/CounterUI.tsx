import React, {FunctionComponent} from "react";
import {Button, Text, View} from "react-native";
import {observer} from "mobx-react";
import {useStore} from "../stores";

type CounterUIProps = {}

const CounterUI: FunctionComponent<CounterUIProps> = (props) => {
    const {counterStore} = useStore();

    return (
        <View>
            <Text>Counter: {counterStore.count}</Text>
            <Button title={'Increment'} onPress={() => counterStore.increment()}/>
            <Button title={'Decrement'} onPress={() => counterStore.decrement()}/>
        </View>
    );
}

export default observer(CounterUI)