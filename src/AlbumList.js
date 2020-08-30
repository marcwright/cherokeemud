import React from "react";
import Card from "./Card";
// import { Card, Button } from "react-bootstrap";
const allCards = [];
const images = 18;

export default function AlbumList() {
  return (
    <div className="grid-container">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
