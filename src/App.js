import React from "react";
import "./App.css";
import { Alert } from "react-bootstrap";
import Nav from "./Nav";
import Footer from "./Footer";
import Jumbo from "./Jumbo";
import AlbumList from "./AlbumList";

function App() {
  return (
    <div className="App">
      <Nav />

      <main role="main">
        <Jumbo />
        <AlbumList />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
