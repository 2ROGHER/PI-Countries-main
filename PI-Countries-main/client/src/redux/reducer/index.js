import { GET_ALL_COUNTRIES, SEARCH_COUNTRY, CREATE_ACTIVITY, ADD_COUNTRY_FAVORITES, DELETE_COUNTRY, DELETE_FROM_FAVORITES } from "../action-types"

const initialState = {
    countries: [],
    activities: [],
    favoriteCountries: [],
}
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: payload,
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                countries: payload
            }
        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...this.activities, payload]

            }
        case ADD_COUNTRY_FAVORITES:
            console.log(state.favoriteCountries);
            return {
                ...state,
                favoriteCountries: [...state.favoriteCountries, payload[0]]
            }
        case DELETE_COUNTRY:
            return {
                ...state,
                countries: state.countries.filter((item) => item.id !== payload[0].id)
            }
        case DELETE_FROM_FAVORITES:
            return {
                ...state,
                favoriteCountries: state.favoriteCountries.filter((item) => item.id !== payload)
            }
        default:
            return {
                ...state
            }

    };
};
export default reducer;