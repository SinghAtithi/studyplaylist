// import React from 'React';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bansal.css"
import "./Cards.css";
function Cards(props) {
  console.log("working");

  return (
    <div className="cards">
      {/* <a href={props.link} target="blank"> */}
        <div className="card pattern-dots-sm gray-light" style={{ backgroundColor: `${props.color} ` }}>
          <div className="text">
            <div className="logo">
              <h1>{props.name}</h1>
            </div>
            <h4>By {props.creator} </h4>
          </div>
        </div>
        <a href={props.link} target="blank">
        <Button className="btn" variant="secondary">Watch Now!</Button>{""}
      </a>
    </div>
  );
}

export default Cards;
