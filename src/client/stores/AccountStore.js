import { runInAction, action, observable } from 'mobx';
import AccountService from '../services/AccountService';

export default class AccountStore {
    accountService

    appStore

    @observable
    account;

    constructor(appStore) {
        this.accountService = new AccountService();
        this.appStore = appStore;
    }

    @action
    updateAccount = async (data) => {
        try {
            const account = await this.accountService.updateAccount(data);
            runInAction(() => {
                this.account.name = account.name;
            });
        } catch (err) {
            console.log('updateAccount error', err);
        }
    }

    changePassword = async (oldPass, newPass, verifiedPass) => {
        try {
            await this.accountService.resetPassword(oldPass, newPass, verifiedPass);
        } catch (err) {
            console.log('changePassword error', err);
        }
    }
}
