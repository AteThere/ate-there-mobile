import React, {FunctionComponent} from 'react';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';

type Props = {
    title: string
};

const AppHeader: FunctionComponent<Props> = ({title}) => {
    return (
        <Header hasSegment={false} hasSubtitle={false} hasTabs={false}>
            <Left>
                <Button transparent>
                    <Icon name='arrow-back'/>
                </Button>
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='search'/>
                </Button>
                <Button transparent>
                    <Icon name='heart'/>
                </Button>
                <Button transparent>
                    <Icon name='more'/>
                </Button>
            </Right>
        </Header>
    );
};

export default AppHeader;