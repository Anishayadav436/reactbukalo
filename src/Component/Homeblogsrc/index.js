import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
const Homeblogsrc=(props)=>{
    return(
      <div className="cards">
      <div class="card " ><div className="inner">
      <img class="card-img-top" src={props.imgsrc} alt="Card image cap" width="340" height="198"/>
      </div>

<div class="card-body">
<h5 class="card-title">{props.title}</h5>
<p class=" text-muted cardtext">{props.blogtext}</p>
<NavLink to={props.visit} ><button type="button" class="btn btn-outline-secondary mt-1 mb-1">{props.btnname}</button>
</NavLink>

<h6>{props.cardtag}</h6>

</div>
</div>
  </div>
    )
};
export default Homeblogsrc;