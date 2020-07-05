import { observable } from 'mobx';

export default class AppStore {
    @observable isAuthenticated;

    @observable appReady;

    accountStore;

    authStore;

    contractStore;

    teamStore;

    constructor() {
        this.isAuthenticated = false;
        this.appReady = false;
    }
}
