import axios from 'axios';
import * as actionTypes from "../constants/dataConstants.js";

const URL = "https://api.tvmaze.com/search/shows?q=all";

const getData = () => async(dispatch) => {
    try {
        let { data } = await axios.get(URL);

        dispatch({
            type: actionTypes.GET_DATA_SUCCESS,
            payload: data
        })
    }
    catch (error){
        dispatch({
            type: actionTypes.GET_DATA_FAIL,
            payload: error.message
        })
    }
}

export default getData;