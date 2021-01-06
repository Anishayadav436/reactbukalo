import React from 'react';
import Blocksrc from '../Blocksrc';
import './style.css';

const Whybukalo=()=>{
    return(<div>
        <div className="desktop_Why_bukalo" id="whybukalo">
            <div className="whybukalo_text pt-4">
                <h2 className="bukalo_heading pt-5 pb-4">Why Bukalo?</h2>
                <hr width="50%" />

                <h5 className="bukalo_subheading pb-2">The brand is equipped with FSSAI, GMP and HACCP certified state of the art Manufacturing  
                    & Warehousing plant in Delhi, which implies that your supplement
                     experiences thorough testing and different quality checks before it reaches you.</h5>
                   <div className="flexes px-5 pb-5 ">
                     <div class="row">
    <div class="col">
                     <Blocksrc icon={<i class="fa fa-thumbs-o-up fa-3x " aria-hidden="true" style={{color: "skyblue"}}i></i>} text="100% Authetnication"/>

                     </div>
                     <div class="col">
                     <Blocksrc icon={<i class="fa fa-check-square-o fa-3x " aria-hidden="true" style={{color: "skyblue"}}></i>} text=" Wide Range"/>
                     </div>
                     <div class="col">
                     <Blocksrc icon={<i class="fa fa-certificate fa-3x " aria-hidden="true" style={{color: "skyblue"}}></i>} text="Quality Product"/>
                     </div>
                     <div class="col">
                     <Blocksrc  icon={<i class="fa fa-usd fa-3x " aria-hidden="true" style={{color: "skyblue"}}></i>} text=" Affordable Price"/>
                     </div>
                     <div class="col">

                     <Blocksrc icon={<i class="fa fa-truck fa-3x " aria-hidden="true" style={{color: "skyblue"}}></i> } text="Fast Delivery"/>
                     </div>
                     </div>
                     </div>

         </div> 


         {/* <div className="mobile_Why_bukalo">
            <div className="whybukalo_text pt-4">
                <h2 className="bukalo_heading pt-5 pb-4">Why Bukalo?</h2>
                <hr width="50%" />

                <h5 className="bukalo_subheading pb-2">The brand is equipped with FSSAI, GMP and HACCP certified state of the art Manufacturing  
                    & Warehousing plant in Delhi, which implies that your supplement
                     experiences thorough testing and different quality checks before it reaches you.</h5>
                   <div className="flexes px-5 pb-5 ">
                     <div class="row">
    <div class="col">
                     <Blocksrc icon={<i class="fa fa-thumbs-o-up fa-3x " aria-hidden="true" style={{color: "skyblue"}}i></i>} text="100% Authetnication"/>

                     </div>
                     <div class="col">
                     <Blocksrc icon={<i class="fa fa-check-square-o fa-3x " aria-hidden="true" style={{color: "skyblue"}}></i>} text=" Wide Range"/>
                     </div>
                     <div class="col">
                     <Blocksrc icon={<i class="fa fa-certificate fa-3x " aria-hidden="true" style={{color: "skyblue"}}></i>} text="Quality Product"/>
                     </div>
                     <div class="col">
                     <Blocksrc  icon={<i class="fa fa-usd fa-3x " aria-hidden="true" style={{color: "skyblue"}}></i>} text=" Affordable Price"/>
                     </div>
                     <div class="col">

                     <Blocksrc icon={<i class="fa fa-truck fa-3x " aria-hidden="true" style={{color: "skyblue"}}></i> } text="Fast Delivery"/>
                     </div>
                     </div>
                     </div>

         </div> 



         
        </div> */}
         
        </div>

        </div>
    )
};
export default Whybukalo;