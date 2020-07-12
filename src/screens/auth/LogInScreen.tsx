import React from 'react';
import {Button, Container, Content, H1, Text, View} from 'native-base';
import {StyleSheet} from "react-native";
import LogInForm from "../../forms/LogInForm";
import {useNavigation} from "@react-navigation/native";

const LogInScreen = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Content scrollEnabled={false} style={styles.content} padder>
                <View style={styles.header}>
                    <H1>Log In</H1>
                </View>
                <LogInForm style={styles.form}/>
                <Button bordered style={styles.btn} onPress={() => navigation.navigate('Register')}>
                    <Text>Don't have an account? Register here</Text>
                </Button>

                <Button bordered style={styles.btn}>
                    <Text>Forgot Password</Text>
                </Button>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    content: {
        top: '15%',
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