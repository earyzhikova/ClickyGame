import React from "react";
import "./Imagecard.css";

const Imagecard = props => (
  <div className ="img-container p-3">
  <div className="card">
        
         <button onClick={props.onClick}><img className="card-img-top" alt={props.name}  src={props.image} />
          </button>
        </div>
        
      </div>
  
)



{/* <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap"> */}

export default Imagecard;