import React from "react";
import "./Imagecard.css";

class ImageCard extends React.Component {
  render(){
    return(
      <div className ="img-container p-4">
        <div className="card">
          
          <button onClick={this.props.onClick}><img className="card-img-top" alt={this.props.name}  src={this.props.image} />
          </button>
          
          </div>
          </div>
    )
  }
  
}





export default ImageCard;