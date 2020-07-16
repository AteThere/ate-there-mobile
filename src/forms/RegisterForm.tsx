import React, {FunctionComponent} from 'react'
import {Form} from "native-base";
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useStore} from "../stores";
import {observer} from "mobx-react";
import {YellowBox} from 'react-native'
import Notifications from '../functions/notifications';
import {EmailInput, NameInput, PasswordInput, SubmitButton} from "./form-inputs";
import {UserEntity} from "../entities/UserEntity";

YellowBox.ignoreWarnings([
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])

type Props = {
    style: any
}

const RegisterForm: FunctionComponent<Props> = ({style}) => {
    const {authStore} = useStore();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const schema = Yup.object().shape({
        name: Yup.string()
            .min(2)
            .max(50)
            .required(),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

    const onRegisterSuccess = (user: UserEntity) => {
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
                  handleSubmit,
                  isSubmitting
              }) => (
                <Form style={style}>
                    <NameInput name={'name'}/>
                    <EmailInput name={'email'}/>
                    <PasswordInput name={'password'}/>
                    <SubmitButton title={'Register'}/>
                </Form>
            )}
        </Formik>

    );
};

export default observer(RegisterForm);