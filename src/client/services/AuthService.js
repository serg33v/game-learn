import http from '../utils/http';
import config from '../config';

export default class AuthService {
    init = async () => {
        const response = await http.get(`${config.ROOT_URL}/api/auth/init`);
        return response;
    }

    auth = async (email, password) => {
        const response = await http.post(`${config.ROOT_URL}/api/auth/email`, { email, password });
        return response;
    }

    resetPassword = async (email) => {
        const response = await http.post(`${config.ROOT_URL}/api/auth/password/reset`, { email });
        return response;
    }

    logout = async () => {
        await http.get(`${config.ROOT_URL}/api/auth/logout`);
    }
}
