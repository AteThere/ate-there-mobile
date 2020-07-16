import React, {FC, ReactNode, useEffect} from "react";
import {Modal} from "react-native";
import {Body, Button, Header, Icon, Left, Right, Title} from "native-base";

export type AppModalProps = {
    title: string;
    visible?: boolean;
    setVisibility: (visible: boolean) => any;
    children: ReactNode;
}

const AppModal: FC<AppModalProps> = ({setVisibility, children, title, visible = false}) => {
    useEffect(() => {
        setVisibility(visible);
    }, [visible]);
    return (
        <Modal
            presentationStyle={'fullScreen'}
            animationType={'slide'}
            hardwareAccelerated={true}
            visible={visible}
        >
            <Header>
                <Left/>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>
                    <Button
                        transparent
                        onPress={() => setVisibility(false)}
                    >
                        <Icon name="close-circle"/>
                    </Button>
                </Right>
            </Header>
            {children}
        </Modal>
    );
};


export default AppModal;