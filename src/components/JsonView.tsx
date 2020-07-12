import React from 'react'
import {Text} from "react-native";

export const JsonView = ({obj}) => (
    <Text>
        {JSON.stringify(obj, null, 2)}
    </Text>
);