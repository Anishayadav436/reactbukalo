import React from 'react';
import './style.css';
import logo1 from "../../Images/onscinence.png";
import logo2 from "../../Images/dymat.jpg";
const Topbrands=()=>{
    return(
        <div className="top_brands" id="topbrands">
           <div className="topbrands pb-5" id="brands">
          
        
         <h1 className="brands_heading"> Top Brands</h1>

         <p className="brands_para">Here are some top brands exclusively available with us for our buyers</p>
        {/* <div className="brands_logos">
          <div className="row">
            <div class="col" >
              <img scr={logo1}/>
                          </div>
                          <div class="col">
                            <img src={logo2}/>
                          </div> */}
          {/* </div>
        </div> */}
           </div></div>
           
   
    )
};
export default Topbrands;