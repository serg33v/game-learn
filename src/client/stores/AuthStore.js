import { runInAction, action, observable } from 'mobx';
import AuthService from '../services/AuthService';

export default class AuthStore {
    authService;

    appStore;

    @observable
    authMessage;

    @observable
    isPasswordReset = false;

    constructor(appStore) {
        this.authService = new AuthService();
        this.appStore = appStore;
    }

    @action
    init = async () => {
        try {
            if (!this.isAuthenticated) {
                const response = await this.authService.init();
                runInAction(() => {
                    if (response) {
                        this.appStore.isAuthenticated = true;
                        console.log('init', response);
                        this.appStore.accountStore.account = response;
                    }
                });
            }
        } catch (err) {
            console.log('AuthStore init error', err);
        }
    }

    @action
    authenticate = async (email, pass) => {
        try {
            const response = await this.authService.auth(email, pass);
            runInAction(() => {
                if (response) {
                    this.appStore.isAuthenticated = true;
                    this.appStore.accountStore.account = response;
                }
            });
        } catch (err) {
            this.authMessage = 'Email or password incorrect';
            console.log('AuthStore authenticate error', err);
        }
    }

    @action
    resetPassword = async (email) => {
        try {
            await this.authService.resetPassword(email);
            runInAction(() => {
                this.authMessage = 'Email with new password was sent';
            });
        } catch (err) {
            this.authMessage = 'Email with new password was sent';
            console.log('AuthStore authenticate error', err);
        }
    }

    @action
    logout = async () => {
        try {
            await this.authService.logout();
            runInAction(() => {
                this.appStore.isAuthenticated = false;
                this.appStore.accountStore.account = {};
            });
        } catch (err) {
            console.log('logout error', err);
        }
    }
}
