import React, { Component } from "react";
import Message from "./Message";
import { Link } from "react-router-dom";
import sodaImg from "./Soda.png";
import "./Soda.css";

export default class Soda extends Component {
  render() {
    return (
      <div className="soda">
        <img src={sodaImg} alt="coca cola can" />
        <Message>
          <h1>Soda is my Favorite!</h1>
          <h3>but now I drink sparkling water instead</h3>
          <p>(I still miss soda)</p>
          <Link to="/">Go Back</Link>
        </Message>
        <img src={sodaImg} alt="coca cola can" />
      </div>
    );
  }
}
