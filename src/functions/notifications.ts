import {RnTextStyleProp, RnViewStyleProp, Toast} from "native-base";


type NotificationConfig = {
    text: string;
    buttonText?: string;
    position?: "top" | "bottom" | "center";
    type?: "danger" | "success" | "warning";
    duration?: number;
    onClose?: (reason: "user" | "timeout" | "functionCall") => any;
    style?: RnViewStyleProp;
    textStyle?: RnTextStyleProp;
    buttonTextStyle?: RnTextStyleProp;
    buttonStyle?: RnViewStyleProp;
};

const defaultConfig: NotificationConfig = {
    text: '',
    buttonText: 'Okay',
    type: 'warning',
    position: 'top',
    duration: 3000
};

const success = (config: NotificationConfig) => Toast.show({...defaultConfig, ...config, type: 'success'});
const warning = (config: NotificationConfig) => Toast.show({...defaultConfig, ...config, type: 'warning'});
const danger = (config: NotificationConfig) => Toast.show({...defaultConfig, ...config, type: 'danger'});

export default {
    success,
    warning,
    danger
}

