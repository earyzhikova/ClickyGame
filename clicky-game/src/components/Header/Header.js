import React from "react";
import "./Header.css";

class Header extends React.Component{ 
  render(){
    return(
  <header className="App-header">


<div className="container">
  <div className="row">
    <div className="col-sm">
    <h2>Welcome to Clicky Game!</h2>
    </div>
    <div className="col-sm">
    <h4>{this.props.message}</h4>

    </div>
    <div className="col-sm">
    <h4> Score: <span className="Score" >{this.props.score}</span> || Top score: <span className="Top-score">{this.props.topScore}</span></h4>
    </div>
  </div>
</div>
</header>

    )}
  }


export default Header;

