import React from "react";
// import { Card, Button } from "react-bootstrap";

export default function Card(props) {
  return (
    <div className="card">
      <img className="" src={"images/img-" + props.imageUrl + ".jpg"} />
      <div className="card-bottom">
        <p>This is a wider card</p>

        <button type="button" className="btn btn-sm btn-outline-secondary">
          Details
        </button>
      </div>
    </div>
  );
}
