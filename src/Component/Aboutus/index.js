import React from 'react';
import aboutus from '../../Images/aboutus.png';
import './style.css';
const Aboutus=()=>{
    return(
        <div className="aboutus " id="aboutus">
            <div className='text '>
                
            <h1 className="about_us pt-5">About Us</h1>
       <b>    <hr className="lining" /></b> 
 <center>
            <p className="about_para ">Bukalo India Private Limited is a non-govt company, incorporated on 4 July 2014. 
                It’s a private unlisted company and is classified as a company limited by shares.
                 We are the apex supplier of all range of dietary products, Sports Wear including 
                 Bodybuilding Supplements, Sports Nutrition, Vitamins,  Minerals , Athletic thumb Support, 
                Sweatband and Sports Shorts. We are in Manufacturing, Marketing & Distribution.</p></center>
           
            <img src={aboutus} class="img-fluid" alt="Responsive image"/>
            </div>
        </div>
    )
       
};
export default Aboutus;