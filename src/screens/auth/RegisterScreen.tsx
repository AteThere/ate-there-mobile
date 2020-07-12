import React from 'react';
import {Button, Container, Content, H1, Text, View} from 'native-base';
import {StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import RegisterForm from "../../forms/RegisterForm";

const RegisterScreen = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Content scrollEnabled={false} style={styles.content} padder>
                <View style={styles.header}>
                    <H1>Register</H1>
                </View>
                <RegisterForm style={styles.form}/>
                <Button bordered style={styles.btn} onPress={() => navigation.navigate('LogIn')}>
                    <Text>Have an account? Log in here.</Text>
                </Button>

                <Button bordered style={styles.btn}>
                    <Text>Forgot Password</Text>
                </Button>
            </Content>
        </Container>
    );
}

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

export default RegisterScreen;