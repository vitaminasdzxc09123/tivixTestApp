import Base from './Base.js';

export default class MinifigsAPI extends Base {
    async list(payload) {
        return this.apiClient.get({
            requestURL : `lego/minifigs/?page_size=${payload?.page_size}&in_theme_id=${payload?.id}`
        });
    }

    async detailed(id) {
        return this.apiClient.get({
            requestURL : `lego/minifigs/${id}/parts/`
        });
    }
}
