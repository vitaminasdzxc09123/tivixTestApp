import api     from '../../apiSingleton';
import ACTIONS from '../constants/actionsTypes';

export function getMinifigsList(payload) {
    return async (dispatch) => {
        try {
            dispatch({
                type : ACTIONS.START_LOADING_MINIFIGS
            });

            const response = await api.minifigs.list(payload);

            dispatch({
                type : ACTIONS.GET_MINIFIGS_LIST,
                data : response
            });

            dispatch({
                type : ACTIONS.FINISH_LOADING_MINIFIGS
            });
        } catch (err) {
            console.error('[ERROR] getMinifigsList', err);

            return (err);
        }
    };
}

export function getMinifigsDetailed(id) {
    return async (dispatch) => {
        try {
            dispatch({
                type : ACTIONS.START_LOADING_MINIFIGS_DETAILED
            });

            const response = await api.minifigs.detailed(id);

            dispatch({
                type : ACTIONS.GET_MINIFIGS_DETAILED,
                data : response
            });

            dispatch({
                type : ACTIONS.FINISH_LOADING_MINIFIGS_DETAILED
            });
        } catch (err) {
            console.error('[ERROR] getMinifigsDetailed', err);

            return (err);
        }
    };
}
