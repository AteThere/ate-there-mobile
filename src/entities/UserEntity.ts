import {persist} from "mobx-persist";
import {observable} from "mobx";

export class UserEntity {
    @persist @observable name: string | undefined;
    @persist @observable email: string | undefined;
    @persist @observable jwt: string | undefined;
}
