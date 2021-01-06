import React from 'react';
import reason1 from '../../Images/reasonone.png';
import './style.css';
const Facts =()=>{
    return(
        <div className="buakalo_facts mt-5" id="facts">
         <h1 className="facts pt-5">  Facts About Us</h1>
         <p className="fact_para py-2 ">Here are some facts about Bukalo India Private Limited</p>
         <div class="container_facts px-5 py-3">
  <div class="row px-5">
  <div className="col">
        <a className="one"><i class="fa fa-handshake-o fa-5x" aria-hidden="true"><h3>500+ Clients</h3></i></a>
        </div>

    <div class="tex_col col pt-3">
        <a className="two"><i class="fa fa-star fa-5x" aria-hidden="true"></i><h3>100+ Brands</h3></a>
        </div>
        
        <div className="tex_col col pt-3">
            <a className="three"><i class="fa fa-archive fa-5x" aria-hidden="true"></i><h3>2500+ Products</h3></a>
        </div>

        <div className="tex_col col pt-3">
            <a className='four pt-5'><i class="fa fa-thumbs-up fa-5x" aria-hidden="true"></i> <h3>100000+ Customers</h3></a>
        </div>
        
        </div>
    </div>

        </div>
    )
};
export default Facts;