import React, {FunctionComponent} from 'react'
import {Button, Form, Icon, Input, Item, Text} from "native-base";
import * as Yup from 'yup';
import {Formik} from 'formik';

type Props = {
    style: any
}

const LogInForm: FunctionComponent<Props> = ({style}) => {
    const initialValues = {
        email: '',
        password: 'fooBar123',
    };

    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

    const submitAction = async (values: { email: any; password: any; }, {setFieldError}: any) => {
        try {
            const {email, password} = values;
            console.log('values', values)
            // const user = await auth.login(email, password);
            // Alert({
            //     title: 'Log In Successful',
            //     message: 'Welcome back ' + user.name + '!',
            //     confirmText: 'Ok'
            // })
            // history.push('/profile');
        } catch (e) {
            // Alert({
            //     title: 'Log In Fail',
            //     message: e.message,
            //     confirmText: 'Ok'
            // })
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
                    <Item error={!!errors.email && touched.email} success={!errors.email && touched.email}>
                        <Icon active name='person'/>
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
                        <Icon active name='close-circle'/>
                    </Item>
                    <Button style={{marginTop: 10, marginBottom: 20, justifyContent: 'center'}} onPress={handleSubmit}>
                        <Text>Log In</Text>
                    </Button>
                </Form>
            )}
        </Formik>

    );
};

export default LogInForm;