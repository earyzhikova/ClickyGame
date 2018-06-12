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
  images
};

handleClick () {
 
  var images = this.shuffleArray(this.state.images)
  this.setState({
    images
  });
}

//   //Takes an array and returns shuffled array
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
      <div className="container">
  <Wrapper>
  <Header />
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
    </Wrapper>
    </div>

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

//        {/* <img src={images[1].image} alt='vagas1' /> */}
//       {images.map((image) => {
//         <div className = "container">
//       <div className="row">
//       <div className="col-sm-3">
      
//         return (<Imagecard key={image.name} name={image.name} image={image.image}  />)
//         </div>
//         </div>
//         </div>
//       })} 

//       <div className = "container">
//       <div className="row">
//       <div className="col-sm-3">
//       <Imagecard key={images[0].name} name={images[0].name} image={images[0].image}  />
//       </div>
//       <div className="col-sm-3">
//       <Imagecard key={images[1].name} name={images[1].name} image={images[1].image}  />
//       </div>
//       <div className="col-sm-3">
//       <Imagecard key={images[2].name} name={images[2].name} image={images[2].image}  />
//       </div>
//       <div className="col-sm-3">
//       <Imagecard key={images[3].name} name={images[3].name} image={images[3].image}  />
//       </div>
//       </div>

//             <div className="row">
//       <div className="col-sm-3">
//       <Imagecard key={images[4].name} name={images[4].name} image={images[4].image}  />
//       </div>
//       <div className="col-sm-3">
//       <Imagecard key={images[5].name} name={images[5].name} image={images[5].image}  />
//       </div>
//       <div className="col-sm-3">
//       <Imagecard key={images[6].name} name={images[6].name} image={images[6].image}  />
//       </div>
//       <div className="col-sm-3">
//       <Imagecard key={images[7].name} name={images[7].name} image={images[7].image}  />
//       </div>
//       </div>

//             <div className="row">
//       <div className="col-sm-3">
//       <Imagecard key={images[8].name} name={images[8].name} image={images[8].image}  />
//       </div>
//       <div className="col-sm-3">
//       <Imagecard key={images[9].name} name={images[9].name} image={images[9].image}  />
//       </div>
//       <div className="col-sm-3">
//       <Imagecard key={images[10].name} name={images[10].name} image={images[10].image}  />
//       </div>
//       <div className="col-sm-3">
//       <Imagecard key={images[11].name} name={images[11].name} image={images[11].image}  />
//       </div>
//       </div>
//       </div>
//       </div>
//       </Wrapper>

// )}
// }

// 
// ) */


// class App extends Component {
//   render() {
//     return (
//       // <div className="App">

       
//         <div>
//         <p className="App-intro">
//           Click an image to begin!
//           Don't click twice on one image!
//         </p>
//         <Imagecard
//         name="images.name"
//         image="https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667"
//         />
//       </div>
  
//     );
//   }
// }

export default App;
