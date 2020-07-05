import http from '../utils/http';
import config from '../config';

export default class ContractService {
    getContractById = (id) => {
        return http.get(`${config.ROOT_URL}/api/contracts/${id}`);
    }

    getContracts = () => {
        return http.get(`${config.ROOT_URL}/api/contracts`);
    }

    createContract = (data) => {
        return http.post(`${config.ROOT_URL}/api/contracts`, data);
    }

    updateContract = (id, data) => {
        return http.put(`${config.ROOT_URL}/api/contracts/${id}`, data);
    }
}
