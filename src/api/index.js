import { DEFAULT_API_PREFIX } from '../config';
import ApiClient              from './ApiClient';
import MinifigsAPI            from './Minifigs';

export default function apiConstruct() {
    const api = new ApiClient(DEFAULT_API_PREFIX);


    return {
        apiClient : api,
        minifigs  : new MinifigsAPI({ apiClient : api })
    };
}
