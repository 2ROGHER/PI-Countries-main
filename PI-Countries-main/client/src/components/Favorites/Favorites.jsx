import React from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { deleteCountry } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import { deleteFromFavorites } from "../../redux/actions";
const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteCountries = useSelector((state) => state.favoriteCountries);
   const handleCloseCountryFromFavorites = (id) =>{
    console.log('closing coutnry with id', id);
    dispatch(deleteFromFavorites(id));
  }
  return(
    <>
        {
            favoriteCountries.map(({id, name, capital, flag, key })=>{
              return (
                <div>
                  <button onClick={() => handleCloseCountryFromFavorites(id)}>X</button>
                  <h1>Name: {name}</h1>
                  <h2>Main capital: {capital}</h2>
                  <img src={flag} alt={name} />
                </div>
              );
            })
        }
    </>
  )
};
export default Favorites;
