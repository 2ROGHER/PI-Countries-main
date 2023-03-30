import React, { useState } from "react";
import style from "./Card.module.css";
import {
  deleteCountry,
  deleteFromFavorites,
} from "../../redux/actions/index.js";
import { addCountryFavorites } from "../../redux/actions/index.js";
import favHeart from "../../assets/img/favHeart.png";
import nofavHeart from "../../assets/img/nofavHeart.png";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import cerca from '../../assets/img/cerca.png';
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
    };
    this.handleCloseCard = this.handleCloseCard.bind(this);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
  }
  handleCloseCard(idPais) {
    console.log("adding to id", idPais);
    this.props.deleteCountry(idPais);
  }
  handleAddToFavorites(idPais) {
    console.log("adding to id", idPais);
    if (this.state.isFav) {
      this.setState({ ...this.state.isFav, isFav: false });
      this.props.deleteFromFavorites(idPais);
    } else {
      this.setState({ ...this.state.isFav, isFav: true });
      this.props.addCountryFavorites(idPais);
    }
  }
  componentDidMount() {
    this.props.favoriteCountries.forEach(item => {
      if(item.id === this.props.id){
        this.setState({ ...this.state.isFav, isFav: true });
      };
    });
  }
  render() {
    return (
      <div className={style.cardContainer}>
        <div className={style.Buttons}>
          <button
            onClick={() => {
              this.handleAddToFavorites(this.props.id);
            }}
          >
            {this.state.isFav ? (
              <img
                src={favHeart}
                alt="Favorite heart"
                style={{ width: "2.3rem" }}
              />
            ) : (
              <img
                src={nofavHeart}
                alt="No favorite heart"
                style={{ width: "2.3rem" }}
              />
            )}
          </button>
          <button onClick={() => this.handleCloseCard(this.props.id)}>
            <img src={cerca} alt="close_button" style={{ width: "2.3rem" }} />
          </button>
        </div>
        <img
          className={style.flags}
          src={this.props.flag}
          alt={this.props.name}
        />
        <div className={style.info}>
          <h1>{this.props.name}</h1>
          <h1>Capital: {this.props.capital}</h1>
        </div>
        <div>
          <button className={style.viewDetails}>View details</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteCountries: state.favoriteCountries,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCountry: (idPais) => {
      dispatch(deleteCountry(idPais));
    },
    addCountryFavorites: (idPais) => {
      dispatch(addCountryFavorites(idPais));
    },
    deleteFromFavorites: (idPais) => {
      dispatch(deleteFromFavorites(idPais));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
