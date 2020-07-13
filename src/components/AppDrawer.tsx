import React, {FunctionComponent} from "react";
import {Container, Content, H3, List, ListItem, Text} from "native-base";
import {useNavigation} from "@react-navigation/native";
import AppHeader from "./AppHeader";
import {Divider, Image} from 'react-native-elements';
import {Col, Grid, Row} from 'react-native-easy-grid';
import LogOutButton from "./LogOutButton";

const AppDrawer: FunctionComponent<{}> = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <AppHeader title={'Menu'} hideMenu/>
            <Content>
                <Grid>
                    <Row style={{margin: 10}}>
                        <Col size={1}>
                            <Image
                                style={{height: 75, width: 75}}
                                source={{
                                    uri: "https://picsum.photos/70/80"
                                }}
                            />
                        </Col>
                        <Col size={2}>
                            <Text note>Logged in as:</Text>
                            <H3>Bob</H3>
                            <LogOutButton small/>
                        </Col>
                    </Row>
                </Grid>
                <Divider/>
                <List>
                    <ListItem>
                        <Text>Simon Mignolet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Nathaniel Clyne</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
}

export default AppDrawer;