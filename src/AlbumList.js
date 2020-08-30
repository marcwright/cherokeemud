import React from "react";
import Card from "./Card";
// import { Card, Button } from "react-bootstrap";
const allCards = [];
const images = 18;

export default function AlbumList() {
  for (let i = 1; i < images; i++) {
    allCards.push(<Card key={i} imageUrl={i} />);
  }
  return <div className="grid-container">{allCards}</div>;
}
