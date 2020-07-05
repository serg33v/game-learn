import axios from 'axios';
import OneTurnError from '../model/OneTurnError';

const http = axios.create({ withCredentials: true });
// http.interceptors.response.use((response) => response, (error) => {
//     if (error.response.status === 401) {
//         return error.response;
//     }
//     return error;
// });


export default {
    get: async (url) => {
        console.log('GET:', url);
        try {
            const response = await http.get(url);
            console.log('GET Response:', response);
            if (response.status === 200) {
                return response.data;
            }
            // if (response.status === 401) {
            //     return response;
            // }
            throw new OneTurnError('HTTP GET unexpected response');
        } catch (err) {
            console.error('HTTP GET error: ', err);
            throw err;
        }
    },
    post: async (url, data) => {
        console.log('POST:', url, data);
        try {
            const response = await http.post(url, data);
            console.log('POST Response:', response);
            if (response.status === 200) {
                return response.data;
            }
            // if (response.status === 401) {
            //     return response;
            // }
            throw new OneTurnError('HTTP POST unexpected response');
        } catch (err) {
            console.error('HTTP POST error: ', err);
            throw err;
        }
    },
    put: async (url, data) => {
        console.log('PUT:', url, data);
        try {
            const response = await http.put(url, data);
            console.log('PUT Response:', response);
            if (response.status === 200) {
                return response.data;
            }
            // if (response.status === 401) {
            //     return response;
            // }
            throw new OneTurnError('HTTP PUT unexpected response');
        } catch (err) {
            console.error('HTTP PUT error: ', err);
            throw err;
        }
    },
    delete: async (url) => {
        console.log('DELETE:', url);
        try {
            const response = await http.delete(url);
            console.log('DELETE Response:', response);
            if (response.status === 200) {
                return response.data;
            }
            // if (response.status === 401) {
            //     return response;
            // }
            throw new OneTurnError('HTTP DELETE unexpected response');
        } catch (err) {
            console.error('HTTP DELETE error: ', err);
            throw err;
        }
    },
};
