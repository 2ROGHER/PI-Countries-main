import axios from "axios";
import { GET_ALL_COUNTRIES, CREATE_ACTIVITY, ADD_COUNTRY_FAVORITES, DELETE_COUNTRY, DELETE_FROM_FAVORITES, SEARCH_COUNTRY } from "../action-types";
export const getAllCountries = () => (dispatch) => {
    return axios.get(`http://localhost:3001/`)
        .then((res) => {
            dispatch({ type: GET_ALL_COUNTRIES, payload: res.data });
        })
        .catch((error) => console.log(error));
}
export const searchCountry = (name) => (dispatch) => {
    return axios.get(`http://localhost:3001/countries`, {
        params: { name } // 'rus' => [blearus, cyprus,sourthen, russia];
    })
        .then((res) => {
            console.log(res.data);
            dispatch({ type: SEARCH_COUNTRY, payload: res.data })
        })
        .catch((error) => console.log(error));
}

export const createActivity = (country) => {
    return {
        type: CREATE_ACTIVITY,
        payload: country
    }
};
export const addCountryFavorites = (idPais) => (dispatch) => {
    return axios.get(`http://localhost:3001/countries/${idPais}`)
        .then((res) => {

            dispatch({ type: ADD_COUNTRY_FAVORITES, payload: res.data });
        })
        .catch((error) => console.log(error));
};
export const deleteCountry = (idPais) => (dispatch) => {
    return axios.get(`http://localhost:3001/countries/${idPais}`)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: DELETE_COUNTRY, payload: res.data });
        })
        .catch((error) => console.log(error));
};
export const deleteFromFavorites = (idPais) => {
    return {
        type: DELETE_FROM_FAVORITES,
        payload: idPais,
    };
};