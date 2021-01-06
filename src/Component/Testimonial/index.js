import React from 'react';
import testim from '../../Images/testim.png';
import testimonial2 from '../../Images/testimonial2.jpg'
import testimonial3 from '../../Images/testimonial3.jpg';
import './style.css';
const Testimonial =()=>{
    return(
        <div className="bukalo_testimonial" id="testimonial">
            <h1 className="testimonial mt-5 " >Testimonial</h1>
      <div class="container mt-3 d-flex justify-content-center ">
    <div class="row">
        <div class="col-md-4">
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4"> <img src={testim} class="rounded-circle mt-5" width="100" height="100"/>
                        <h3 class="mt-2 mb-0">Prathmesh Gupte</h3> <small class="user_name">Software developer</small>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4><i class="fa fa-quote-left"></i></h4>
                            <p class="about text-justify">Wide Range of Brand and Products makes Bukalo the one stop solution of all range of fitness products including supplements and accessories.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4" > <img src={testimonial2} class="rounded-circle mt-5" width="100" height="100"/>
                        <h3 class="mt-2 mb-0">Benzon Thockchom</h3> <small class="user_name">Sales executive</small>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4><i class="fa fa-quote-left"></i></h4>
                            <p class="about text-justify">Its inevitable to collaborate with you again. Ease of dealing with Bukalo in every aspect makes you the leader of your arena</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="maincard p-3">
                <div class="thecard">
                    <div class="thefront text-center py-4"> <img src={testimonial3} class="rounded-circle mt-5" width="100" height="100"/>
                        <h3 class="mt-2 mb-0">Manjima</h3> <small class="user_name">Sales Manager</small>
                    </div>
                    <div class="theback py-3 px-3">
                        <div class="quote mt-3">
                            <h4><i class="fa fa-quote-left"></i></h4>
                            <p class="about text-justify">I am very thankful to the team Bukalo for providing a promising range of products at one place. Competitive Price Quality Products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
};
export default Testimonial;