import * as actionTypes from "../constants/dataConstants.js";

function getDataReducer(state = {data: []}, action) {
    switch(action.type){
        case actionTypes.GET_DATA_SUCCESS:
            return {data: action.payload}

        case actionTypes.GET_DATA_FAIL:
            return {data: action.payload}

        default: 
            return state;
    }
}

export default getDataReducer;