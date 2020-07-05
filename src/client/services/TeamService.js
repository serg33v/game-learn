import http from '../utils/http';
import config from '../config';

export default class TeamService {
    getTeam = async () => {
        await http.get(`${config.ROOT_URL}/api/teams`);
    }

    updateTeam = async (data) => {
        await http.put(`${config.ROOT_URL}/api/teams`, data);
    }
}
