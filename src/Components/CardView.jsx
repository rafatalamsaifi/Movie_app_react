import React from "react";
import "./CardView.css";

const CardView = (props) => {
  return (
    <div className="container">
      <div className="title">{props.item.title}</div>
      <img className="image" src={props.item.poster_path} alt="" />
      <div className="detail">
        <div>DATE: {props.item.release_date}</div>
        <div>RATING: {props.item.vote_average}</div>
      </div>
    </div>
  );
};

export default CardView;
