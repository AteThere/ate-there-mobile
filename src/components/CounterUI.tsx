import React, {FunctionComponent} from "react";
import {observer} from "mobx-react";
import {useStore} from "../stores";
import {Button, Icon, Text, View} from 'native-base';

type CounterUIProps = {}

const CounterUI: FunctionComponent<CounterUIProps> = (props) => {
    const {counterStore} = useStore();

    return (
        <View style={{flexDirection: 'row'}}>
            <Button block success iconLeft onPress={() => counterStore.increment()}>
                <Icon name='arrow-up'/>
                <Text>Add</Text>
            </Button>
            <Button disabled block bordered>
                <Text>{counterStore.count}</Text>
            </Button>
            <Button block danger iconLeft onPress={() => counterStore.decrement()}>
                <Icon name='arrow-down'/>
                <Text>Remove</Text>
            </Button>
        </View>
    );
}

export default observer(CounterUI)