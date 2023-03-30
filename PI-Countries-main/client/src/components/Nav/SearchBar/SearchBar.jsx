import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountry } from "../../../redux/actions";
import lupa from "../../../assets/img/lupa.png"
import styles from "../Nav.module.css";

const SearchBar = () => {
  const [ nameInput, setNameInput ] = React.useState("");
  const dispatch = useDispatch();
  const handleSearchCountries = (e) => {
    if(e.key === "Enter") dispatch(searchCountry(nameInput));
    dispatch(searchCountry(nameInput));
  };
  React.useEffect(()=>{
    
  },[])
  return (
    <>
      <div className={styles.searchBar}>
        <div>
          <input
            type="text"
            placeholder="Search 247 countries..."
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            onKeyDown={handleSearchCountries}
          />
        </div>
        <div>
          <button
            className={styles.addButton}
            type="submit"
            onClick={handleSearchCountries}
          >
            <img src={lupa} style={{width:"1.7rem"}}/>
          </button>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
