import {action, computed, observable} from "mobx";
import {persist} from "mobx-persist";
import {login, register} from "../api/auth";
import {UserEntity} from "../entities/UserEntity";

export class AuthStore {
    @persist('object', UserEntity) @observable user: UserEntity = new UserEntity();

    // @ts-ignore
    @computed get isLoggedIn(): boolean {
        return !!(this.user && (this.user.jwt && this.user.jwt.length > 1));
    }

    // @ts-ignore
    @computed get jwt(): string {
        return <string>this.user.jwt;
    }

    async register(
        name: string,
        email: string,
        password: string,
        onSuccess: (user: UserEntity) => any,
        onFail: (error: Error) => any
    ) {
        const {status, msg, user, jwt} = await register(name, email, password);
        if (status !== true) {
            return onFail(new Error(msg))
        }

        this.setAuth(user, jwt);
        onSuccess(user);
    }

    async login(
        email: string,
        password: string,
        onSuccess: (user: UserEntity) => any,
        onFail: (error: Error) => any
    ) {
        const {status, msg, user, jwt} = await login(email, password);
        if (status !== true) {
            return onFail(new Error(msg))
        }

        this.setAuth(user, jwt);
        onSuccess(user);
    }


    @action logout() {
        this.user = new UserEntity();
    }

    @action setAuth(user: {}, jwt: string) {
        const newUser = new UserEntity();
        Object.assign(newUser, user);
        newUser.jwt = jwt;
        this.user = newUser;
    }
}

