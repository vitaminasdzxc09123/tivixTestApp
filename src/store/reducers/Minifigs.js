import ACTIONS from '../constants/actionsTypes';

const initialState = {
    list              : [],
    detailed          : [],
    isLoadingData     : false,
    isLoadingDetailed : false

};

export default (state = initialState, action = {}) => {
    const { type, data } = action;

    switch (type) {
        case ACTIONS.START_LOADING_MINIFIGS:
            return { ...state, isLoadingData : true };
        case ACTIONS.GET_MINIFIGS_LIST:
            return { ...state, list : data };
        case ACTIONS.FINISH_LOADING_MINIFIGS:
            return { ...state, isLoadingData : false };
        case ACTIONS.START_LOADING_MINIFIGS_DETAILED:
            return { ...state, isLoadingDetailed : true };
        case ACTIONS.GET_MINIFIGS_DETAILED:
            return { ...state, detailed : data };
        case ACTIONS.FINISH_LOADING_MINIFIGS_DETAILED:
            return { ...state, isLoadingDetailed : false };
        default:
            return state;
    }
};
