import {action, computed, observable} from "mobx";
import {persist} from "mobx-persist";
import {login, register} from "../api/auth";

export class User {
    @persist @observable name: string;
    @persist @observable email: string;
    @persist @observable jwt: string;
}

export class AuthStore {
    @persist('object', User) @observable user: User = new User();

    @computed get isLoggedIn(): boolean {
        return !!(this.user && (this.user.jwt && this.user.jwt.length > 1));
    }

    @computed get jwt(): string {
        return this.user.jwt;
    }

    async register(
        name: string,
        email: string,
        password: string,
        onSuccess: (user: User) => any,
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
        onSuccess: (user: User) => any,
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
        this.user = new User();
    }

    @action setAuth(user: {}, jwt: string) {
        const newUser = new User();
        Object.assign(newUser, user);
        newUser.jwt = jwt;
        this.user = newUser;
    }
}

