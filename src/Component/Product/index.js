import React from 'react';
import product1 from '../../Images/product1.jpg';
import product2 from '../../Images/product2.jpg';
import product3 from '../../Images/product3.jpg';
import productones from '../../Images/productones.jpg';
import productwos from '../../Images/producttwos.jpg';
import productthrees from '../../Images/productthrees.jpg';

import './style.css';
const Product =()=>{
    return(
      <div className="prodct_data">
        <div className="desktop_product_data px-4 py-5">
            <div className="product_data px-5 py-5">
            <div class="row px-5 py-5">
  <div class="col-8 product1 pl-5 pr-1">   
           <img src={product1} class="img-fluid " alt="Responsive image" width="700" height="390" />
</div>
  <div class="col-4 product  pr-4 px-4">
  <img src={productones} class="img-fluid" alt="Responsive image" width="320" height="320" />
  <h5 className="product_headingone mt-4">SWEATBAND</h5>
  <p className="product_paraone">Prevent wrist injury and promote flexible workout sessions. Use Despre’s best wrist support. High-quality fabric for maximum comfortability
</p><a href="https://www.facebook.com/despre.in/"><button type="button" class="btn btn-outline-info">More Details</button>
</a>
  </div>
</div>
</div>


<div className="prodct_datatwo px-5" id="ourproducts ">
            <div class="row px-5 pl-5 ">

            <div class="col-4 product   pl-5">
  <img src={productwos} class="img-fluid" alt="Responsive image" width="270" height="270" />
  <h5 className="product_headingtwo mt-4">
Sports Shorts for Men</h5>
  <p className="product_paratwo">Despre Shorts are specially manufactured for flexible workout session. Increase Power & better Jumping Ability.
</p><a href="https://www.facebook.com/despre.in/"><button type="button" class="btn btn-outline-info">More Details</button>
</a>

  </div>
  <div class="col-8 product1 ">   
           <img src={product2} class="img-fluid " alt="Responsive image" width="700" height="365" />
</div>
 
</div></div>
<div className="prodct_datathree py-5 ">
<div class="row px-5 py-5">
  <div class="col-8 product1 pl-5">   
           <img src={product3} class="img-fluid pl-5 " alt="Responsive image" width="700" height="365" />
</div>
  <div class="col-4 product     ">
  <img src={productthrees} class="img-fluid" alt="Responsive image" width="300" height="300" />
  <h5 className="product_headingthree mt-4">Athletic Thumb Suppport</h5>
  <p className="product_parathree">
Prefer Despre Thumb Support to Prevent the Chances of Injury During Heavy Lifting During Gym Session.
</p><a href="https://www.facebook.com/despre.in/"><button type="button" class="btn btn-outline-info">More Details</button>
</a>
  </div>
</div>
</div>
  </div>
........................................................................................................

<div className="mobile_product_data mt-5  py-5">
          
 
  <div class="col product  ">
  <img src={productones} class="img-fluid" alt="Responsive image"  />
  <h5 className="product_headingone mt-4">SWEATBAND</h5>
  <p className="product_paraone">Prevent wrist injury and promote flexible workout sessions. Use Despre’s best wrist support. High-quality fabric for maximum comfortability
</p><a href="https://www.facebook.com/despre.in/"><button type="button" class="btn btn-outline-info">More Details</button>
</a>
  </div>



   
  <div class="col product mt-1 py-5">
  <img src={productwos} class="img-fluid" alt="Responsive image"  />
  <h5 className="product_headingone mt-4">Sports Shorts for Men</h5>
  <p className="product_paraone">Despre Shorts are specially manufactured for flexible workout session. Increase Power & better Jumping Ability.
</p><a href="https://www.facebook.com/despre.in/"><button type="button" class="btn btn-outline-info">More Details</button>
</a>
 

</div>

  <div class="col product  py-2 ">
  <img src={productthrees} class="img-fluid" alt="Responsive image"  />
  <h5 className="product_headingone mt-4">
Athletic Thumb Suppport</h5>
  <p className="product_paraone">Prefer Despre Thumb Support to Prevent the Chances of Injury During Heavy Lifting During Gym Session.
</p><a href="https://www.facebook.com/despre.in/"><button type="button" class="btn btn-outline-info">More Details</button>
</a>
 
</div>
</div>





      
        </div>
    )
};
export default Product;