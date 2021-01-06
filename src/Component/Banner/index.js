//redirect to home page banners

import React from 'react';
import banner1 from "../../Images/banner1.jpg";
import banner2 from "../../Images/banner2.jpg";
import banner3 from "../../Images/banner3.jpg";
import banner4 from "../../Images/banner4.jpg";
import banner5 from "../../Images/banner5.jpg";


const Banner=()=>{
    return(
        // mt-3
        <div className="slider ">
              <div id="slideshow" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={banner1}class="img-fluid d-block w-100" alt="Responsive image" width="1263" height="568"/>
             
            </div>

            <div class="carousel-item">
                <img src={banner2} class="img-fluid d-block w-100 " alt="Responsive image" width="1263" height="568"/>
                
            </div>

            <div class="carousel-item">
                <img src={banner3} class="img-fluid d-block w-100" alt="Responsive image" width="1263" height="568"/>
                
            </div>

            <div class="carousel-item">
                <img src={banner4} class="img-fluid d-block w-100" alt="Responsive image" width="1263" height="568"/>
                
            </div>
            <div class="carousel-item">
                <img src={banner5} class="img-fluid d-block w-100" alt="Responsive image" width="1263" height="568"/>
                
            </div>
          
         
       </div>
       <a href="#slideshow" class="carousel-control-prev"
       role="button" data-slide="prev">
    <span class="carousel-control-prev-icon">
    </span>
  <span class="sr-only">Previous</span>
</a>

<a href="#slideshow" class="carousel-control-next"
role="button" data-slide="next">
<span class="carousel-control-next-icon">
</span>
<span class="sr-only">Next</span></a>

    </div>
        </div>
    )
};
export default Banner;
