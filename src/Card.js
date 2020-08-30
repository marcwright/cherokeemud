import React from "react";
// import { Card, Button } from "react-bootstrap";

export default function Card() {
  return (
    <div className="card">
      <img className="" src="images/img-1.jpg" />
      <title>Placeholder</title>
      <div>
        <p>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <div className="">
          <div className="">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
