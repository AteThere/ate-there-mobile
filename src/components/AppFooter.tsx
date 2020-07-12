import React, {FunctionComponent} from 'react';
import {Button, Footer, FooterTab, Icon, Text} from 'native-base';
import {tabsConfig} from "../screens/tabs/tabsConfig";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";

type TabBarProps = {
    title: string,
    iconName: string,
    isActive?: boolean
    navigation: any
};

const TabBar: FunctionComponent<TabBarProps> = (
    {
        title,
        iconName,
        isActive = false,
        navigation,
    }
) => (
    <Button vertical disabled={isActive} active={isActive} onPress={() => navigation.navigate(title)}>
        <Icon name={iconName}/>
        <Text>{title}</Text>
    </Button>
);

const AppFooter: FunctionComponent<BottomTabBarProps> = ({state, navigation}) => {
    return (
        <Footer>
            <FooterTab>
                {tabsConfig.map(({title, iconName}, index) => (
                    <TabBar
                        key={`${title}Tab`}
                        {...{title, iconName, navigation}}
                        isActive={state.index === index}
                    />
                ))}
            </FooterTab>
        </Footer>
    );
};

export default AppFooter;