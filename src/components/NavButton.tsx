import React, {FunctionComponent} from "react";
import {Button, Icon} from "native-base";
import {useNavigation} from "@react-navigation/native";

type Props = {
    iconName: string,
    onPress: (navigation: any) => boolean
};

const NavButton: FunctionComponent<Props> = ({iconName, onPress}) => {
    const navigation = useNavigation();
    const handleNavigation = () => onPress(navigation);
    return (
        <Button transparent onPress={handleNavigation}>
            <Icon name={iconName}/>
        </Button>
    );
};

export default NavButton;