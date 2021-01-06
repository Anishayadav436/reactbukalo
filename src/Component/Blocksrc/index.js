import React from 'react';
import './style.css';
const Blocksrc=(props)=>{
    return(
        //            <img src={aboutus} class="img-fluid" alt="Responsive image"/>
        <div className="block mt-5">
            <div class="card text-right" >
  <div class="card-body"><center>
      <a className="icons " >{props.icon}</a>
    <h6 class="card-title-blocksrc mt-3">{props.text}</h6>
    </center>

  </div>
  </div>
        </div>
    )
};
export default Blocksrc;