import { runInAction, action, observable } from 'mobx';
import TeamService from '../services/TeamService';

export default class TeamStore {
    teamService;

    appStore;

    @observable
    team

    constructor(appStore) {
        this.teamService = new TeamService();
        this.appStore = appStore;
    }

    @action
    getTeam = async () => {
        const team = await this.teamService.getTeam();
        runInAction(() => {
            console.log('get team', team);
            if (team) {
                this.team = team;
            }
        });
    }
}
