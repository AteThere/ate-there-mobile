import React, {FunctionComponent} from 'react';
import {Body, Header, Left, Right, Title} from 'native-base';
import LogOutButton from "./LogOutButton";

type Props = {
    title: string,
    LeftComponent: React.ReactNode
};

const AppHeader: FunctionComponent<Props> = ({title, LeftComponent}) => (
    <Header hasSegment={false} hasSubtitle={false} hasTabs={false} style={{paddingTop: 0}}>
        <Left>
            {LeftComponent}
        </Left>
        <Body>
            <Title>{title}</Title>
        </Body>
        <Right>
            <LogOutButton/>
        </Right>
    </Header>
);
export default AppHeader;