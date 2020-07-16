import React, {FunctionComponent} from 'react'
import {Form} from "native-base";
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useStore} from "../stores";
import {observer} from "mobx-react";
import {YellowBox} from 'react-native'
import Notifications from "../functions/notifications";
import {EmailInput, PasswordInput, SubmitButton} from "./form-inputs";
import {UserEntity} from "../entities/UserEntity";

YellowBox.ignoreWarnings([
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])

type Props = {
    style: any
}

const LogInForm: FunctionComponent<Props> = ({style}) => {
    const {authStore} = useStore();

    const initialValues = {
        email: '',
        password: '',
    };

    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

    const onLogInSuccess = (user: UserEntity) => {
        Notifications.success({text: `Welcome back ${user.name}!`});
    };

    const onLoginFail = (e: Error) => {
        Notifications.danger({
            text: e.message,
        });
    };

    const submitAction = async (values: { email: any; password: any; }, {setFieldError}: any) => {
        try {
            const {email, password} = values;
            await authStore.login(email, password, onLogInSuccess, onLoginFail);
        } catch (e) {
            Notifications.danger({
                text: e.message,
            });
        }
    };

    return (
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={submitAction}>
            {({
                  handleSubmit,
                  isSubmitting
              }) => (
                <Form style={style}>
                    <EmailInput name={'email'}/>
                    <PasswordInput name={'password'}/>
                    <SubmitButton title={'Log In'}/>
                </Form>
            )}
        </Formik>

    );
};

export default observer(LogInForm);