import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <img src={props.img} alt={props.user} />
      <h1>{props.user}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Card;