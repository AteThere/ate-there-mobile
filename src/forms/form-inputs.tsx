import React, {FunctionComponent} from "react";
import {Button, Icon, Input, Item, NativeBase, Spinner, Text} from "native-base";
import {useField, useFormikContext} from 'formik';

interface InputProps extends NativeBase.Input {
    name: string
    iconName?: string,
}

interface BaseInputProps extends InputProps {
    iconName: string,
}

interface SubmitButtonProps extends NativeBase.Button {
    title: string,
    spinnerColor?: string
}

export const BaseInput: FunctionComponent<BaseInputProps> = ({name, iconName, ...props}) => {
    const [field, meta, helpers] = useField({name});
    const {onBlur, onChange} = field;
    const {error, touched, value} = meta;
    const hasError = !!error && touched;
    const isOk = !error && touched;

    return (
        <>
            <Item error={hasError} success={isOk}>
                <Icon active name={iconName}/>
                <Input
                    onChangeText={onChange(name)}
                    onBlur={onBlur(name)}
                    value={value}
                    clearButtonMode={'while-editing'}
                    {...props}/>
            </Item>
            <Text note style={{
                marginTop: 2,
                color: "red",
                left: 20
            }}>{hasError ? error : ' '}</Text>
        </>
    );
}

export const EmailInput: FunctionComponent<InputProps> = ({iconName = 'mail', ...props}) => <BaseInput
    iconName={iconName}
    autoCapitalize={'none'}
    autoCompleteType={'email'}
    autoCorrect={false}
    autoFocus={false}
    keyboardType={'email-address'}
    textContentType={'emailAddress'}
    placeholder={'Your Email Address'}
    {...props}/>

export const NameInput: FunctionComponent<InputProps> = ({iconName = 'person', ...props}) => <BaseInput
    iconName={iconName}
    autoCapitalize={'words'}
    autoCompleteType={'name'}
    autoCorrect={true}
    autoFocus={false}
    keyboardType={'default'}
    textContentType={'name'}
    placeholder='Your Full Name'
    {...props}/>

export const PasswordInput: FunctionComponent<InputProps> = ({iconName = 'lock', ...props}) => <BaseInput
    iconName={iconName}
    autoCapitalize={'none'}
    autoCompleteType={'password'}
    autoCorrect={false}
    autoFocus={false}
    keyboardType={'default'}
    textContentType={'password'}
    secureTextEntry={true}
    placeholder='Your Password'

    {...props}/>

export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({title, spinnerColor = 'gray', ...props}) => {
    const {isSubmitting, handleSubmit} = useFormikContext();
    return (
        <Button
            disabled={isSubmitting}
            bordered={isSubmitting}
            style={{marginTop: 10, marginBottom: 20, justifyContent: 'center'}}
            onPress={handleSubmit}
            {...props}>
            <Text>{title}</Text>
            {isSubmitting && <Spinner color={spinnerColor} size={'small'}/>}
        </Button>
    );
};
