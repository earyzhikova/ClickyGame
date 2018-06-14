import React from "react";
import "./Header.css";

class Header extends React.Component{ 
  render(){
    return(
  <header className="App-header">
{/* <img src={logo} className="App-logo" alt="logo" /> */}
{/* <h1 className="App-welcome">Welcome to Clicky Vegas Memory Game</h1>
<h2>Click an image to begin!</h2>
<h2 className="guess-correct">You guessed correctly!</h2>
<h2 className="guess-incorrect">You guessed incorrectly!</h2>

<h2> Score:<span className="Score" >0</span></h2>
<h2>Top score: <span className="Top-score">0</span></h2> */}

<div className="container">
  <div className="row">
    <div className="col-sm">
    <h2>Welcome to Clicky Game!</h2>
    </div>
    <div className="col-sm">
    <h4>{this.props.message}</h4>
    </div>
    <div className="col-sm">
    <h4> Score:<span className="Score" >{this.props.score}</span> || Top score: <span className="Top-score">{this.props.topScore}</span></h4>
    </div>
  </div>
</div>
</header>

    )}
  }


export default Header;

