import React, {FunctionComponent} from 'react';
import {Button, NativeBase, Text} from 'native-base';
import {observer} from "mobx-react";
import {useStore} from "../stores";

interface Props extends NativeBase.Button {
    afterLogOut?: () => any,
    title?: string
}

const LogOutButton: FunctionComponent<Props> = (
    {
        afterLogOut = () => true,
        title = 'Log Out',
        style,
        ...rest
    }) => {

    const {authStore} = useStore();

    const props = {
        bordered: true,
        danger: true,
        ...rest
    }

    const handleOnPress = async () => {
        await authStore.logout();
        await afterLogOut();
    };

    return (
        <Button
            style={[{justifyContent: 'center'}, style]}
            {...props}
            disabled={!authStore.isLoggedIn}
            onPress={handleOnPress}>
            <Text>{title}</Text>
        </Button>
    );
}

export default observer(LogOutButton);