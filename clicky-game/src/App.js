import React, { Component } from 'react';
import Imagecard from "./components/Imagecard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Title from "./components/Title";
import images from "./images.js";
import './App.css';


class App extends Component {

  //setting this.state.images to the images.js array
  state = {
    images,
    score: 0,
    topScore: 0,
    message: "Click an Image to Begin!",
    imagesClicked: []
  };


  componentDidMount() {
    var images = this.shuffleArray(this.state.images);
    this.setState({
      images
    })
  }

  handleClick(image) {
    var imagesClicked = this.state.imagesClicked.slice();
    if (imagesClicked.includes(image.id)) { //picked incorrectly
      var images = this.shuffleArray(this.state.images);
      var newTopScore = this.state.score > this.state.topScore ? this.state.score : this.state.topScore;
      this.setState({
        message: "You Guessed Incorrectly!",
        score: 0,
        images,
        imagesClicked: [],
        topScore: newTopScore
      });
    } else { //picked correctly
      var images = this.shuffleArray(this.state.images);
      var newScore= this.state.score + 1;
      this.setState({
        message: "You Guessed Correctly!",
        images,
        score: newScore,        
        imagesClicked: [ ...imagesClicked, image.id]
      });
    }
  }

  //Takes an array and returns shuffled array
  shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  shuffleImage = id => {

  }

  render() {
    return (

      <Wrapper>
        <div className="container">
          <Header
            score={this.state.score}
            topScore={this.state.topScore}
            message={this.state.message}
          />
          <Title />
          <div className="row">
            {images.map(image => (
              <Imagecard
                shuffleImage={this.shuffleImage.Image}
                id={image.id}
                key={image.id}
                name={image.name}
                image={image.image}
                onClick={() => this.handleClick(image)}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
