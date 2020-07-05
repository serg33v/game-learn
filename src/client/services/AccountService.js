import http from '../utils/http';
import config from '../config';

export default class AccountService {
    getAccount = async () => {
        await http.get(`${config.ROOT_URL}/api/accounts`);
    }

    updateAccount = async (data) => {
        const response = await http.put(`${config.ROOT_URL}/api/accounts`, data);
        return response;
    }
}
