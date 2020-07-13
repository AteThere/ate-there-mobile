import React, {FunctionComponent} from 'react';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from "@react-navigation/drawer";

type AppHeaderProps = {
    title: string,
    hideMenu?: boolean,
    LeftComponent?: React.ReactNode,
};

const AppHeader: FunctionComponent<AppHeaderProps> = (
    {
        title,
        hideMenu = false,
        LeftComponent,
        ...rest
    }
) => {
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    return (
        <Header hasSegment={false} hasSubtitle={false} hasTabs={false} style={{paddingTop: 0}}>
            {LeftComponent && (
                <Left>
                    {LeftComponent}
                </Left>
            )}
            {!!LeftComponent && <Left/>}
            <Body>
                <Title>{title}</Title>
            </Body>
            {hideMenu && <Right/>}
            {!hideMenu && (
                <Right>
                    <Button
                        transparent
                        onPress={() => navigation.openDrawer()}
                    >
                        <Icon name="menu"/>
                    </Button>
                </Right>
            )}

        </Header>
    );
};
export default AppHeader;