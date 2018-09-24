import React from "react";

const styles = {
  img: {
    width: 200,
    height: 200,
    objectFit: "scale-down",
    margin: 10,
    padding: 10,
    border: "solid 1px white",
    background: "#287BF1"
  }
}

const Card = props => (
  <div className="col-3">

    <img style={styles.img} className="" alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} />

  </div>
);

export default Card;
