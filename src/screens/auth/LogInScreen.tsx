// @ts-ignore
import React from 'react';
// @ts-ignore
import {Button, Container, Content, Form, H1, Icon, Input, Item, Text, View} from 'native-base';
import {StyleSheet} from "react-native";

const LogInScreen = () => (
    <Container>
        <Content scrollEnabled={false} style={styles.content} padder>
            <View style={styles.header}>
                <H1>Log In</H1>
            </View>
            <Form style={styles.form}>
                <Item>
                    <Icon active name='person'/>
                    <Input placeholder='Icon Textbox'/>
                    <Icon active name='close-circle'/>
                </Item>
                <Item>
                    <Icon active name='lock'/>
                    <Input placeholder='Icon Alignment in Textbox'/>
                    <Icon active name='close-circle'/>
                </Item>
            </Form>
            <Button style={styles.btn}>
                <Text>Log In</Text>
            </Button>
            <Button bordered style={styles.btn}>
                <Text>Register</Text>
            </Button>
            <Button bordered style={styles.btn}>
                <Text>Forgot Password</Text>
            </Button>
        </Content>
    </Container>
);

const styles = StyleSheet.create({
    content: {
        top: '25%',
    },
    header: {
        alignItems: 'center'
    },
    form: {},
    btn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
});

// @ts-ignore
export default LogInScreen;