import React, {FunctionComponent} from 'react'
import {Button, Form, Icon, Input, Item, Text} from "native-base";
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useStore} from "../stores";
import {User} from "../stores/AuthStore";
import {observer} from "mobx-react";
import {YellowBox} from 'react-native'
import Notifications from '../functions/notifications';

YellowBox.ignoreWarnings([
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])

type Props = {
    style: any
}

const RegisterForm: FunctionComponent<Props> = ({style}) => {
    const {authStore} = useStore();

    const initialValues = {
        name: 'Angel',
        email: 'angelx5moreno@gmail.com',
        password: 'abcd1234',
    };

    const schema = Yup.object().shape({
        name: Yup.string()
            .required(),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

    const onRegisterSuccess = (user: User) => {
        Notifications.success({
            text: `Greetings ${user.name}!`,
        });
    };
    const onRegisterFail = (e: Error) => {
        Notifications.danger({
            text: e.message,
        });
    };

    const submitAction = async (values: { name: string, email: string; password: string; }, {setFieldError}: any) => {
        try {
            const {name, email, password} = values;
            await authStore.register(name, email, password, onRegisterSuccess, onRegisterFail);
        } catch (e) {
            Notifications.danger({
                text: e.message,
            });
        }
    };

    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submitAction}>
            {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  isSubmitting
              }) => (
                <Form style={style}>
                    <Item error={!!errors.name && touched.name} success={!errors.name && touched.name}>
                        <Icon active name='person'/>
                        <Input
                            autoCapitalize={'words'}
                            autoCompleteType={'name'}
                            autoCorrect={true}
                            autoFocus={true}
                            clearButtonMode={'while-editing'}
                            keyboardType={'default'}
                            textContentType={'name'}

                            placeholder='Your Email Address'
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}/>
                    </Item>
                    <Item error={!!errors.email && touched.email} success={!errors.email && touched.email}>
                        <Icon active name='mail'/>
                        <Input
                            autoCapitalize={'none'}
                            autoCompleteType={'email'}
                            autoCorrect={false}
                            autoFocus={true}
                            clearButtonMode={'while-editing'}
                            keyboardType={'email-address'}
                            textContentType={'emailAddress'}

                            placeholder='Your Email Address'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}/>
                    </Item>
                    <Item>
                        <Icon active name='lock'/>
                        <Input
                            autoCapitalize={'none'}
                            autoCompleteType={'password'}
                            autoCorrect={false}
                            autoFocus={false}
                            clearButtonMode={'while-editing'}
                            keyboardType={'default'}
                            textContentType={'password'}
                            secureTextEntry={true}

                            placeholder='Your Password'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}/>
                    </Item>
                    <Button style={{marginTop: 10, marginBottom: 20, justifyContent: 'center'}} onPress={handleSubmit}>
                        <Text>Register</Text>
                    </Button>
                </Form>
            )}
        </Formik>

    );
};

export default observer(RegisterForm);