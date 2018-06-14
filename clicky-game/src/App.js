import React, { Component } from 'react';
import Imagecard from "./components/Imagecard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Title from "./components/Title";
import images from "./images.js";
import './App.css';


class App extends Component  {

//setting this.state.images to the images.js array
state = {
  images,
  score: 0,
  topScore: 0,
  message:"Click an Image to Begin!",
  imagesClicked: []
};

handleClick () {
  var imagesClicked = this.state.imagesClicked.slice();
  // if(imagesClicked.includes(clickedImage)) {
  //   var images = this.shuffleArray(this.state.images)
  //   this.setState({
  //     message: "You Guessed Incorrectly!",
  //     //     score: 0,
  //     images
  //   })
  // }else {
    var images = this.shuffleArray(this.state.images)
    // var newImagesClicked = this.state.imagesClicked.push(clickedImage)
    this.setState({
      message: "You Guessed Correctly!",
      images,
      // imagesClicked: newImagesClicked    
    });
    // console.log(clickedImage);
  // }
  
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
    return(
      
  <Wrapper>
    <div className="container">
  <Header 
  score={this.state.score}
  topScore={this.state.topScore}
  message={this.state.message}
  />
  {/* <Counter /> */}
  <Title />

<div className="row">
  
    {images.map(image => (
      <Imagecard
      shuffleImage={this.shuffleImage.Image}
      id={image.id}
      key={image.id}
      name={image.name}
      image={image.image}
      onClick={() => this.handleClick()}
      />
    ))}
    </div>
    </div>
    </Wrapper>
   

  );
}
}


// class App extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     images
//   };

//   class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state= {
//       currentScore: 0,
//       topScore: 0,
//       clickNotes: 'Click an image to begin!',
//     }
//   }



//     // console.log(images);
//   render(){
// return(
//   <Wrapper>
//     <div className="container">
//       <Header />
//       <Title />



export default App;
