import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions/index.js";
import Card from "../Card/Card";
const Cards = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  React.useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  console.log(countries);
  return (
    <>
        {
            countries.length>0 ? (countries.map(({id, name, capital, flag })=>{
              return ( 
              <Card key={name} id={id} name={name} capital={capital} flag={flag} />);
            })): null
        }
    </>
  );
};
export default Cards;
