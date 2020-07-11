// @ts-ignore
import React from 'react';
// @ts-ignore
import {Button, Container, Content, H1, Text, View} from 'native-base';
import {StyleSheet} from "react-native";
import LogInForm from "../../forms/LogInForm";

const LogInScreen = () => (
    <Container>
        <Content scrollEnabled={false} style={styles.content} padder>
            <View style={styles.header}>
                <H1>Log In</H1>
            </View>
            <LogInForm style={styles.form}/>
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